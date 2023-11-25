import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  index: number = 0;
  services = [
    {
      img: '/assets/images/sck-semarang-02.webp',
      title: 'Bored Piling',
      description:
        'Layanan bored piling kami membawa fondasi konstruksi Anda ke tingkat berikutnya. Dengan fokus pada ketepatan dan keandalan, kami menggunakan teknologi mutakhir dan tim ahli untuk menjalankan proyek boredpiling dengan keahlian tinggi. Dengan lebih dari satu dekade pengalaman di berbagai proyek di seluruh wilayah Indonesia, kami memahami betul kebutuhan unik setiap proyek. Fondasi kokoh yang kami hasilkan tidak hanya memenuhi standar tertinggi, tetapi juga memberikan dasar yang andal untuk kesuksesan proyek Anda.',
    },
    {
      img: '/assets/images/pondok-indah-01.webp',
      title: 'Strauss Piling',
      description:
        'Kami menyajikan layanan stauss piling dengan dedikasi tinggi untuk fondasi yang kuat dan tahan lama. Teknologi canggih dan tim ahli kami memastikan penerapan metode stauss piling yang efisien, memenuhi standar ketat, dan menghasilkan fondasi yang kokoh. Dengan pengalaman lebih dari satu dekade, kami telah menjadi pilihan utama dalam memberikan solusi fondasi yang andal untuk berbagai proyek konstruksi di seluruh Indonesia. Keunggulan kami terletak pada inovasi, ketepatan waktu, dan komitmen terhadap kepuasan pelanggan.',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    arrows: false,
  };

  afterChange(event: any) {
    this.index = event.currentSlide;
  }

  goToIndex(i: number) {
    this.index = i;
    this.slickModal.slickGoTo(i);
  }
}
