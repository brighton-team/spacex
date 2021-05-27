import Header from '../../sectionObjects/Header/Header';
import Landing from '../../sectionObjects/Landing/Landing';

describe('Header Test', () => {
  before(() => {
    cy.fixture('login').then((data) => {
      cy.login(data.correctTestLogin, data.correctTestPassword);
    });

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
