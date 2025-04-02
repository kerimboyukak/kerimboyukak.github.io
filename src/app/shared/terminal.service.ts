import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  isTerminalOpen = false;
  terminalOutput: string[] = ['Welcome to the terminal! Type "help" for commands.'];
  command = '';

  openTerminal() {
    this.isTerminalOpen = true;
  }

  closeTerminal() {
    this.isTerminalOpen = false;
  }

  executeCommand(command: string) {
    if (command.trim()) {
      this.terminalOutput.push(`> ${command}`);
      this.processCommand(command.trim());
      this.command = ''; // Clear input
    }
  }

  private processCommand(cmd: string) {
    switch (cmd.toLowerCase()) {
      case 'help':
        this.terminalOutput.push('Available commands: help, clear, about');
        break;
      case 'clear':
        this.terminalOutput = [];
        break;
      case 'about':
        this.terminalOutput.push('This is a custom terminal by Kerim!');
        break;
      default:
        this.terminalOutput.push(`Command not found: ${cmd}`);
    }
  }
}
