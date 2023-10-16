import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RestofeHomePage extends Page {
    public loggedInUser (username: string) {
        return $('//p[contains(text(),"'+username+'")]');
    }

    public get logOut() {
        return $('//p[contains(text(),"Logout")]');
    }

    public async restofeLogout(username: string){
        await this.loggedInUser(username).click();
        await this.logOut.click();
    }
}

export default new RestofeHomePage();