import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medias-and-resources',
  templateUrl: './medias-and-resources.component.html',
  styleUrl: './medias-and-resources.component.css',
  standalone: false,
})
export class MediasAndResourcesComponent {
  constructor(private router: Router) {}

  isRootRoute(): boolean {
    const url = this.router.url.split('?')[0];
    return url === '/medias-and-resources' || url === '/medias-and-resources/';
  }
}
