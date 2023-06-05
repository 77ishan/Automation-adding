
///<reference types = "cypress" />
it('Login', () => {
  cy.visit('https://dev.keela.co/')
  // cy.get('form')
  // .find('input')
  // .then(($inputs)=>{
  //   if ($inputs.length >= 2) {
  //     cy.wrap($inputs[1]).click();
  //   } else {
  //     cy.log('Not enough input fields in the form');
  //   }
  // })
  cy.get('.form-control').eq(0).type('qatest@getnada.com')
  cy.wait(200)
  cy.get('.form-control').eq(1).type('qatest12345')
  cy.wait(200)
  cy.get('.col-8 > .btn').click()
  // cy.get('.font-size-h1').should('contain','Welcome, QA Test!')
  
  
  cy.get('#sidebar')

  cy.get('.nav-main-link-name') .eq(3) .click()
  
  cy.get('.btn-primary').click()

  cy.wait(300)
   cy.get(':nth-child(2) > :nth-child(1) > .row > .col-12 > .form-group').type('Ishan')
   cy.wait(300)
   cy.get(':nth-child(2) > :nth-child(3) > .row > .col-12 > .form-group').type('Rai')
   cy.wait(300)
  cy.get(':nth-child(5) > .row > .col-12 > .form-group').type('raiishan67@gmail.com')
  cy.wait(300)
  cy.get('.block-content-full > div > .btn').click()
  // adding campaign
    cy.get('#sidebar')
    cy.get(':nth-child(6) > .nav-main-link > .nav-main-link-name').click()
    cy.get('.btn-primary').click()
    cy.get(':nth-child(1) > .row > .col-12 > .required').type('QA test')
    cy.get('.block-content-full > div > .btn').click()
    // adding on impact area
    cy.get('#sidebar')
    cy.get(':nth-child(5) > .nav-main-link > .nav-main-link-name').click()

    cy.get('.btn-primary').click()
    cy.get('.required').type('education')
    cy.get('.block-content-full > div > .btn').click()
    cy.get('[data-tracking-table="impact-areas-ImpactAreas-0-0"] > a > [data-v-32627d72=""] > .font-w500').click()

})
