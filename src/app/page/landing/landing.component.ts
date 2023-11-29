import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(
    private router: Router,
    private metaService: Meta,
    private titleService: Title
  ) {}
  ngOnInit(): void {
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

    AOS.init();
    if (window.location.href.includes('/en')) {
      // Set up meta tags
      this.metaService.addTags([
        {
          name: 'description',
          content:
            'PT Alpha Konstruksi Nusantara - Reliable geotechnical contractor in Indonesia. Specialized in bored-pile construction with more than a decade of experience. Browse our past projects that stand out and find out how we build using the latest technology for quality and safety.',
        },
        {
          name: 'keywords',
          content:
            'contractor, geotechnical, bored-pile, service, construction, civil, building, road, bridge, toll-road, highway, ring-road, outer-ring-road, inner-ring-road, ring-road-jakarta, ring-road-java, ring-road-java-central, ring-road-java-west, ring-road-java-east, ring-road-java-north, ring-road-java-south, ring-road-java-southeast, ring-road-java-bali, ring-road-java-madura, ring-road-java-kalimantan, ring-road-java-sumatera, ring-road-java-sulawesi, ring-road-java-papua, ring-road-java-maluku, ring-road-java-nusa-tenggara, ring-road-java-riau-islands, ring-road-java-bangka-belitung, ring-road-java-lampung, ring-road-java-banten, ring-road-java-aceh, ring-road-java-yogyakarta, ring-road-java-jakarta, ring-road-java-bandung, ring-road-java-surabaya, ring-road-java-semarang, ring-road-java-medan, ring-road-java-palembang, ring-road-java-makassar, ring-road-java-bogor, ring-road-java-tangerang, ring-road-java-depok, ring-road-java-bekasi, ring-road-java-batam, ring-road-java-pontianak, ring-road-java-banjar-masih, ring-road-java-banjar-negara, ring-road',
        },
        {
          name: 'og:url',
          content: 'https://alphakonstruksi.id/en',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content:
            'Alpha Konstruksi Nusantara | Indonesian Geotechnical Contractor',
        },
        {
          name: 'og:description',
          content:
            'PT Alpha Konstruksi Nusantara - Reliable geotechnical contractor in Indonesia. Specialized in bored-pile construction with more than a decade of experience. Browse our past projects that stand out and find out how we build using the latest technology for quality and safety.',
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
          content: 'https://alphakonstruksi.id/en',
        },
        {
          name: 'twitter:title',
          content:
            'Alpha Konstruksi Nusantara | Indonesian Geotechnical Contractor',
        },
        {
          name: 'twitter:description',
          content:
            'PT Alpha Konstruksi Nusantara - Reliable geotechnical contractor in Indonesia. Specialized in bored-pile construction with more than a decade of experience. Browse our past projects that stand out and find out how we build using the latest technology for quality and safety.',
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
        'Alpha Konstruksi Nusantara | Indonesian Geotechnical Contractor'
      );
    } else if (window.location.href.includes('/zh')) {
      // Set up meta tags
      this.metaService.addTags([
        {
          name: 'description',
          content:
            'PT Alpha Konstruksi Nusantara - 可靠的印度尼西亚地基承包商。 专业从事钻孔桩施工十多年。 浏览我们过去的项目，并了解我们如何使用最新技术进行质量和安全性的建设。',
        },
        {
          name: 'keywords',
          content:
            '承包商，地基，钻孔桩，服务，建筑，土木，建筑，道路，桥梁，收费公路，高速公路，环路，外环路，内环路，环路雅加达，环路爪哇，环路爪哇中部，环路爪哇西部，环路爪哇东部，环路爪哇北部，环路爪哇南部，环路爪哇东南部，环路爪哇巴厘岛，环路爪哇马杜拉，环路爪哇加里曼丹，环路爪哇苏门答腊，环路爪哇苏拉威西，环路爪',
        },
        {
          name: 'og:url',
          content: 'https://alphakonstruksi.id/zh',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content: 'Alpha Konstruksi Nusantara | 印度尼西亚岩土工程承包商',
        },
        {
          name: 'og:description',
          content:
            'PT Alpha Konstruksi Nusantara - 可靠的印度尼西亚地基承包商。 专业从事钻孔桩施工十多年。 浏览我们过去的项目，并了解我们如何使用最新技术进行质量和安全性的建设。',
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
          content: 'https://alphakonstruksi.id/zh',
        },
        {
          name: 'twitter:title',
          content: 'Alpha Konstruksi Nusantara | 印度尼西亚岩土工程承包商',
        },
        {
          name: 'twitter:description',
          content:
            'PT Alpha Konstruksi Nusantara - 可靠的印度尼西亚地基承包商。 专业从事钻孔桩施工十多年。 浏览我们过去的项目，并了解我们如何使用最新技术进行质量和安全性的建设。',
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
        'Alpha Konstruksi Nusantara | 印度尼西亚岩土工程承包商'
      );
    } else {
      this.metaService.addTags([
        {
          name: 'description',
          content:
            'PT Alpha Konstruksi Nusantara - Kontraktor geoteknik tepercaya di Indonesia. Spesialis dalam konstruksi bored-pile dengan pengalaman lebih dari satu dekade. Telusuri proyek-proyek terdahulu kami yang mencolok dan temukan bagaimana kami membangun dengan menggunakan teknologi terkini untuk kualitas dan keamanan.',
        },
        {
          name: 'keywords',
          content:
            'kontraktor, geoteknik, bored-pile, jasa, konstruksi, sipil, bangunan, gedung, jalan, jembatan, jalan-tol, jalan-raya, jalan-lingkar, jalan-lingkar-luar, jalan-lingkar-dalam, jalan-lingkar-jakarta, jalan-lingkar-jawa, jalan-lingkar-jawa-tengah, jalan-lingkar-jawa-barat, jalan-lingkar-jawa-timur, jalan-lingkar-jawa-utara, jalan-lingkar-jawa-selatan, jalan-lingkar-jawa-tenggara, jalan-lingkar-jawa-bali, jalan-lingkar-jawa-madura, jalan-lingkar-jawa-kalimantan, jalan-lingkar-jawa-sumatera, jalan-lingkar-jawa-sulawesi, jalan-lingkar-jawa-papua, jalan-lingkar-jawa-maluku, jalan-lingkar-jawa-nusa-tenggara, jalan-lingkar-jawa-kepulauan-riau, jalan-lingkar-jawa-bangka-belitung, jalan-lingkar-jawa-lampung, jalan-lingkar-jawa-banten, jalan-lingkar-jawa-aceh, jalan-lingkar-jawa-yogyakarta, jalan-lingkar-jawa-jakarta, jalan-lingkar-jawa-bandung, jalan-lingkar-jawa-surabaya, jalan-lingkar-jawa-semarang, jalan-lingkar-jawa-medan, jalan-lingkar-jawa-palembang, jalan-lingkar-jawa-makassar, jalan-lingkar-jawa-bogor, jalan-lingkar-jawa-tangerang, jalan-lingkar-jawa-depok, jalan-lingkar-jawa-bekasi, jalan-lingkar-jawa-batam, jalan-lingkar-jawa-pontianak, jalan-lingkar-jawa-banjar-masih, jalan-lingkar-jawa-banjar-negara, jalan-ling',
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
            'Alpha Konstruksi Nusantara | Kontraktor Geoteknik Indonesia',
        },
        {
          name: 'og:description',
          content:
            'PT Alpha Konstruksi Nusantara - Kontraktor geoteknik tepercaya di Indonesia. Spesialis dalam konstruksi bored-pile dengan pengalaman lebih dari satu dekade. Telusuri proyek-proyek terdahulu kami yang mencolok dan temukan bagaimana kami membangun dengan menggunakan teknologi terkini untuk kualitas dan keamanan.',
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
          content: 'https://alphakonstruksi.id',
        },
        {
          name: 'twitter:title',
          content:
            'Alpha Konstruksi Nusantara | Kontraktor Geoteknik Indonesia',
        },
        {
          name: 'twitter:description',
          content:
            'PT Alpha Konstruksi Nusantara - Kontraktor geoteknik tepercaya di Indonesia. Spesialis dalam konstruksi bored-pile dengan pengalaman lebih dari satu dekade. Telusuri proyek-proyek terdahulu kami yang mencolok dan temukan bagaimana kami membangun dengan menggunakan teknologi terkini untuk kualitas dan keamanan.',
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
        'Alpha Konstruksi Nusantara | Kontraktor Geoteknik Indonesia'
      );
    }
  }
}
