import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideEnvironmentNgxMask } from 'ngx-mask';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withHashLocation(), 
    withInMemoryScrolling({ scrollPositionRestoration: 'top'})), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideEnvironmentNgxMask(),
    {provide: LOCALE_ID, useValue: 'pt-BR'}  
  ]
};
