import { Component, inject } from '@angular/core';
import { TerminalService } from '../../shared/terminal.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-terminal-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './terminal-button.component.html',
  styleUrls: ['./terminal-button.component.css']
})
export class TerminalButtonComponent {
  protected terminalService = inject(TerminalService);

  toggleTerminal() {
    if (this.terminalService.isTerminalOpen) {
      this.terminalService.closeTerminal();
    } else {
      this.terminalService.openTerminal();
    }
  }
}
