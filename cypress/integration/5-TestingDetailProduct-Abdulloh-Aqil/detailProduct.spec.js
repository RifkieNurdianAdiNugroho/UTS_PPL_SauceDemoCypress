describe('verifiy user before sort this item', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.contains('Accepted usernames are')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html') 
    })

    it('click the image product', () => {
       cy . get ('#item_4_img_link').click() //pass
    })

     it('click the title product', () => {
       cy . get ('#item_4_title_link').click() // pass
    })

     it('click the description product', () => {
       cy . get ('.inventory_item_desc').click() //fail
    })

    it('click the blank area product', () => {
       cy . get ('.inventory_item_description').click()
    })

    it('click the price product', () => {
       cy . get ('.inventory_item_price').click() //fail
    })
})

