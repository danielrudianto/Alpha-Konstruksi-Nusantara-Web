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
