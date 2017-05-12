import { SitioPersonalPage } from './app.po';

describe('sitio-personal App', () => {
  let page: SitioPersonalPage;

  beforeEach(() => {
    page = new SitioPersonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
