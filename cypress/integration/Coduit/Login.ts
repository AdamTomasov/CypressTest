import userData from '../../fixtures/users.json'

describe("Login test", () => {
    userData.users.forEach(element => {
        it(`Succes login: ` + element.email, () => {
            cy.setCookie('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQGlwdGlxLmNvbSIsInVzZXJuYW1lIjoidGVzdHVzZXJAaXB0aXEuY29tIiwiaWF0IjoxNjU0MDk2Mjk3LCJleHAiOjE2NTkyODAyOTd9.woYaAdZomm-wq-cSlHB80sCtHBu_YCDSsLGhMes-KpM")
            cy.visit('https://react-redux.realworld.io/#editor?_k=p64g3v');
            cy.SignIn(element.email, element.pwd);
            cy.get(':nth-child(4) a.nav-link').should('contains.text', element.email); //aa
        });
    });
});