import { DynamicRoutesPage } from './app.po';

describe('dynamic-routes App', function() {
  let page: DynamicRoutesPage;

  beforeEach(() => {
    page = new DynamicRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
