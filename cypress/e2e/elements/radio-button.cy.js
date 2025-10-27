describe("Radio Button - DemoQA", () => {
    it("selects Yes radio button", () => {
        cy.visit("https://demoqa.com/radio-button");
        cy.get("label[for='yesRadio']").click();
        cy.get(".text-success").should("contain", "Yes");
    });
});
