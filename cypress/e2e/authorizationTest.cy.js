
describe('Authorization page test', () => {
    beforeEach(() => {
        cy.viewport(1024, 768)
      })

    it('Login page', () => {
        cy.visit("https://app2.abtasty.com/login")
        cy.title().should('eq', 'AB Tasty - Experience Optimization Platform')
    })

    it('Login page EN', () => {
        cy.intercept('GET', '/pulsar/locale/*/translation.json', (req) => {
            req.url = req.url.replace('/pulsar/locale/en/translation.json', '/pulsar/locale/en/translation.json')})
        cy.visit("https://app2.abtasty.com/login")
        cy.title().should('eq', 'AB Tasty - Experience Optimization Platform')
        cy.contains("Sign in to your account")
    })

    it('Login page FR', () => {
        cy.intercept('GET', '/pulsar/locale/*/translation.json', (req) => {
            req.url = req.url.replace('/pulsar/locale/en/translation.json', '/pulsar/locale/fr/translation.json')})
        cy.visit("https://app2.abtasty.com/login")
        cy.title().should('eq', 'AB Tasty - Experience Optimization Platform')
        cy.contains("Connexion")
    })
    it('Login page ES', () => {
        cy.intercept('GET', '/pulsar/locale/*/translation.json', (req) => {
            req.url = req.url.replace('/pulsar/locale/en/translation.json', '/pulsar/locale/es/translation.json')})
        cy.visit("https://app2.abtasty.com/login")
        cy.title().should('eq', 'AB Tasty - Experience Optimization Platform')
        cy.contains("Iniciar sesión")
    })
    it('Login page DE', () => {
        cy.intercept('GET', '/pulsar/locale/*/translation.json', (req) => {
            req.url = req.url.replace('/pulsar/locale/en/translation.json', '/pulsar/locale/de/translation.json')})
        cy.visit("https://app2.abtasty.com/login")
        cy.title().should('eq', 'AB Tasty - Experience Optimization Platform')
        cy.contains("Login")
    })

    
    it('Wrong email/password', () => {
        cy.visit("https://app2.abtasty.com/login")
        cy.fixture('username').then( (data) => {
            cy.get('[data-testid="email"]').type(data.email)
            cy.get('[data-testid="password"]').type(data.wrongpassword)
            cy.get('[type="submit"]').click()
        })
        cy.contains("Please enter a valid email or password")
    })

    it('Sign in with SSO', () => {
        cy.visit("https://app2.abtasty.com/login")
        cy.get('[type="button"]').click()
        cy.location('pathname').should('eq', '/ssologin')
    })

})