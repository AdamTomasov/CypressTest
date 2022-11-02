import LoginPage from '../support/pageobject/LoginPage.js'

const logPage = new LoginPage();

Cypress.Commands.add('SignIn', (user, pwd) => {
    logPage.getEmailInput().type(user);
    logPage.getPwdInput().type(pwd);
    logPage.getSignButton().click();
});