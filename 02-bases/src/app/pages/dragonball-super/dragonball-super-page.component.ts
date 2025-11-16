import { Component, inject } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { PersonajeAgregar } from '../../components/dragonball/personaje-agregar/personaje-agregar';
import { PersonajesLista } from '../../components/dragonball/personajes-lista/personajes-lista';

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [PersonajeAgregar, PersonajesLista],
})
export class DragonballSuperPageComponent {
  //Esta es la forma clasica de inyectar un servicio
  //constructor(public dragonballService: DragonballService) {}

  //Esta es la nueva forma de inyectar un servicio, que se podria usar incluso fuera del constructor
  public dragonballService = inject(DragonballService);
}
