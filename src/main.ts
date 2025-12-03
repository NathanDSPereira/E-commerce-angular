import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/paginas/home/home.component';
import LocalePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';


registerLocaleData(LocalePt)

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
