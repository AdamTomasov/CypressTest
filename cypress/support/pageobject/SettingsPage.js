class SettingsPage {

    getLogoutButton() {
        return cy.get('.btn.btn-outline-danger');
    }

    getSettingsButton() {
        return  cy.get(':nth-child(3) > .nav-link');
    }
}
export default SettingsPage;
