import { Component } from '@angular/core';

@Component({
  selector: 'app-liturgies-floating-menu',
  templateUrl: './liturgies-floating-menu.component.html',
  styleUrls: ['./liturgies-floating-menu.component.css'],
  standalone: false
})
export class LiturgiesFloatingMenuComponent {
  menuItems = [
    {
      label: 'Programme des Messes',
      route: '/liturgies-and-formation/mass-schedule',
      icon: 'fas fa-church',
      description: 'Consultez nos horaires de messes quotidiennes'
    },
    {
      label: 'Les Sacrements',
      route: '/liturgies-and-formation/sacraments',
      icon: 'fas fa-cross',
      description: 'En savoir plus sur les sacrements de l\'Église'
    },
    {
      label: 'Formation & Catéchèse',
      route: '/liturgies-and-formation/educational-programs',
      icon: 'fas fa-graduation-cap',
      description: 'Programmes de formation spirituelle et catéchèse'
    },
    {
      label: 'Demandes de Prières',
      route: '/liturgies-and-formation/prayer-requests',
      icon: 'fas fa-praying-hands',
      description: 'Soumettez vos intentions de prière'
    }
  ];
}
