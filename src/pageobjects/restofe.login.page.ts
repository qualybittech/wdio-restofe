import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RestofeLoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('//input[@name="email"]');
    }

    public get inputPassword () {
        return $('//input[@name="password"]');
    }

    public get btnSubmit () {
        return $('//button[@type="submit"]');
    }

    public loggedInUser (username: string) {
        return $('//p[contains(text(),"'+username+'")]');
    }

    public async restofeOpen(url:string){
        return await browser.url(`https://dev.restofe.com/`)
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async restofeLogin (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(2000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.restofeOpen('');
    }
}

export default new RestofeLoginPage();