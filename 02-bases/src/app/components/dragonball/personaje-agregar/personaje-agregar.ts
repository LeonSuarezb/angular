import { Component, output, signal } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-personaje-agregar',
  imports: [],
  templateUrl: './personaje-agregar.html',
})
export class PersonajeAgregar {
  nuevoPersonajeGenerado = output<Personaje>();

  agregarPersonaje() {
    if (this.nombre().trim().length === 0 || this.poder() <= 0) {
      alert('Nombre no puede estar vacío y poder debe ser mayor a 0');
      return;
    }

    const nuevo: Personaje = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.nombre(),
      poder: this.poder(),
    };

    this.limpiar();
    this.nuevoPersonajeGenerado.emit(nuevo);
  }

  limpiar() {
    this.nombre.set('');
    this.poder.set(0);
  }

  nombre = signal('');
  poder = signal(0);
}
