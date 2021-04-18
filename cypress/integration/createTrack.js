describe('Track Creation', () => {
  it('can type track name', () => {
    cy.visit('/');

    cy.getBySel({
      page: 'main',
      element: 'input',
      context: 'track-name',
    })
      .type('Test Track')
      .should('have.value', 'Test Track');
  });
});
