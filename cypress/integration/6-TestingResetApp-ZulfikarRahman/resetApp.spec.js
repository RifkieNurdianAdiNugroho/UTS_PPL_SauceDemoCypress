describe('verifiy user before sort this item', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.contains('Accepted usernames are')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html') 
    })

    it('add to cart product backpack and reset app', () => {
       cy.get ('#add-to-cart-sauce-labs-backpack').click() //pass
       cy.get('#reset_sidebar_link').click();
    })

    it('add to cart product backlight and reset app', () => {
       cy.get ('#add-to-cart-sauce-labs-bike-light').click() //pass
       cy.get('#reset_sidebar_link').click();
    })

    it('add to cart product bolt t-shirt and reset app', () => {
       cy.get ('#add-to-cart-sauce-labs-bolt-t-shirt').click() //pass
       cy.get('#reset_sidebar_link').click();
    })

    it('add to cart product flacee jacket and reset app', () => {
       cy.get ('#add-to-cart-sauce-labs-fleece-jacket').click() //pass
       cy.get('#reset_sidebar_link').click();
    })

     it('add to cart product onesie and reset app', () => {
       cy.get ('#add-to-cart-sauce-labs-onesie').click() //pass
       cy.get('#reset_sidebar_link').click();
    })
})

