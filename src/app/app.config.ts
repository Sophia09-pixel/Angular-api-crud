import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  //npm i json-server
  //Abra o package.json e dentro de scripts insira:
  //"server": "json-server --watch db.json
  //Abra o arquivo app.config.ts para configurar o provedor Http
  //import { provideHttpClient } from '@angular/common/http';
  //export const appConfig: ApplicationConfig = {
  //providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()
  //};
  //npm run server
};
