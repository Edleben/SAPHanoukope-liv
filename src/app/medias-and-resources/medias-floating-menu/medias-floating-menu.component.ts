import { Component } from '@angular/core';

@Component({
  selector: 'app-medias-floating-menu',
  templateUrl: './medias-floating-menu.component.html',
  styleUrls: ['./medias-floating-menu.component.css'],
  standalone: false
})
export class MediasFloatingMenuComponent {
  menuItems = [
    {
      label: 'Galerie Photos',
      route: '/medias-and-resources/photo-gallery',
      icon: 'fas fa-images',
      description: 'Consultez nos photos de la paroisse'
    },
    {
      label: 'Les Lives',
      route: '/medias-and-resources/livestream',
      icon: 'fas fa-broadcast-tower',
      description: 'Suivez nos messes et événements en direct'
    },
    {
      label: 'Ressources',
      route: '/medias-and-resources/resource-library',
      icon: 'fas fa-file-pdf',
      description: 'Téléchargez nos documents et ressources officiels'
    },
    {
      label: 'Contactez-nous',
      route: '/medias-and-resources/contact-information',
      icon: 'fas fa-envelope',
      description: 'Contactez le secrétariat de la paroisse'
    }
  ];
}
