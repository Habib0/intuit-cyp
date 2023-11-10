// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { data } from "cypress/types/jquery";

// Cypress.Commands.add("loginUI",()=>{
//     cy.visit('/')
//     cy.get('[name="username"]').type("jrahardjo@canamwireless.com.pxhub");
//     cy.get('[name="pw"]').type("Express123!");
//     cy.get('[name="Login"]').click({force:true});
//     // cy.wait(15000)
//     // cy.reload()
//     cy.url().should('include', '/pxhub');
// })
var randomNumber = Math.floor(Math.random() * 10000);
const senderEmail = "johan@canamgeotab.com";
const receiverEmail = "johan@canamtelematics.com";
const passwordEmail = "nrtcvohytwjwellj";
const smtpServer = "smtp.gmail.com";
const port = 465;
const pxHubURL = "https://geotab.my.site.com/pxhub/s/lead-inbox";
const usernameValue = "jrahardjo@canamwireless.com.pxhub";
const passwordValue = "Express123!";


Cypress.Commands.add("loginUI", () => {
    cy.visit('https://geotab.my.site.com/pxhub/login');
    cy.get("#username").type(usernameValue);
    cy.get("#password").type(passwordValue);
    cy.get("#Login").click();
    cy.contains('PX Hub',{timeout:30000}).should('be.visible')
    cy.contains('Lead Inbox',{timeout:15000}).should('be.visible').click({force:true})
    cy.contains('Lead Infos',{timeout:20000}).should('be.visible')
    cy.get("body").then($body => {

        const numIterations = 5; // For example, loop 5 times
        
        for (let i = 0; i < numIterations; i++) {
        if ($body.text().includes("No leads yet")) {
            cy.log("'No leads yet' text found, reloading the page.");
            cy.reload();
            cy.contains('Lead Infos',{timeout:20000}).should('be.visible')
        } else {
            cy.get("button:contains('Accept')")
                .first()
                .then($button => {
                    if ($button.length > 0) {
                        // Click the "Accept" button and break out of the loop
                        cy.wrap($button).click();
                        cy.log("Action performed: Accept button clicked.");
                    } else {
                        // Reload the page and continue the loop
                        cy.log("No 'Accept' button found, reloading the page.");
                        cy.reload();
                        cy.contains('Lead Infos',{timeout:20000}).should('be.visible')
                    }
                });
        }
    }
    })

});


// cy.xpath('//div[@class="dijitReset dijitMenuItem highlight"]//div//div[contains(text(), "")]').then((cldChK) => {
                //     if (cldChK.text() === 'fd', 'edf', 'dsff', 'df', 'df', 'df'){
                //         cy.log('state value')
                //         console.log()
                //     }
                //     else{
                //         cy.log('state no matched')
                //     }
                // })
                
                // const state = '#widget_uniqName_7_8 > .dijitButtonNode > .dropDownImage';
                // cy.get(state).click({force:true})
                // if (['TX', 'FL', 'GA', 'NJ', 'NC', 'OH'].includes(state)) {
                //     cy.log('state value')
                // }
                // cy.get('#uniqName_7_8').click()
                // cy.xpath('//div[@class="dgrid-content ui-widget-content"]//td[@class="dgrid-cell dgrid-cell-padding dgrid-column-7 clickable field-taxable"]')
                // .eq(0)
                // .click({force:true})
                // cy.get('[aria-label="Sales Tax"]')
                // .eq(0).should('be.visible')
                // .click({force:true})



                // cy.get('[data-morpheus-pluginid="sales-widgets-ui"] tbody tr', { timeout: 20000 }).each(($row, index, $rows) => {
                //     // Inside the loop, find the 'td' element with 'data-column-id="referenceNumber"'
                //     const $td = $row.find('td[data-column-id="referenceNumber"]');
                    
                //     // Click on the 'td' element
                //     $td.click({ force: true });
                    
                //     // You can perform additional actions here if needed
                //     // For example, you can assert something or perform some other actions
                    
                //     // If this is the last row, you can continue with your next steps
                //     if (index === $rows.length - 1) {
                //       // Add your code for the next steps after clicking on all rows here
                //     }
                //   });
                
                
                
                // Cypress.Commands.add("randomUser", () => {
                //     cy.task("getCache", "randomNumber").then((a: any) => {
                  
                //     for (let i = 0; i < 10; i++) {
                //       cy.visit('https://xevenskills.com/courses/hackathon/'); // Replace with your signup page URL
                //      cy.contains('Enroll Now').click();
                //      cy.get('[href="#stm-lms-register"]').click()
                    
                //       cy.get('[name="login"]').eq(1).type(`user`+ a,{force: true}); // Replace with your form element selectors
                //       cy.get('[name="email"]').type("user"+a+"@example.com");
                //       cy.get('[name="password"]').eq(1).type('@Password123',{force: true});
                //       cy.get('[name="password_re"]').eq(0).type('@Password123',{force: true});
                //       cy.get('[type="tel"]').type('122223123',{force: true});
                //       cy.get('[class="form-control disable-select"]').eq(0).select('Matric')
                      
                //       cy.get('[class="form-control disable-select"]').eq(1).select('Female')
                      
                //       // Check if sign-up is successful
                //      cy.get('[type="text"]').eq(4).type('12')
                //      cy.get('[class="btn btn-default register-btn"]').click();
                //      cy.wait(5000)
                     
                //     //  cy.get('[id="dLabel"]').select('Logout')
                //   }
                //     })
                //   })

Cypress.Commands.add('',()=>{
    describe("Link Check", () => {
        it("should check all links on the website", () => {
          cy.visit("https://myfloridagreen.com/");
          cy.get("a").each(link => {
            const href = link.prop("href");
            if (href) {
              cy.request(href).then(response => {
                expect(response.status).to.eq(200); // You can adjust this condition
                cy.log(href)
              });
            }
          });
        });
        it("should check all links on the website", () => {
          cy.visit('https://mdpocket.com/')
          cy.wait(5000)
          cy.get('a:contains("Guides")').trigger('mouseover');
          cy.get('.sub-menu').should('be.visible');
          cy.get('a:contains("Students")').click();
    
        })
    
        
        it.only('', () => {
          cy.randomUser()
       });
    
      });
      
})


// cy.xpath('//div[@class="combo-button primary saveActionComboButton"]//button[@class="combo-button-toggle dijitDownArrowButton"')
// cy.contains('save and done').click({force:true})