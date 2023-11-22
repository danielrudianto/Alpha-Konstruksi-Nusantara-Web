import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
})
export class TechStackComponent {
  slides = [
    {
      img: '/assets/images/tf.png',
      title: 'TensorFlow',
    },
    {
      img: '/assets/images/nvidia.png',
      title: 'NVIDIA',
    },
    {
      img: '/assets/images/keras.png',
      title: 'Keras',
    },
    {
      img: '/assets/images/opencv.png',
      title: 'OpenCV',
    },
    {
      img: '/assets/images/hv.png',
      title: 'Hikvision',
    },
    {
      img: '/assets/images/gcp.png',
      title: 'Google Cloud Platform',
    },
  ];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2700,
    autoplaySpeed: 0,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear',
  };
}
