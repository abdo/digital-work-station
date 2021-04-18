const createTestAttribute = ({ page: pagePart, element, context }) => {
  const elementPart = element ? `:${element}` : '';
  const contextPart = context ? `::${context}` : '';

  return `${pagePart}${elementPart}${contextPart}`;
};

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test="${createTestAttribute(selector)}"]`, ...args);
});
