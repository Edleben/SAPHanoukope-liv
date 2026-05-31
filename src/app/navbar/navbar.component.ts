import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false,
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Close dropdowns when navigating to a new route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeDropdowns();
      this.closeNavbarCollapse();
    });

    // Close all dropdowns when the Bootstrap collapse hides (hamburger closes)
    const navbarCollapse = document.getElementById('navbarNavDropdown');
    if (navbarCollapse) {
      navbarCollapse.addEventListener('hide.bs.collapse', () => {
        this.closeDropdowns();
      });
    }
  }

  closeDropdowns(): void {
    // Remove .show from all nav-item dropdowns
    document.querySelectorAll('.nav-item.dropdown').forEach(item => {
      item.classList.remove('show');
    });
    // Also remove .show directly from any open dropdown menus (Bootstrap fallback)
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
      menu.classList.remove('show');
    });
  }

  closeNavbarCollapse(): void {
    const collapse = document.getElementById('navbarNavDropdown');
    if (collapse && collapse.classList.contains('show')) {
      collapse.classList.remove('show');
    }
  }

  toggleDropdown(event: Event, index: number): void {
    event.preventDefault();
    event.stopPropagation();

    // On desktop (≥ 992px), hover handles dropdowns — don't toggle on click
    if (window.innerWidth >= 992) {
      // Allow navigation by not preventing default (re-enable it)
      const link = event.currentTarget as HTMLAnchorElement;
      if (link && link.href && link.href !== '#') {
        window.location.assign(link.href);
      }
      return;
    }

    // Mobile: toggle the .show class on the clicked dropdown parent
    const allDropdowns = document.querySelectorAll('.nav-item.dropdown');
    const target = allDropdowns[index];

    if (target) {
      const isOpen = target.classList.contains('show');

      // Close all dropdowns first
      allDropdowns.forEach(item => item.classList.remove('show'));

      // Re-open the clicked one only if it was closed
      if (!isOpen) {
        target.classList.add('show');
      }
    }
  }
}