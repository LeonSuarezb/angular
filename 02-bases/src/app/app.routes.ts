import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
