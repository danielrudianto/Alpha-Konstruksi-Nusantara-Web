// PT Alpha Konstruksi Nusantara — vanilla JS (tanpa dependensi)

// Hero slideshow (crossfade tiap 4,5 detik)
(function () {
  var slides = document.querySelectorAll('.slides img');
  var cap = document.getElementById('slide-cap');
  var loc = document.getElementById('slide-loc');
  var num = document.getElementById('slide-num');
  var meta = [
    { cap: 'Bored pile', loc: 'Semarang, Jawa Tengah' },
    { cap: 'Drone shot', loc: 'Bukit Sari' },
    { cap: 'Area kerja', loc: 'Bukit Sari' }
  ];
  var i = 0;
  if (!slides.length) return;
  setInterval(function () {
    slides[i].classList.remove('on');
    i = (i + 1) % slides.length;
    slides[i].classList.add('on');
    if (cap) cap.textContent = meta[i].cap;
    if (loc) loc.textContent = meta[i].loc;
    if (num) num.textContent = i + 1;
  }, 4500);
})();

// Nav: sembunyi saat scroll turun, muncul saat scroll naik
(function () {
  var nav = document.querySelector('.site-nav');
  var links = document.getElementById('nav-links');
  var lastY = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > lastY + 4 && y > 120) {
      nav.classList.add('nav-hidden');
      if (links) links.classList.remove('open');
    } else if (y < lastY - 4 || y <= 120) {
      nav.classList.remove('nav-hidden');
    }
    if (Math.abs(y - lastY) > 4) lastY = y;
  }, { passive: true });
})();

// Burger menu (mobile)
(function () {
  var btn = document.getElementById('burger');
  var links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', function () { links.classList.toggle('open'); });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
})();
