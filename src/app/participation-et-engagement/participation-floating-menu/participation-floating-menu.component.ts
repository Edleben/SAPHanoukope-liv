import { Component } from '@angular/core';

@Component({
  selector: 'app-participation-floating-menu',
  templateUrl: './participation-floating-menu.component.html',
  styleUrls: ['./participation-floating-menu.component.css'],
  standalone: false
})
export class ParticipationFloatingMenuComponent {
  menuItems = [
    {
      label: 'Dons et Charités',
      route: '/participation-et-engagement/online-giving',
      icon: 'fas fa-hand-holding-heart',
      description: 'Soutenez financièrement les projets de notre paroisse'
    },
    {
      label: 'Volontariat',
      route: '/participation-et-engagement/volunteer-opportunities',
      icon: 'fas fa-hands-helping',
      description: 'Offrez votre temps et vos compétences à la communauté'
    },
    {
      label: 'Enregistrez-Vous',
      route: '/participation-et-engagement/parish-registration',
      icon: 'fas fa-user-plus',
      description: 'Rejoignez notre communauté paroissiale'
    },
    {
      label: 'Administrateurs',
      route: '/participation-et-engagement/admin',
      icon: 'fas fa-shield-alt',
      description: 'Espace réservé aux administrateurs de la paroisse'
    }
  ];
}
