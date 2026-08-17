# Infrastruktur server — alphakonstruksi.id & profilindah.id

Catatan kondisi server per **17 Agustus 2026**. Pelengkap `SERAH-TERIMA-WEB.md`
(yang membahas kode situs); dokumen ini khusus soal server, nginx, DNS, dan sertifikat.

---

## 1. Peta tiga server

Sempat ada tiga mesin. Sekarang tinggal satu yang melayani semuanya.

| IP | Peran | Status |
|---|---|---|
| `34.101.114.229` | **Mesin utama.** Nama internal `instance-20250506-065401`, IP internal `10.184.0.2` | aktif, melayani seluruh domain |
| `34.101.40.225` | Server lama — dulu melayani `api` & `hrd` | **mati** (timeout); DNS-nya sudah dicabut |
| `34.101.133.52` | Sempat melayani `profilindah.id` | tidak dipakai lagi; DNS sudah dialihkan ke mesin utama |

**Catatan biaya:** kalau instance `34.101.40.225` dan `34.101.133.52` masih ada di
project GCP, kemungkinan masih ditagih padahal tidak melayani apa pun. Belum diperiksa.

---

## 2. Domain dan tujuannya

| Host | Menunjuk ke | Keterangan |
|---|---|---|
| `alphakonstruksi.id` | 34.101.114.229 | apex, redirect 301 ke www |
| `www.alphakonstruksi.id` | 34.101.114.229 | **kanonik** — HTTP 200 |
| `terrabot.alphakonstruksi.id` | 34.101.114.229 | HTTP 200 |
| `services.terrabot.alphakonstruksi.id` | 34.101.114.229 | HTTP 404 di root — normal, itu jawaban aplikasi |
| `profilindah.id` | 34.101.114.229 | dipindah 17 Agu 2026 |
| `www.profilindah.id` | 34.101.114.229 | dipindah 17 Agu 2026 |
| ~~`api.alphakonstruksi.id`~~ | — | record DNS dihapus 17 Agu |
| ~~`hrd.alphakonstruksi.id`~~ | — | record DNS dihapus 17 Agu |

Tidak ada record wildcard `*` — sudah diverifikasi (subdomain acak → NXDOMAIN).

DNS dikelola di **hPanel Hostinger/Niagahoster** (nameserver `ns1/ns2.dns-parking.com`),
bukan di panel registrar biasa. Jalur: Domain → pilih domain → DNS / Nameserver →
Kelola DNS record. Ingat `@` dan `www` adalah **dua record terpisah** — mengubah satu
tidak mengubah yang lain.

Tidak ada `dig` maupun `host` di server. Pakai:

```bash
sudo resolvectl flush-caches
getent hosts NAMA.DOMAIN | awk '{print $1}'
resolvectl query NAMA.DOMAIN        # menunjukkan apakah jawabannya dari cache
```

**Peringatan:** `resolvectl flush-caches` hanya membersihkan cache di mesin itu.
Di belakangnya masih ada cache resolver VPC GCP yang memegang jawaban lama sampai
TTL habis (4–24 jam di Hostinger) dan **tidak bisa dipercepat dari sisi kita**.
Karena itu, untuk memastikan sebuah record benar-benar sudah terhapus, periksa dari
luar — bukan dari server itu sendiri.

---

## 3. Yang dibersihkan 17 Agustus 2026

**Aplikasi HR dimatikan.** `pm2` proses `app` →
`/home/danielrudianto/Alpha-Konstruksi-Nusantara-Human-Resource/dist/app.js`, port 5000,
0 req/min. Dihapus dengan `pm2 delete app` + `pm2 save --force` (tanpa `--force`,
`dump.pm2` tetap menyimpan `app` dan ia hidup lagi saat reboot).
Database MongoDB-nya sudah dihapus lebih dulu. Kode sumber dicadangkan ke
`~/backup-hr-2026-08-17.tar.gz`.

**Vhost dinonaktifkan:** `sites-enabled/api`, `sites-enabled/hrd` (via `unlink`;
berkas aslinya tetap di `sites-available` kalau perlu dikembalikan).

**Sertifikat dihapus:** `api.alphakonstruksi.id`, `hrd.alphakonstruksi.id`,
dan `alphakonstruksi.id-0001` — duplikat apex-saja yang tidak dirujuk vhost mana pun;
semua blok memakai `/etc/letsencrypt/live/alphakonstruksi.id/`.

