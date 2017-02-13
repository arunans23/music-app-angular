import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ScotchMusicPlayerAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ScotchMusicPlayerAppComponent);
