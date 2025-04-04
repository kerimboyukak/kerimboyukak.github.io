import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent} from "./core/navigation-bar/navigation-bar.component";
import {ThemeButtonComponent} from "./core/theme-button/theme-button.component";

@Component({
    selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, ThemeButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
