class ArticlePage {

    getTitleInput() {
        return cy.get('input.form-control.form-control-lg');
    }

    getAboutInput() {
       return cy.get(':nth-child(2) > .form-control');
    }

    getTextArea() {
        return cy.get('textarea.form-control');
    }

    getTagInput() {
        return cy.get(':nth-child(4) > .form-control');
    }

    getPublishButton() {
        return cy.get('button.btn.btn-lg.pull-xs-right.btn-primary');
    }

    getDeleteButton() {
        return cy.get('.btn.btn-outline-danger.btn-sm')
    }

}
export default ArticlePage;