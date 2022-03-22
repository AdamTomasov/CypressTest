import LoginPage from '../support/pageobject/LoginPage.js'
import data from '../fixtures/users.json'

const logPage = new LoginPage();

describe("Login test", () => {

    data.users.forEach(element => {
        it(`Succes login:` + ' ' + element.username, () => {
            cy.visit('https://react-redux.realworld.io/#/login?_k=z8eifk');
            logPage.getEmailInput().type(element.username);
            logPage.getPwdInput().type(element.pwd);
            logPage.getSignButton().click();
            cy.get('a.nav-link').should('contains.text', element.username);
        });
    });

});