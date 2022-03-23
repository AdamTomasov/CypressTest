import SettingsPage from '../../support/pageobject/SettingsPage.js';
import data from '../../fixtures/users.json'

const settingsPage = new SettingsPage();

describe(`Create and Publish Article Test`, () => {

    beforeEach('Log in user', () => {
        cy.intercept('GET', '/api/tags').as('tags');
        cy.visit('https://react-redux.realworld.io/#/login?_k=z8eifk');
    });
    data.users.forEach(element => {
        it(`Succes logout: ` + element.email, () => {
            cy.SignIn(element.email, element.pwd);
            cy.wait('@tags').then(() => {
               settingsPage.getSettingsButton().click();
                settingsPage.getLogoutButton().click();
            })
        })
    });
});