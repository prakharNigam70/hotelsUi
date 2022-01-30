describe("sign up testing", () => {
    it("home page button", ()=>{
        cy.visit("https://hotels-project-91b7f.web.app/SignUp")
        cy.get("#homeButton").click();
        cy.url().should('include', 'HotelsUI')
    })

    it("reset button", ()=>{
        cy.visit("https://hotels-project-91b7f.web.app/SignUp")
        const ar = ["#username", "#emailId", "#password"];
        ar.forEach(x => cy.get(x).should("have.value", ''))
        ar.forEach(x => cy.get(x).type("some text"))
        cy.get("#secondaryButton").click();
        ar.forEach(x => cy.get(x).should("have.value", ''))
    })

    it("Login button", ()=>{
        cy.visit("https://hotels-project-91b7f.web.app/SignUp")
        cy.get("#tertiaryButton").click();
        cy.url().should('include', 'Login')
    })

    it("Already existing email address", ()=>{
        cy.visit("https://hotels-project-91b7f.web.app/SignUp")
        cy.intercept({
            method : "POST",
            pathname : "**/identitytoolkit/v3/relyingparty/signupNewUser"
        }).as("submitApi")
        cy.get("#username").type("some text")
        cy.get("#emailId").type("prakharnigam@gmail.com")
        cy.get("#password").type("some text 123")
        cy.get("#primaryButton").click();
        cy.wait("@submitApi")
        cy.get("#errorMessage").contains("already in use")
    })

    it("Already existing email address", ()=>{
        cy.visit("https://hotels-project-91b7f.web.app/SignUp")
        cy.intercept({
            method : "POST",
            pathname : "**/identitytoolkit/v3/relyingparty/signupNewUser"
        }).as("submitApi")
        cy.get("#username").type("some user")
        cy.get("#emailId").type(`test${Date.now()}@gmail.com`)
        cy.get("#password").type("123456")
        cy.get("#primaryButton").click();
        cy.wait("@submitApi")
        cy.url().should('include', 'HotelsUI')
        cy.get("#profileButton").click();
        cy.url().should('include', 'Profile')
        cy.get("#primaryButton").click()
        cy.url().should('include', 'HotelsUI')
    })
})

// https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCzBceTT9eO1RU6nT5ts146i-JhR54-IP0