import {browser} from 'protractor';
import {LibexProjectPage} from './app.po';

describe('libex-project App', () => {
  let page: LibexProjectPage;

  beforeEach(() => {
    page = new LibexProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.getHelloButton().click();
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("hello!");
    expect(alertDialog.accept).toBeDefined();
    alertDialog.accept();
    browser.sleep(200);
  });
});
