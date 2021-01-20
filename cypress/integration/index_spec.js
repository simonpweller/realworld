describe(`Home page`, () => {
  before(() => {
    cy.visit("/");
  });

  it(`should render a list of articles `, () => {
    cy.get(".article-preview")
      .should("have.length", 2)
      .eq(0)
      .should("contain", "How to train your dragon")
      .should("contain", "Ever wonder how?");
  });

  describe(`sidebar`, () => {
    it(`should render a list of tags`, () => {
      cy.get(".sidebar")
        .should("contain", "reactjs")
        .should("contain", "angularjs");
    });
  });
});
