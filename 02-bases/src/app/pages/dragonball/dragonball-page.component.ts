import { Component, computed, signal } from '@angular/core';
interface Personaje {
  id: number;
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  poderFuerte = signal(6000);

  agregarPersonaje() {
    if (this.nombre().trim().length === 0 || this.poder() <= 0) {
      alert('Nombre no puede estar vacío y poder debe ser mayor a 0');
      return;
    }

    const nuevo: Personaje = {
      id: Math.max(...this.personajes().map((p) => p.id)) + 1,
      nombre: this.nombre(),
      poder: this.poder(),
    };
    this.personajes.update((personajes) => [...personajes, nuevo]);
    this.limpiar();
  }

  limpiar() {
    this.nombre.set('');
    this.poder.set(0);
  }

  nombre = signal('Krillin');
  poder = signal(10000);

  personajes = signal<Personaje[]>([{ id: 1, nombre: 'Goku', poder: 15000 }]);
}
