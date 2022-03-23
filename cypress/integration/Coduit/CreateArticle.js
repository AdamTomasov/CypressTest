import ArticlePage from '../../support/pageobject/ArticlePage.js'
import userData from '../../fixtures/users.json'
import articleData from '../../fixtures/article.json'

const articlePage = new ArticlePage();
const uuid = () => Cypress._.random(0, 1e2)
const id = uuid()
const testname = `testname${id}`;

describe(`Create and Publish Article Test`, () => {

    beforeEach('Log in user', () => {
       
        cy.intercept('GET', '/api/tags').as('tags');
        cy.visit('https://react-redux.realworld.io/#/login?_k=z8eifk');
    })

    userData.users.forEach(user => {
        articleData.articles.forEach(element => {
            it(`Create article for user ` + user.email, () => {
                cy.SignIn(user.email, user.pwd);
                cy.wait('@tags').then(() => {
                    cy.get('.container .nav :nth-child(2) .nav-link').eq(0).click();
                    cy.wait('@tags').then(() => {
                        articlePage.getTitleInput().type(element.title + ' ' + testname);
                        articlePage.getAboutInput().type(element.about);
                        articlePage.getTextArea().type(element.text);
                        articlePage.getTagInput().type(element.tag);
                        articlePage.getPublishButton().click();

                        cy.get('h1').should('contain.text', element.title);
                        cy.get('.author').should('contain.text', user.email);
                        cy.get('body').should('be.visible');
                        articlePage.getDeleteButton().click();
                    })
                })
            })
        })
    })
});
