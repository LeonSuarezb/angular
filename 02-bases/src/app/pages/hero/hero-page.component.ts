import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  cambiarEdad() {
    this.edad.set(60);
  }
  nombre = signal('Ironman');
  edad = signal(45);

  heroDescription = computed(() => {
    const descripcion = `${this.nombre()} tiene ${this.edad()} años`;
    return descripcion;
  });

  nombreEnMayusculas = computed(() => this.nombre().toUpperCase());

  cambiarHeroe(): void {
    this.nombre.set('Spiderman');
    this.edad.set(22);
  }

  resetHeroe(): void {
    this.nombre.set('Ironman');
    this.edad.set(45);
  }
}
