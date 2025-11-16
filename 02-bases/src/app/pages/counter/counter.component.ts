import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styles: `
  
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);
  incrementarPor(valor: number) {
    this.counter += valor;
    this.counterSignal.update((c) => c + valor);
  }

  resetear() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
