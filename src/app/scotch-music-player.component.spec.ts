import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ScotchMusicPlayerAppComponent } from '../app/scotch-music-player.component';

beforeEachProviders(() => [ScotchMusicPlayerAppComponent]);

describe('App: ScotchMusicPlayer', () => {
  it('should create the app',
      inject([ScotchMusicPlayerAppComponent], (app: ScotchMusicPlayerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'scotch-music-player works!\'',
      inject([ScotchMusicPlayerAppComponent], (app: ScotchMusicPlayerAppComponent) => {
    expect(app.title).toEqual('scotch-music-player works!');
  }));
});
