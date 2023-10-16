import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RestofeHomePage extends Page {

    public get create(){
        return $('//button[contains(text(),"Create")]');
    }

    public get selectAStore(){
        return $('//div[contains(text(),"Select a store")]');
    }

    public async enterStore(storeName: string){
        return (await $('//div[contains(text(),"'+storeName+'")]')).click();
    }

    public get selectATemplate(){
        return $('//div[contains(text(),"Select a template")]');
    }

    public get enterTemplate(){
        return $('//div[contains(text(),"Pre-filled Template")]');
    }
   
    public get requisitionCreate(){
        return $('//div[@class="style_createBtn__pMQ-e"]//button[contains(text(),"Create")]');
    }

    public async createRequisition(){
        await this.create.click(); 
        await browser.pause(2000);

        await this.selectAStore.click();
        await browser.pause(1000);

        await this.enterStore('CPKMOE');
        await browser.pause(2000);
        
        await this.selectATemplate.click();
        await browser.pause(1000);

        await this.enterTemplate.click();
        await browser.pause(2000);
        
        await this.requisitionCreate.click();
        await browser.pause(2000);
    }
}

export default new RestofeHomePage();