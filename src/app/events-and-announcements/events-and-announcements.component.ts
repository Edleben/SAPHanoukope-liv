import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-and-announcements',
  templateUrl: './events-and-announcements.component.html',
  styleUrl: './events-and-announcements.component.css',
  standalone: false,
})
export class EventsAndAnnouncementsComponent {
  constructor(private router: Router) {}

  isRootRoute(): boolean {
    // Normalizes trailing slashes or empty children paths
    const url = this.router.url.split('?')[0];
    return url === '/events-and-announcements' || url === '/events-and-announcements/';
  }
}
