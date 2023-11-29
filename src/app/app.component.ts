import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/assets/transition.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  title = 'alpha-konstruksi-nusantara-web';

  ngOnInit() {}
}
