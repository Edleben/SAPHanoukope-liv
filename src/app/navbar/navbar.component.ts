import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Close dropdowns when navigating
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeDropdowns();
    });
  }

  closeDropdowns(): void {
    // Close all dropdowns when navigating
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
    
    // Remove show class from parent dropdown items
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
      item.classList.remove('show');
    });
  }

  toggleDropdown(event: Event, index: number): void {
    event.preventDefault();
    const dropdown = document.querySelectorAll('.nav-item.dropdown')[index];
    if (dropdown) {
      dropdown.classList.toggle('show');
      
      // Close other dropdowns
      const allDropdowns = document.querySelectorAll('.nav-item.dropdown');
      allDropdowns.forEach((item, i) => {
        if (i !== index) {
          item.classList.remove('show');
        }
      });
    }
  }
}