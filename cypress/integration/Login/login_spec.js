import LoginForm from '../../sectionObjects/Login/LoginForm';
import Header from '../../sectionObjects/Header/Header';

describe('Login Page Test', () => {
  before(() => {
    cy.logout();
    cy.visit('/signin');
  });

  beforeEach(function () {
    cy.fixture('login').then((data) => {
      this.data = data;
    });
  });

  it('shows login page', () => {
    cy.url().should('include', 'signin');
  });

  it('renders login form fields and controls', () => {
    const loginForm = new LoginForm();

    loginForm.loginFieldInput().should('be.visible');
    loginForm.passwordFieldInput().should('be.visible');
    loginForm.logInButton().should('be.visible');
    loginForm.signUpButton().should('be.visible');
  });

  it('shows warnings if the form fields are empty and log in button is clicked', function () {
    const loginForm = new LoginForm();

    loginForm.logInButton().click();

    loginForm.loginFieldWarning().then((element) => {
      const text = element.text();
      expect(text).to.equal(this.data.emptyLoginWarning);
    });

    loginForm.passwordFieldWarning().then((element) => {
      const text = element.text();
      expect(text).to.equal(this.data.emptyPasswordlWarning);
    });
  });

  it('user can log in with the correct password and login', function () {
    const loginForm = new LoginForm();
    const header = new Header();

    loginForm.loginFieldInput().type(Cypress.env('testLogin')).blur();
    loginForm.passwordFieldInput().type(Cypress.env('testPassword')).blur();
    loginForm.logInButton().click();
    header.root().should('be.visible');
  });
});