**`error_log` diturunkan dari `debug` ke `warn`.** Ini temuan terbesar sesi ini:
`/etc/nginx/nginx.conf` baris 4 berisi `error_log /var/log/nginx/error.log debug;`,
menghasilkan **120 MB log per hari** (banding `access.log` 1,5 MB/hari) — semuanya
baris `[debug]`, nol error sebenarnya. Selain memenuhi disk, debug logging
memperlambat setiap permintaan dan menyimpan IP pengunjung mentah-mentah.
Cadangan config: `/etc/nginx/nginx.conf.bak`.

---

## 4. Header keamanan — TERPASANG PENUH

Berkas: **`/etc/nginx/snippets/akn-keamanan.conf`**, di-include dari vhost
`sites-enabled/landing`. Ini **satu-satunya** sumber HSTS di seluruh server —
sudah diverifikasi dengan grep rekursif di `/etc/nginx/` dan
`/etc/letsencrypt/options-ssl-nginx.conf` (bersih; Certbot tidak menambah HSTS).

Isinya: CSP, `Cross-Origin-Opener-Policy`, `X-Content-Type-Options`,
`Referrer-Policy`, HSTS, dan `error_page 404`.

Verifikasi yang benar bukan membaca berkas, melainkan membaca config yang aktif:

```bash
sudo nginx -T | grep -i strict-transport      # apa yang BENAR-BENAR dimuat
grep -rn 'Strict-Transport' /etc/nginx/       # apakah ada sumber ganda
```

**Ingat:** `grep -r` **tidak** mengikuti symlink, jadi
`grep -rn ... /etc/nginx/sites-enabled/` selalu kosong dan menyesatkan.
Pakai `nginx -T`, atau grep ke `sites-available/`.

### Status HSTS — final

Dinaikkan bertahap: `max-age=300` → `86400` → **`63072000; includeSubDomains`** (2 tahun).
Terpasang dan terverifikasi live 17 Agu 2026:

```
strict-transport-security: max-age=63072000; includeSubDomains
```

Berlaku untuk seluruh subdomain `alphakonstruksi.id`. Yang aktif tinggal `www`,
`terrabot`, dan `services.terrabot` — ketiganya di mesin utama dan sehat lewat HTTPS.
`profilindah.id` domain terpisah, tidak terpengaruh.

`preload` **sengaja tidak dipakai**: mendaftarkan domain ke daftar bawaan browser dan
pencabutannya makan waktu berbulan-bulan. Lighthouse hanya menandainya "Medium".

**Jangan tambahkan `add_header` di dalam blok `location` mana pun.** Di nginx,
`add_header` tidak diwariskan bila blok anak punya `add_header` sendiri — seluruh
header keamanan akan hilang di location itu, tanpa peringatan dan tanpa galat.

---

## 5. Sertifikat

| Nama | Domain | Berlaku s/d |
|---|---|---|
| `alphakonstruksi.id` | apex + www | dikelola Certbot |
| `terrabot.alphakonstruksi.id` | terrabot + services.terrabot | dikelola Certbot |
| `profilindah.id` | apex + www | diperbarui 17 Agu 2026 |

**Urutan yang benar saat membuang sebuah situs:** nonaktifkan vhost dulu
(`unlink` + `nginx -t` + reload), **baru** hapus sertifikatnya. Terbalik → nginx
gagal reload karena config merujuk berkas yang sudah hilang.

Certbot membatalkan **seluruh** permintaan bila satu domain gagal validasi, jadi
menjalankannya sebelum DNS siap tidak merusak apa pun — hanya gagal.

---

## 6. Firewall — sudah rapat

Diuji **dari luar** (bukan dari server sendiri) pada 17 Agu:

```
80    TERBUKA     wajar
443   TERBUKA     wajar
22    tertutup    SSH lewat IAP tunnel (35.235.245.65)
5000  tertutup
7500  tertutup
3306  tertutup    MySQL
6379  tertutup    Redis
7700  tertutup    Meilisearch
```

Karena 80/443 terbaca TERBUKA, ujinya valid — bukan koneksi penguji yang diblokir.

Beberapa aplikasi mengikat ke `0.0.0.0` alih-alih `127.0.0.1` (dulu port 5000,
sekarang python di 7500). Tertutup di level firewall GCP, jadi tidak mendesak,
tapi lebih baik aplikasinya sendiri diikat ke localhost.

