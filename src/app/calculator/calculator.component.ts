import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true
})
export class CalculatorComponent {
  display: string = '';

  appendToDisplay(value: string) {
    if (value === '.') {
      const lastNumber = this.getLastNumber();
      if (lastNumber.includes('.')) return;
    }
    this.display += value;
  }

  getLastNumber(): string {
    const parts = this.display.split(/[\+\-\*\/]/);
    return parts[parts.length - 1];
  }

  clearDisplay() {
    this.display = '';
  }

  performOperation(operator: string) {
    if (this.display === '' || /[\+\-\*\/]$/.test(this.display)) return;
    this.display += ` ${operator} `;
  }

  calculateResult() {
    try {
      this.display = eval(this.display.replace(/×/g, '*').replace(/÷/g, '/')).toString();
    } catch (e) {
      this.display = 'Error';
    }
  }

  backspace() {
    this.display = this.display.slice(0, -1);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(Number(key))) {
      this.appendToDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      this.performOperation(key);
    } else if (key === 'Enter' || key === '=') {
      this.calculateResult();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
      this.clearDisplay();
    } else if (key === 'Backspace') {
      this.backspace();
    } else if (key === '.') {
      this.appendToDisplay('.');
    }
  }
}
