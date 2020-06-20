import { title } from "../../src/routes/_utils";

describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1> and page title", () => {
    cy.contains("h1", "Great success!");
    cy.title().should("equal", title);
  });

  it("navigates to /about", () => {
    cy.get("nav a").contains("about").click();
    cy.url().should("include", "/about");
  });

  it("navigates to /blog", () => {
    cy.get("nav a").contains("blog").click();
    cy.url().should("include", "/blog");
  });
});
