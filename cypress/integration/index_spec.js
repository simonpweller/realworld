describe(`Hello world`, () => {
  it(`should render a list of articles `, () => {
    cy.visit("/");
    cy.contains("How to train your dragon");
    cy.contains("How to train your dragon 2");
  });
});
