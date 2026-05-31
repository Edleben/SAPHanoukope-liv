import { Component } from '@angular/core';

@Component({
  selector: 'app-events-floating-menu',
  templateUrl: './events-floating-menu.component.html',
  styleUrls: ['./events-floating-menu.component.css'],
  standalone: false
})
export class EventsFloatingMenuComponent {
  menuItems = [
    {
      label: 'Activités',
      route: '/events-and-announcements/parish-events',
      icon: 'fas fa-calendar-alt',
      description: 'Découvrez nos événements paroissiaux et activités'
    },
    {
      label: 'Annonces',
      route: '/events-and-announcements/news-and-announcements',
      icon: 'fas fa-bullhorn',
      description: 'Restez informé des dernières nouvelles de notre paroisse'
    },
    {
      label: 'Bulletin Paroissial',
      route: '/events-and-announcements/bulletin',
      icon: 'fas fa-book-open',
      description: 'Consultez notre bulletin mensuel avec les informations'
    },
    {
      label: 'Faq',
      route: '/events-and-announcements/faq',
      icon: 'fas fa-question-circle',
      description: 'Trouvez des réponses aux questions posées'
    }
  ];
}
