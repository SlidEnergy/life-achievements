import { LifegamePage } from './app.po';

describe('lifegame App', () => {
  let page: LifegamePage;

  beforeEach(() => {
    page = new LifegamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
