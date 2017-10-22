import { DemoContactlistPage } from './app.po';

describe('demo-contactlist App', () => {
  let page: DemoContactlistPage;

  beforeEach(() => {
    page = new DemoContactlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
