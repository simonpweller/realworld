describe(`Article page`, () => {
  before(() => {
    cy.visit("/article/how-to-train-your-dragon");
  });

  it(`should render the article `, () => {
    cy.get(".article-content").should("contain", "It takes a Jacobian");
  });
});
