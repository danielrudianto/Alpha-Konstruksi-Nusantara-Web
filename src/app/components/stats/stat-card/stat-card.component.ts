import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css'],
})
export class StatCardComponent {
  @Input('number') number!: number;
  @Input('subtitle') subtitle!: string;
  @Input('icon') icon!: string;
  @Input('unit') unit: string = '';
}
