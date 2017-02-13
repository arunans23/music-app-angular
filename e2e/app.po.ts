export class ScotchMusicPlayerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('scotch-music-player-app h1')).getText();
  }
}
