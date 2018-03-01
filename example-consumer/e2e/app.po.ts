import { browser, by, element } from 'protractor';

export class LibexProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getHelloButton() {
    return element(by.id('hello-button'));
  }
}
