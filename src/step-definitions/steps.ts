import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import RestofeLoginPage from '../pageobjects/restofe.login.page.js';
import restofeHomePage from '../pageobjects/restofe.home.page.js';

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
    await restofeHomePage.restofeLogout(username);
})
