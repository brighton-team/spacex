class Landing {
  landingDescription = () => cy.get('[data-test="landing-description"]');

  logInButton = () => cy.get('[data-test="signin-button"]');

  signUpButton = () => cy.get('[data-test="signup-button"]');
}

export default Landing;
