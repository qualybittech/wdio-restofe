import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import RestofeLoginPage from '../pageobjects/restofe.login.page.js';
import RestofeHomePage from '../pageobjects/restofe.home.page.js';
import restofeRequistionsPage from '../pageobjects/restofe.requistions.page.js';

Given('I am on the restofe login page', async () => {
    await RestofeLoginPage.open();
});

When(/^I login with restofe (.*), (.*)/, async (username, password) => {
    await RestofeLoginPage.restofeLogin(username, password);
});

Then(/^I should see username logged in (.*)/, async (username) => {
    await expect(RestofeLoginPage.loggedInUser(username)).toBeExisting();
});

Then(/^Logout from application (.*)/,async(username) =>{
    await RestofeHomePage.restofeLogout(username);
})

Then(/^I Navigate to (.*)/,async(menuname) =>{
    await RestofeHomePage.navigateToMenu(menuname);
})

Then(/^I Enter Requisitions details (.*)/,async(storeName) =>{
    await restofeRequistionsPage.createRequisition();
})
