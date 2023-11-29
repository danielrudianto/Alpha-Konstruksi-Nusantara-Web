import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  featured: any[] = [];
  blogs: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.http
      .get('https://alphakonstruksi.id/api/Blog/Featured')
      .subscribe((data) => {
        this.featured = data as any[];
      });

    this.route.queryParams.subscribe((data) => {
      if (data.hasOwnProperty('page')) {
        this.http
          .get('https://alphakonstruksi.id/api/Blog?page=' + data['page'])
          .subscribe((data) => {
            this.blogs = data as any[];
          });
      } else {
        this.http
          .get('https://alphakonstruksi.id/api/Blog?page=1')
          .subscribe((data) => {
            this.blogs = data as any[];
          });
      }
    });

    this.metaService.removeTag('name="description"');
    this.metaService.removeTag('name="keywords"');

    this.metaService.removeTag('name="og:url"');
    this.metaService.removeTag('name="og:type"');
    this.metaService.removeTag('name="og:title"');
    this.metaService.removeTag('name="og:image"');

    this.metaService.removeTag('name="twitter:card"');
    this.metaService.removeTag('name="twitter:domain"');
    this.metaService.removeTag('name="twitter:url"');
    this.metaService.removeTag('name="twitter:title"');
    this.metaService.removeTag('name="twitter:description"');
    this.metaService.removeTag('name="twitter:image"');
    this.metaService.removeTag('name="og:locale"');

    if (window.location.href.includes('/en')) {
      // Set up meta tags
      this.metaService.addTags([
        {
          name: 'description',
          content:
            'Alpha Konstruksi Nusantara official blog page. Read our latest news and articles about construction, civil, and building.',
        },
        {
          name: 'keywords',
          content:
            'geotechnical contractor, bored pile, bored pile contractor, bored pile construction, bored pile indonesia, bored pile jakarta, bored pile surabaya, bored pile bandung, bored pile semarang, bored pile medan, bored pile palembang, bored pile makassar, bored pile bali, bored pile kalimantan, bored pile sumatera, bored pile sulawesi, bored pile jawa, bored pile sumatera, bored pile papua, bored pile maluku, bored pile nusa tenggara, bored pile aceh, bored pile riau, bored pile lampung, bored pile bengkulu, bored pile jambi, bored pile bangka belitung, bored pile gorontalo, bored pile kepulauan riau, bored pile yogyakarta, bored pile kalimantan barat, bored pile kalimantan timur, bored pile kalimantan selatan, bored pile kalimantan utara, bored pile kalimantan tengah, bored pile sulawesi utara, bored pile sulawesi selatan, bored pile sulawesi barat, bored pile sulawesi tenggara, bored pile sulawesi tengah, bored pile maluku utara, bored pile maluku utara, bored pile papua barat, bored pile papua timur',
        },
        {
          name: 'og:url',
          content: 'https://alphakonstruksi.id/en/Blog',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content:
            'Alpha Konstruksi Nusantara | Indonesian Geotechnical Contractor | Blog',
        },
        {
          name: 'og:description',
          content:
            'Alpha Konstruksi Nusantara official blog page. Read our latest news and articles about construction, civil, and building.',
        },

        {
          name: 'og:image',
          content: 'https://alphakonstruksi.id/og_image_en.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:domain',
          content: 'alphakonstruksi.id',
        },
        {
          name: 'twitter:url',
          content: 'https://alphakonstruksi.id/en/Blog',
        },
        {
          name: 'twitter:title',
          content:
            'Alpha Konstruksi Nusantara | Indonesian Geotechnical Contractor | Blog',
        },
        {
          name: 'twitter:description',
          content:
            'Alpha Konstruksi Nusantara official blog page. Read our latest news and articles about construction, civil, and building.',
        },
        {
          name: 'twitter:image',
          content: 'https://alphakonstruksi.id/og_image_en.png',
        },
        {
          name: 'og:locale',
          content: 'en_US',
        },
      ]);

      this.titleService.setTitle(
        'Alpha Konstruksi Nusantara | Indonesian Geotechnical Contractor | Blog'
      );
    } else if (window.location.href.includes('/zh')) {
      // Set up meta tags
      this.metaService.addTags([
        {
          name: 'description',
          content:
            'Alpha Konstruksi Nusantara官方博客页面。阅读我们关于建筑，土木和建筑的最新新闻和文章。',
        },
        {
          name: 'keywords',
          content:
            // Keywords for Blog in Chinese
            '地基承包商，钻孔桩，钻孔桩承包商，钻孔桩施工，钻孔桩印度尼西亚，钻孔桩雅加达，钻孔桩泗水，钻孔桩万隆，钻孔桩三宝垄，钻孔桩棉兰，钻孔桩巴厘岛，钻孔桩加里曼丹，钻孔桩苏门答腊，钻孔桩苏拉威西，钻孔桩爪哇，钻孔桩苏门答腊，钻孔桩巴布亚，钻孔桩马鲁古，钻孔桩努沙登加拉，钻孔桩亚齐，钻孔桩廖内，钻孔桩明古鲁，钻孔桩万丹，钻孔桩哥伦打洛，钻孔桩邦加－勿里洞群岛，钻孔桩日惹，钻孔桩西加里曼丹，钻孔桩东加里曼丹，钻孔桩南加里曼丹，钻孔桩北加里曼丹，钻孔桩中加里曼丹，钻孔桩北苏拉威西，钻孔桩南苏拉威西，钻孔桩西苏拉威西，钻孔桩东南苏拉威西，钻孔桩中苏拉威西，钻孔桩北马鲁古，钻孔桩北马鲁古，钻孔桩西',
        },
        {
          name: 'og:url',
          content: 'https://alphakonstruksi.id/zh/Blog',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content:
            'Alpha Konstruksi Nusantara | 印度尼西亚岩土工程承包商 | 博客',
        },
        {
          name: 'og:description',
          content:
            'Alpha Konstruksi Nusantara官方博客页面。阅读我们关于建筑，土木和建筑的最新新闻和文章。',
        },

        {
          name: 'og:image',
          content: 'https://alphakonstruksi.id/og_image_zh.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:domain',
          content: 'alphakonstruksi.id',
        },
        {
          name: 'twitter:url',
          content: 'https://alphakonstruksi.id/zh/Blog',
        },
        {
          name: 'twitter:title',
          content:
            'Alpha Konstruksi Nusantara | 印度尼西亚岩土工程承包商 | 博客',
        },
        {
          name: 'twitter:description',
          content:
            'Alpha Konstruksi Nusantara官方博客页面。阅读我们关于建筑，土木和建筑的最新新闻和文章。',
        },
        {
          name: 'twitter:image',
          content: 'https://alphakonstruksi.id/og_image_zh.png',
        },
        {
          name: 'og:locale',
          content: 'zh_CN',
        },
      ]);

      this.titleService.setTitle(
        'Alpha Konstruksi Nusantara | 印度尼西亚岩土工程承包商 | 博客'
      );
    } else {
      this.metaService.addTags([
        {
          name: 'description',
          content:
            'Blog resmi Alpha Konstruksi Nusantara. Baca berita dan artikel terbaru kami tentang konstruksi, sipil, dan bangunan.',
        },
        {
          name: 'keywords',
          content:
            // Keywords for Blog in Indonesian
            'kontraktor geoteknik, bored pile, kontraktor bored pile, konstruksi bored pile, bored pile indonesia, bored pile jakarta, bored pile surabaya, bored pile bandung, bored pile semarang, bored pile medan, bored pile bali, bored pile kalimantan, bored pile sumatera, bored pile sulawesi, bored pile jawa, bored pile sumatera, bored pile papua, bored pile maluku, bored pile nusa tenggara, bored pile aceh, bored pile riau, bored pile makassar, bored pile banten, bored pile gorontalo, bored pile bangka-belitung, bored pile yogyakarta, bored pile kalimantan barat, bored pile kalimantan timur, bored pile kalimantan selatan, bored pile kalimantan utara, bored pile kalimantan tengah, bored pile sulawesi utara, bored pile sulawesi selatan, bored pile sulawesi barat, bored pile sulawesi tenggara, bored pile sulawesi tengah, bored pile maluku utara, bored pile maluku utara, bored pile sulawesi barat daya',
        },
        {
          name: 'og:url',
          content: 'https://alphakonstruksi.id',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content:
            'Alpha Konstruksi Nusantara | Kontraktor Geoteknik Indonesia | Blog',
        },
        {
          name: 'og:description',
          content:
            'Halaman blog resmi Alpha Konstruksi Nusantara. Baca berita dan artikel terbaru kami tentang konstruksi, sipil, dan bangunan.',
        },

        {
          name: 'og:image',
          content: 'https://alphakonstruksi.id/og_image.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:domain',
          content: 'alphakonstruksi.id',
        },
        {
          name: 'twitter:url',
          content: 'https://alphakonstruksi.id/Blog',
        },
        {
          name: 'twitter:title',
          content:
            'Alpha Konstruksi Nusantara | Kontraktor Geoteknik Indonesia | Blog',
        },
        {
          name: 'twitter:description',
          content:
            'Halaman blog resmi Alpha Konstruksi Nusantara. Baca berita dan artikel terbaru kami tentang konstruksi, sipil, dan bangunan.',
        },
        {
          name: 'twitter:image',
          content: 'https://alphakonstruksi.id/og_image.png',
        },
        {
          name: 'og:locale',
          content: 'id_ID',
        },
      ]);

      this.titleService.setTitle(
        'Alpha Konstruksi Nusantara | Kontraktor Geoteknik Indonesia | Blog'
      );
    }
  }

  slideConfig = {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  encode(url: string) {
    return encodeURIComponent(url.replaceAll(' ', '-'));
  }
}
