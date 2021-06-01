import Header from '../../sectionObjects/Header/Header';
import Landing from '../../sectionObjects/Landing/Landing';

// const testLogin = Cypress.env('testLogin') || process.env.testLogin;
// const testPassword = Cypress.env('testPassword') || process.env.testPassword;
// xxx

describe('Navigation Test', () => {
  before(() => {
    cy.login('zzzFFF333', 'zzzFFF333!!!');

    cy.visit('/');

    const landing = new Landing();
    landing.logInButton().click();
  });

  it('shows leaders page', () => {
    const header = new Header();
    header.leadersButton().click();

    cy.url().should('include', 'leaders');
    cy.get('[data-test="leaders-table"]').should('be.visible');
  });

  it('shows forum page', () => {
    const header = new Header();
    header.forumButton().click();

    cy.url().should('include', 'forum');
    cy.get('[data-test="forum-topics-list"]').should('be.visible');
  });

  it('shows profile page', () => {
    const header = new Header();
    header.profileButton().click();

    cy.url().should('include', 'profile');
  });

  it('shows feedback page', () => {
    const header = new Header();
    header.feedbackButton().click();

    cy.url().should('include', 'feedback');
  });

  it('shows game page', () => {
    const header = new Header();
    header.playButton().click();

    cy.url().should('include', 'play');
    cy.get('[data-test="game-area"]').should('be.visible');
  });
});
