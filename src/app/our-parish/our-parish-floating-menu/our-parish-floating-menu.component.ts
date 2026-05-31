import { Component } from '@angular/core';

@Component({
  selector: 'app-our-parish-floating-menu',
  templateUrl: './our-parish-floating-menu.component.html',
  styleUrls: ['./our-parish-floating-menu.component.css'],
  standalone: false
})
export class OurParishFloatingMenuComponent {
  menuItems = [
    {
      label: 'Accueil',
      route: '/home',
      icon: 'fas fa-home',
      description: 'Découvrez notre communauté et nos activités'
    },
    {
      label: 'À Propos',
      route: '/about-us',
      icon: 'fas fa-info-circle',
      description: 'En savoir plus sur notre histoire et nos valeurs'
    },
    {
      label: 'Clergé & Conseil',
      route: '/clergy-and-parish-council',
      icon: 'fas fa-church',
      description: 'Rencontrez nos prêtres et notre conseil paroissial'
    },
    {
      label: 'Associations',
      route: '/ministries-and-associations',
      icon: 'fas fa-hands-helping',
      description: 'Découvrez nos groupes et ministères paroissiaux'
    }
  ];
}
