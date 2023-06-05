///<reference types = "cypress" />

// const { functions } = require("cypress/types/lodash")

// it('Login', () => {
//   cy.visit('https://dev.keela.co/')

//   cy.get('.form-control').eq(0).type('qatest@getnada.com')
//   cy.wait(200)
//   cy.get('.form-control').eq(1).type('qatest12345')
//   cy.wait(200)
//   cy.get('.col-8 > .btn').click()
//   // cy.get('.font-size-h1').should('contain','Welcome, QA Test!')
//   cy.get('#sidebar')
// })

describe('Validate Checkboxes',function(){
  it(' Validate checkboxes',function(){
    cy.visit('https://dev.keela.co/')
    cy.get('.form-control').eq(0).type('qatest@getnada.com')
  cy.wait(200)
  cy.get('.form-control').eq(1).type('qatest12345')
  cy.wait(200)
  cy.get('.col-8 > .btn').click()
  // cy.get('.font-size-h1').should('contain','Welcome, QA Test!')
  // cy.get('#sidebar')
  cy.get('.nav-main-link-name') .eq(3) .click()


  cy.get('input[type="checkbox"]').check("Ishan Rai")
  
 


  })

})

