import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      id: '088',
      name: 'Indah Kiat Pulp & Paper',
      location: 'Tangerang, Indonesia',
      img: '/assets/images/ikpp.jpg',
    },
    {
      id: '041',
      name: 'Jakarta Biopharmaceutical Industry',
      location: 'Cikande, Indonesia',
      img: '/assets/images/jbio.jpg',
    },
    {
      id: '091',
      name: 'Australian Independent School',
      location: 'Jakarta, Indonesia',
      img: '/assets/images/ais.jpg',
    },
    {
      id: '104',
      name: 'Sekolah Citra Kasih Semarang',
      location: 'Semarang, Indonesia',
      img: '/assets/images/sck-semarang.jpg',
    },
  ];

  slideConfig = {
    slidesToShow:
      window.innerWidth > 1400
        ? 4
        : window.innerWidth > 768
        ? 3
        : window.innerWidth > 576
        ? 2
        : 1.2,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    arrows: false,
  };

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.slideConfig = {
        slidesToShow:
          window.innerWidth > 992
            ? 4
            : window.innerWidth > 768
            ? 3
            : window.innerWidth > 576
            ? 2
            : 1.2,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: false,
      };
    });
  }
}
