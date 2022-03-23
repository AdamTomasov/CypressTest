import ArticlePage from '../../support/pageobject/ArticlePage.js'
import userData from '../../fixtures/users.json'
import articleData from '../../fixtures/article.json'

const articlePage = new ArticlePage();

describe(`Create and Publish Article Test`, () => {

    beforeEach('Log in user', () => {
        cy.intercept('GET', '/api/tags').as('tags');
        //cy.intercept('POST', 'api/articles').as(;)
        cy.visit('https://react-redux.realworld.io/#/login?_k=z8eifk');
        cy.SignIn(userData.users[0].email, userData.users[0].pwd);
    })

    articleData.articles.forEach(element => {
        it(`Create article`, () => {
            cy.wait('@tags').then(() => {
                cy.get('.container .nav :nth-child(2) .nav-link').eq(0).click();
                cy.wait('@tags').then(() => {
                    articlePage.getTitleInput().type(element.title);
                    articlePage.getAboutInput().type(element.about);
                    articlePage.getTextArea().type(element.text);
                    articlePage.getTagInput().type(element.tag);
                    articlePage.getPublishButton().click();

                    cy.get('h1').should('contain.text',element.title);
                    cy.get('.author').should('contain.text', userData.users[0].email);
                    articlePage.getDeleteButton().click();
                })
            })
        })
    });
})