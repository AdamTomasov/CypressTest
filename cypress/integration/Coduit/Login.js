import data from '../../fixtures/users.json'

describe("Login test", () => {
    data.users.forEach(element => {
        it(`Succes login: ` + element.email, () => {
            cy.visit('https://react-redux.realworld.io/#/login?_k=z8eifk');
            cy.SignIn(element.email, element.pwd);
            cy.get(':nth-child(4) a.nav-link').should('contains.text', element.email);
        });
    });
});