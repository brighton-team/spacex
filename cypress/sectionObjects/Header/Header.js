class Header {
  root = () => cy.get('[data-test="header"]');

  logo = () => this.root().find('[data-test="logo"]');

  playButton = () => this.root().find('[data-test="play-button"]');

  leadersButton = () => this.root().find('[data-test="leaders-button"]');

  forumButton = () => this.root().find('[data-test="forum-button"]');

  profileButton = () => this.root().find('[data-test="profile-button"]');

  feedbackButton = () => this.root().find('[data-test="feedback-button"]');
}

export default Header;
