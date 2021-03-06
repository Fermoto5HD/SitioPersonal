import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

if ('serviceWorker' in navigator) {window.addEventListener('load', function() {navigator.serviceWorker.register('/service-worker.js').then(function(registration) {console.log('Service worker installed!: ', registration.scope);}, function(err) {console.log('Error installing service worker. Reason: ', err);});});};