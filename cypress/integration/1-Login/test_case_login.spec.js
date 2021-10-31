/// <reference types="cypress"/>

//Username Valid//Username Invalid - Password Valid

describe('Login Scenario', () => {

  it('Username Invalid - Password Valid', ()=>{
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').type('itry')
  cy.get('#password').type('secret_sauce')

  cy.get('#login-button').click()
  cy.contains('Username Invalid - Password Valid').should('be.visible')
  })

})


//Username Valid - Password Invalid

describe('Login Scenario', () => {

  it('Username Valid - Password Invalid', ()=>{
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('itry')

  cy.get('#login-button').click()
  cy.contains('Username Valid - Password Invalid').should('be.visible')
  })

})

//Username Invalid - Password Invalid

describe('Login Scenario', () => {

  it('Username Invalid - Password Invalid', ()=>{
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').type('itry')
  cy.get('#password').type('itry')

  cy.get('#login-button').click()
  cy.contains('Username Invalid - Password Invalid').should('be.visible')
  })

})

//Username Empty - Password Empty

describe('Login Scenario', () => {

  it('Username Empty - Password Empty', ()=>{
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').type('')
  cy.get('#password').type('')

  cy.get('#login-button').click()
  cy.contains('Username Empty - Password Empty').should('be.visible')
  })

})