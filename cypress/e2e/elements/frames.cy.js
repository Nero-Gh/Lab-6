const getIframe = (selector) => {
    return cy.get(selector).its("0.contentDocument.body").should("not.be.empty").then(cy.wrap);
};

describe("Frames DemoQA", () => {
    it("verifies iframe content", () => {
        cy.visit("https://demoqa.com/frames");
        getIframe("#frame1").find("h1").should("contain", "This is a sample page");
    });
});
