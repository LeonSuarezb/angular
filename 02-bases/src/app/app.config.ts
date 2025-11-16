import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //HashStrategy se usa para que las rutas funcionen en servidores que no están configurados para SPAs
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
};
