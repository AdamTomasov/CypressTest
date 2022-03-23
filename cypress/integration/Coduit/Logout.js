import ArticlePage from '../../support/pageobject/ArticlePage.js'
import SettingsPage from '../../support/pageobject/SettingsPage.js';
import userData from '../../fixtures/users.json'

const articlePage = new ArticlePage();
const settingsPage = new SettingsPage();

describe(`Create and Publish Article Test`, () => {

    beforeEach('Log in user', () => {
        cy.intercept('GET', '/api/tags').as('tags');
        cy.visit('https://react-redux.realworld.io/#/login?_k=z8eifk');
        cy.SignIn(userData.users[0].email, userData.users[0].pwd);
    });
    it(`Succes logout: ` + userData.users[0].email, () => {
        cy.wait('@tags').then(() => {

            cy.get(':nth-child(3) > .nav-link').click();
            settingsPage.getLogoutButton().click();
        })
    });
});