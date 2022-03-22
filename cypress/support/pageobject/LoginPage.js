class LoginPage {

    getEmailInput() {
        return cy.get('input.form-control.form-control-lg').eq(0);
    }

    getPwdInput() {
        return cy.get('input.form-control.form-control-lg').eq(1);

    }
    getSignButton() {
        return cy.get('button.btn.btn-lg.btn-primary.pull-xs-right');
    }
}
export default LoginPage;
