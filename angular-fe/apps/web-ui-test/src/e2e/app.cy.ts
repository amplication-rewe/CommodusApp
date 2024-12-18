describe('angular-fe', () => {
  beforeEach(() => cy.visit('/'));

  it('should display application title', () => {
    cy.get('.unify-global-header__app-title').contains('Application Title');
  });
});
