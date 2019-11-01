const { searchWord } = require("../fixtures/data.json");

context("google search", () => {
  before(() => {
    cy.visit("https://www.google.com");
  });

  it("should be on google search page", () => {
    cy.title().should("eq", "Google");
  });

  it(`should search for ${searchWord}`, () => {
    cy.get(".gLFyf.gsfi").type(`${searchWord}{enter}`);
  });

  it(`the page title should start with ${searchWord}`, () => {
    cy.title().should("contain", searchWord);
  });
});
