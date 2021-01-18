describe(`Hello world`, () => {
  it(`should render hello world `, () => {
    cy.visit("/");
    cy.contains("Hello world!");
  });
});
