describe('Samples', () => {
  it('can be played', () => {
    cy.visit('/');

    cy.getBySel({
      page: 'main',
      element: 'div',
      context: 'audio-sample',
    })
      .first()
      .click()
      .then(() => {
        cy.get('#pause-icon').should('exist');
      });
  });
});
