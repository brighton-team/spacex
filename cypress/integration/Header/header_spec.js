import Header from '../../sectionObjects/Header/Header';
import Landing from '../../sectionObjects/Landing/Landing';

// const testLogin = Cypress.env('testLogin') || process.env.testLogin;
// const testPassword = Cypress.env('testPassword') || process.env.testPassword;

describe('Header Test', () => {
  before(() => {
    cy.login(Cypress.env('zzzFFF333'), Cypress.env('zzzFFF333!!!'));

    cy.visit('/');

    const landing = new Landing();
    landing.logInButton().click();
  });

  it('shows header', () => {
    const header = new Header();
    header.root().should('be.visible');
  });

  it('shows logo', () => {
    const header = new Header();
    header.logo().should('be.visible');
  });

  it('shows navigation buttons', () => {
    const header = new Header();

    header.playButton().should('be.visible');
    header.leadersButton().should('be.visible');
    header.forumButton().should('be.visible');
    header.profileButton().should('be.visible');
    header.feedbackButton().should('be.visible');
  });
});
