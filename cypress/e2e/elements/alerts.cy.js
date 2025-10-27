describe("Alerts DemoQA", () => {
    it("handles confirmation alert", () => {
        cy.visit("https://demoqa.com/alerts");

        cy.window().then((win) => {
            cy.stub(win, "confirm").returns(true);
        });

        cy.get("#confirmButton").click();
        cy.get("#confirmResult").should("contain", "Ok");
    });
});
