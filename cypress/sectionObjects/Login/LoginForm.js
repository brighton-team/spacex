class LoginForm {
  form = () => cy.get('[data-test="login-form"]');

  loginField = () => this.form().find('[data-test="login-field-form-item"]');

  passwordField = () => this.form().find('[data-test="password-field-form-item"]');

  loginFieldInput = () => this.loginField().find('input');

  loginFieldWarning = () => this.form().find('#login-helper-text');

  passwordFieldInput = () => this.passwordField().find('input');

  passwordFieldWarning = () => this.form().find('#password-helper-text');

  logInButton = () => this.form().find('[data-test="log-in-button"]');

  signUpButton = () => cy.get('[data-test="login-page-signup-button"]');
}

export default LoginForm;
