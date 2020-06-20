import { browser, by, element } from 'protractor';

export class TourOfHeroesPage {
    public navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    public getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }
}
