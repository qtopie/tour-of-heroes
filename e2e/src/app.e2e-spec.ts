import {TourOfHeroesPage} from './app.po';

describe('tour-of-heroes App', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display message saying tour-of-heroes', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toMatch('^Tour of Heroes.*');
  });
});
