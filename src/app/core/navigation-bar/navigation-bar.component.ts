// navigation-bar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