**Menguji port dari server itu sendiri tidak sahih.** Harus dari luar.

---

## 7. Layanan yang berjalan di mesin utama

| Port | Proses | Ikatan |
|---|---|---|
| 80 / 443 | nginx 1.24.0 | publik |
| 7500 | python — **backend TerraBot** | `0.0.0.0` |
| 3306 / 33060 | mysqld | `127.0.0.1` |
| 6379 | redis-server | `127.0.0.1` |
| 7700 | meilisearch | `127.0.0.1` |
| 20201 / 20202 | otelopscol, fluent-bit | agen monitoring GCP |

TerraBot dilayani **python di port 7500**, bukan pm2 — karena itu mematikan
pm2 `app` tidak menyentuh TerraBot sama sekali.

---

## 8. Kronologi profilindah.id

Situs ini dilayani dari mesin utama (vhost `sites-enabled/pi-landing`), tetapi
DNS-nya sempat menunjuk `34.101.133.52` sehingga:

- sertifikatnya **gagal diperpanjang sejak 8 Juli 2026** — tantangan Let's Encrypt
  mendarat di mesin lama, dan
- situsnya praktis **mati** untuk pengunjung: `curl` lewat DNS timeout, sementara
  `curl --resolve` langsung ke mesin utama menjawab HTTP 200.

Setelah record `@` dialihkan ke `34.101.114.229`, certbot memperpanjang sendiri dan
apex kembali normal. Record `www` menyusul, lalu sertifikatnya diperluas:

```bash
sudo certbot --nginx -d profilindah.id -d www.profilindah.id
```

Ini sekaligus memperbaiki masalah kedua: sertifikat lama hanya mencakup
`profilindah.id` tanpa `www`, padahal `server_name` vhost menyertakan keduanya.

---

## 9. Hasil Lighthouse produksi (17 Agu 2026)

| | Perf | A11y | BP | SEO |
|---|---|---|---|---|
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 99 | 100 | 100 | 100 |

Sisa 1 poin di mobile adalah jitter pengukuran, tidak layak dikejar.

---

## 10. Pelajaran operasional dari sesi ini

- **`curl` tanpa `--max-time` menggantung tanpa batas** kalau koneksi tidak dijawab.
  Selalu `--max-time 10`.
- **`cmd | head -1` menelan exit code `curl`**, jadi `|| echo "GAGAL"` tidak pernah
  menyala dan kegagalan tampak seperti keberhasilan. Pakai `curl -sS` supaya pesan
  errornya sendiri yang muncul.
- **`grep -r` melewati symlink** — isi `sites-enabled` symlink semua.
- **`grep` nama domain di `access.log` selalu kosong**: format `combined` bawaan
  nginx tidak mencatat nama host sama sekali. Itu bukan bukti tidak ada trafik.
- **`pm2 save` tanpa `--force` di-skip** kalau daftar proses kosong, sehingga
  `dump.pm2` lama bertahan dan proses hidup lagi saat reboot.
- **Cek DNS dari luar, bukan dari server.** Resolver VPC GCP memegang jawaban lama
  sampai TTL habis; `resolvectl query` akan menyebut `Data from: cache`.
- `unlink` lebih baik daripada `rm` untuk vhost: berkas asli tetap di `sites-available`.
- `truncate -s 0` lebih baik daripada `rm` untuk log yang sedang dibuka nginx.
- Membaca output `printf` + `curl` yang berdempetan di satu baris mudah menipu —
  tiga host yang "kelihatan lolos" ternyata tidak menjawab sama sekali.

---

## 11. Sisa pekerjaan

1. Rapikan peringatan `protocol options redefined for 0.0.0.0:443`
   (`sites-enabled/pi-landing:3` dan `sites-enabled/terrabot:11`) — kosmetik,
   tidak merusak apa pun
2. Ikat aplikasi python port 7500 ke `127.0.0.1`
3. Periksa apakah instance `34.101.40.225` dan `34.101.133.52` masih ditagih di GCP
4. `/var/www/html` (987 MB, situs lama) — jangan dihapus sebelum peta redirect
   selesai; lihat `SERAH-TERIMA-WEB.md` bagian 7
5. Pertimbangkan `access_log` per-vhost, atau `log_format` yang menyertakan `$host`,
   supaya lain kali bisa membuktikan sebuah situs benar-benar tidak dipakai
