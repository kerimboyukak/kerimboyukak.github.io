import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent} from "./core/navigation-bar/navigation-bar.component";
import {TerminalComponent} from "./core/terminal/terminal.component";
import {TerminalButtonComponent} from "./core/terminal-button/terminal-button.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavigationBarComponent, TerminalComponent, TerminalButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
