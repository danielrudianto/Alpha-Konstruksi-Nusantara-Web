import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-pagination',
  templateUrl: './slide-pagination.component.html',
  styleUrls: ['./slide-pagination.component.css'],
})
export class SlidePaginationComponent {
  @Input('slide') slide!: number;
  @Input('total') total!: number;
}
