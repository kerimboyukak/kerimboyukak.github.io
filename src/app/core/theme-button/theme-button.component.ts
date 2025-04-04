import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  templateUrl: './theme-button.component.html',
  imports: [
  ],
  styleUrls: ['./theme-button.component.css']
})
export class ThemeButtonComponent {
  protected themes = [
    {
      name: 'Default',
      colors: {
        '--color-dark': '#262125',
        '--color-dark-90': '#262125e6',
        '--color-lightGray': '#302533',
        '--color-offWhite': '#9c7995',
        '--color-accent': '#D90368'
      }
    },
    {
      name: 'Retro Blue',
      colors: {
        '--color-dark': '#1a2b3c',
        '--color-dark-90': '#1a2b3ce6',
        '--color-lightGray': '#2c3e50',
        '--color-offWhite': '#a0b9d1',
        '--color-accent': '#00b7eb'
      }
    },
    {
      name: 'Neon Pink',
      colors: {
        '--color-dark': '#1f0f1f',
        '--color-dark-90': '#1f0f1fe6',
        '--color-lightGray': '#3a253a',
        '--color-offWhite': '#d89cd8',
        '--color-accent': '#ff69b4'
      }
    },
    {
      name: 'Solarized',
      colors: {
        '--color-dark': '#002b36',
        '--color-dark-90': '#002b36e6',
        '--color-lightGray': '#073642',
        '--color-offWhite': '#93a1a1',
        '--color-accent': '#d33682'
      }
    },
    {
      name: 'Forest Harmony',
      colors: {
        '--color-dark': '#1a2f26',
        '--color-dark-90': '#1a2f26e6',
        '--color-lightGray': '#BAAB94',
        '--color-offWhite': '#e6d5b8',
        '--color-accent': '#2e8b57'
      }
    },
    {
      name: 'Earthy Blend',
      colors: {
        '--color-dark': '#3c2f2f',     // Dark brown (base)
        '--color-dark-90': '#3c2f2fe6', // 90% opacity
        '--color-lightGray': '#8a817c', // Beige-gray (light background)
        '--color-offWhite': '#f5f0e1',  // Creamy beige (text)
        '--color-accent': '#8a552f'     // Brown accent
      }
    },
    {
      name: 'Woodland Glow',
      colors: {
        '--color-dark': '#2e4238',
        '--color-dark-90': '#2e4238e6',
        '--color-lightGray': '#4a3728',
        '--color-offWhite': '#c9d1b8',
        '--color-accent': '#6b8e23'
      }
    }
  ];

  private currentThemeIndex = 0;

  constructor() {
    this.applyTheme(this.currentThemeIndex); // Apply default theme on init
  }

  toggleTheme() {
    this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
    this.applyTheme(this.currentThemeIndex);
  }

  protected applyTheme(index: number) {
    const theme = this.themes[index].colors;
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      root.style.setProperty(key, theme[key as keyof typeof theme]);
    });
  }
}
