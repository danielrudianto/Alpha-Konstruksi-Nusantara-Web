import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  index: number = 0;

  slides = [
    {
      img: '/assets/images/bukit-sari-01.webp',
      title: 'Bukit Sari',
    },
    {
      img: '/assets/images/bukit-sari-02.webp',
      title: 'Bukit Sari',
    },
    {
      img: '/assets/images/sck-semarang-01.webp',
      title: 'SCK Semarang',
    },
  ];

  slideConfig = {
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  afterChange(event: any) {
    this.index = event.currentSlide;
  }
}
