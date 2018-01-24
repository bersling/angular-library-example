import { LibexProjectPage } from './app.po';

describe('libex-project App', () => {
  let page: LibexProjectPage;

  beforeEach(() => {
    page = new LibexProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
