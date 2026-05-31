import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liturgies-and-formation',
  templateUrl: './liturgies-and-formation.component.html',
  styleUrl: './liturgies-and-formation.component.css',
  standalone: false,
})
export class LiturgiesAndFormationComponent {
  constructor(private router: Router) {}

  isRootRoute(): boolean {
    const url = this.router.url.split('?')[0];
    return url === '/liturgies-and-formation' || url === '/liturgies-and-formation/';
  }
}
