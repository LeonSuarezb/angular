import { effect, Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

const cargarDesdeLocalStorage = (): Personaje[] => {
  const personajesLocalStorage = localStorage.getItem('personajes');

  return personajesLocalStorage ? JSON.parse(personajesLocalStorage) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  personajes = signal<Personaje[]>(cargarDesdeLocalStorage());

  agregarPersonaje(nuevo: Personaje) {
    this.personajes.update((personajes) => [...personajes, nuevo]);
  }

  guardarLocalStorage = effect(() => {
    localStorage.setItem('personajes', JSON.stringify(this.personajes()));
  });
}
