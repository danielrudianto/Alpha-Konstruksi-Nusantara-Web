import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

enum Lang {
  EN = 'English',
  ID = 'Indonesia',
  ZH = '中文',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('lang') lang: boolean = false;

  @ViewChild('button') button!: ElementRef;
  @ViewChild('dialog') dialog!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) {
    this.renderer.listen('window', 'click', (e: Event) => {});
  }

  isDialogOpened: boolean = false;
  selectedLang: Lang = Lang.ID;

  openDialog() {
    this.isDialogOpened = !this.isDialogOpened;
  }

  goToLang(lang: string) {
    switch (lang) {
      case 'en':
        window.location.href = 'https://alphakonstruksi.id/en';
        break;
      case 'id':
        window.location.href = 'https://alphakonstruksi.id';
        break;
      case 'zh':
        window.location.href = 'https://alphakonstruksi.id/zh';
        break;
    }
  }

  ngOnInit(): void {
    const url = window.location.href;
    if (url.includes('/en')) {
      this.selectedLang = Lang.EN;
    }

    if (url.includes('/zh')) {
      this.selectedLang = Lang.ZH;
    }

    if (url.includes('Blog')) {
      this.selectedLang = Lang.ID;
    }
  }
}
