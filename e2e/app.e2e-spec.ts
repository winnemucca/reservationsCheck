import { CampSpotTestPage } from './app.po';

describe('camp-spot-test App', function() {
  let page: CampSpotTestPage;

  beforeEach(() => {
    page = new CampSpotTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
