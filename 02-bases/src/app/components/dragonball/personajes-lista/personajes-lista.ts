import { Component, input, signal, Input } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-personajes-lista',
  imports: [],
  templateUrl: './personajes-lista.html',
})
export class PersonajesLista {
  personajes = input.required<Personaje[]>();
  @Input() tituloLista: string = 'Lista de personajes';
  poderFuerte = signal(6000);
}
