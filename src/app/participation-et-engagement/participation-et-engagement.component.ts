import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participation-et-engagement',
  templateUrl: './participation-et-engagement.component.html',
  styleUrl: './participation-et-engagement.component.css',
  standalone: false,
})
export class ParticipationEtEngagementComponent {
  constructor(private router: Router) {}

  isRootRoute(): boolean {
    const url = this.router.url.split('?')[0];
    return url === '/participation-et-engagement' || url === '/participation-et-engagement/';
  }
}
