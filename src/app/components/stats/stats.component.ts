import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
  stats = [
    {
      icon: 'bi bi-kanban',
      number: 120,
      subtitle: 'Proyek',
      unit: 'Terselesaikan',
    },
    {
      icon: 'bi bi-calendar-date',
      number: 9,
      subtitle: 'Pengalaman',
      unit: 'Tahun',
    },
    {
      icon: 'bi bi-people-fill',
      number: 30,
      subtitle: 'Klien',
      unit: 'Puas',
    },
  ];
}
