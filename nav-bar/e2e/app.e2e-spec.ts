import { NavBarPage } from './app.po';

describe('nav-bar App', function() {
  let page: NavBarPage;

  beforeEach(() => {
    page = new NavBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
