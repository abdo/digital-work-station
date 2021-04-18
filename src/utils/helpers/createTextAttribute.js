const createTestAttribute = ({ page: pagePart, element, context }) => {
  const elementPart = element ? `:${element}` : '';
  const contextPart = context ? `::${context}` : '';

  return `${pagePart}${elementPart}${contextPart}`;
};

export default createTestAttribute;
