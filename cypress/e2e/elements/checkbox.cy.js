describe("Check Box - DemoQA", () => {
    it("selects a checkbox and verifies result", () => {
        cy.visit("https://demoqa.com/checkbox");
        cy.get("button[title='Toggle']").first().click();
        cy.contains("Desktop").click();

        cy.get("#result").should("contain", "desktop");
    });
});
