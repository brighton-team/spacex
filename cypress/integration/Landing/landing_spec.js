import Landing from '../../sectionObjects/Landing/Landing';

describe('Landing Page Test', () => {
  before(() => {
    cy.logout();
    cy.visit('/');
  });

  it('shows main description', () => {
    const landing = new Landing();

    landing.landingDescription().should('be.visible');
  });

  it('shows login button', () => {
    const landing = new Landing();

    landing.logInButton().should('be.visible');
  });

  it('shows signup button', () => {
    const landing = new Landing();

    landing.signUpButton().should('be.visible');
  });
});
