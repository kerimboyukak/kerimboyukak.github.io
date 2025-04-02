import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TerminalService} from "../../shared/terminal.service";

@Component({
  selector: 'app-terminal',
  imports: [FormsModule, CommonModule],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {
  terminalService = inject(TerminalService);
}
