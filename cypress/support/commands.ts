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


// amir credintl data
// email
  // amir@canamtelematics.com
//pass
  // Amir@canam123.

// krishna data cred
//email
  // Krishna@canamwireless.com
//pass
  // KNewHope1!


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

// nots data

// old code start 


// /// <reference types="Cypress" />
// describe("intuit data by", () => {

//   it("login website", () => {
//       cy.visit('https://accounts.intuit.com/app/sign-in?app_group=QBO&asset_alias=Intuit.accounting.core.qbowebapp&app_environment=prod')
//       cy.get('[data-testid="IuxBookendsContainer"]',{timeout:50000}).should('be.visible')
//       cy.get('[name="Email"]').type('amir@canamtelematics.com')
//       cy.get('[data-testid="IdentifierFirstSubmitButton"]').click()
//       cy.get('[name="Password"]',{timeout:20000}).should('be.visible').type('Amir@canam123.')
//       cy.get('[data-testid="passwordVerificationContinueButton"]').click({force:true})
//       cy.get('[data-id="shellMainNode"]',{timeout:50000}).should('be.visible')
//       cy.get('[data-id="invoicing_and_sales"]').click({force:true})
//       cy.get('[data-id="path-invoices-Tab"] > a').click({force:true})
//       cy.get('[id="idsDropdownTextField7"]').click()
//       cy.get('[data-automation-id="option-this-month"]').click()
//       cy.wait(5000)
//       // cy.get('[data-morpheus-pluginid="sales-widgets-ui"] tbody',{timeout:20000})
//       //     .find('td[data-column-id="referenceNumber"]').contains('81413')
//       //     .eq(0).click({force:true})


//   function processInvoicesOnCurrentPage() {
//       cy.get('[data-morpheus-pluginid="sales-widgets-ui"] tbody', { timeout: 20000 })
//       .find('button[data-automation-id="edit-action-button"]')
//       .each(($referenceNumber, index) => {
//           // if (index >= 3) { // Adjust the index range as needed
//           //     return; // This will stop the loop after the specified number of elements (e.g., 3)
//           // }
//           // start one by one invoice
//           cy.wrap($referenceNumber).click({ force: true });
          
          

//           // cy.get('[class="sales-view-ui"]').should('be.visible')
//           // cy.contains('button', 'Edit invoice').click()
//           cy.get('[class="header stretch trowserHeader"]',{timeout:200000}).should('be.visible')
//           // cy.wait(10000)
//           cy.wait(15000)
  
//           // // check current month
  
//           // //  Get the current date
  
//            const currentDate = new Date();
//            const currentMonth = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
   
//            // Get the invoice date value from the hidden input
//            cy.get<HTMLInputElement>('[data-automation-id="input-creation-date-sales"] + input[type="hidden"]').then($hiddenInput => {
//                const invoiceDateValue = $hiddenInput.val() as string; // Type assertion
//                const invoiceDate = new Date(invoiceDateValue);
   
//               // Check if the invoice date is in the current month
//               if (invoiceDate.getMonth() + 1 === currentMonth) {
//                   cy.log('this data created in current month')
//                       //   cy.pause()
//               // check for checkbox checked or not
//               cy.wait(2000)
//                   cy.get('body').then($body => {
//                       if ($body.find('td div[class="checkbox-sprite checked"]').length > 0) {
//                           cy.log('already checked')
//                           cy.wait(4000)
//                           cy.get('.trowserHeaderRight > .hi-close').eq(0).click({force:true})
//                           cy.wait(2000)
//                       //     cy.get('body').then($body => {
//                       //        if ($body.find('[class="message "]').length > 0) {
//                       //            cy.contains('button', 'Yes').click({ force: true });
//                       //        } else {
//                       //            cy.log('popup not open');
//                       //        }
//                       //    });
//                       }
//                       else {
//                           cy.log('checkbox not checked')
//                           const state = '[class="table rightFieldsSection floatRight"] .dropDownImage';
//                           cy.get(state,{timeout:120000}).eq(0).should('be.visible').click({force:true})
//                           // Assuming you're on the page and have selected the relevant dropdown element
//                           cy.get('.dijitMenuItem.highlight').each(($menuItem) => {
//                               const itemText = $menuItem.text();
          
//                                   if (['TX', 'FL', 'GA', 'NJ', 'NC', 'OH', 'IL'].includes(itemText)) {
                                  
//                                       cy.log('if statement')
//                                       cy.wait(2000)
//                                       cy.get(state).eq(0).should('be.visible').click({force:true})
//                                       cy.xpath('//div[@class="subsection12TitleText" and contains(text(), "Invoice no.")]')
//                                       .click({force:true})
//                                       // Find all rows in the table
//                                           cy.get('.dgrid-row').each((row) => {
//                                               // Check if the row contains taxable cells
//                                               const checkbox = row.find('td.field-taxable');
//                                               cy.wrap(checkbox,{timeout:120000}).should('be.visible').dblclick({ force: true }) // Check the checkbox
//                                               cy.get('[aria-label="Sales Tax"]')
//                                               .eq(0).should('be.visible')
//                                               .click({force:true})
//                                               cy.wait(3000)
//                                               cy.get('body').then(($body) => {
//                                                   const errorSelector = 'div.alert-content:contains("We can\'t validate this shipping address, so we\'ve based the sales tax calculation on your business address. For a more accurate calculation, update the address you are shipping to.")';
                                                
//                                                   if ($body.find(errorSelector).length > 0) {
//                                                     cy.log('Error message found. Clicking on "See the math"');
//                                                     cy.wait(15000);
//                                                     cy.xpath('//button[@data-automation-id="recommendedTaxRatesModalDisplay"]//span[contains(text(), "See the math")]',{timeout:100000}).eq(0)
//                                                     .should('be.visible').click({force:true})
                                                
//                                                     cy.get('[class="content"]').should('be.visible');
//                                                     cy.get('[data-automation-id="editAgencyDrawerSave"]').click({ force: true });
//                                                     cy.get('[class="close-sprite icon-close"]').eq(0).click({ force: true });
//                                                   } else {
//                                                     cy.log("Successfully checkbox checked");
//                                                   }
//                                                 });
                                                
//                                           });
//                                           cy.wait(2000)
//                                       // Save Data
//                                       // cy.xpath('//div[@class="combo-button primary saveActionComboButton"]//button[@class="combo-button-toggle dijitDownArrowButton"]').click({force:true})
//                                       cy.contains('Save and close').eq(0).click({force:true})
//                                   }
//                                   else if (['CA', 'MD', 'LA'].includes(itemText)) {
//                                       cy.log('Skipping checkbox click for Shipping items in CA, MD, LA states');
//                                       // Skip checkbox click action for items with "Shipping" description
//                                       cy.wait(3000)
//                                       // cy.xpath('//div[@class="subsection12TitleText" and contains(text(), "Invoice no.")]')
//                                       // .click({force:true})
//                                       cy.get(state).eq(0).should('be.visible').click({force:true})
//                                       cy.get('.dgrid-row').each((row) => {
//                                           cy.wait(1000)
//                                           const productService = row.find('.field-itemId .itemColumn').text();
//                                           // const stated = row.find('.field-itemId .itemColumn').text();
                                          
//                                           if (productService.includes('Shipping') ) {
//                                               cy.log('Skipping checkbox because SHIPPING item contain');
//                                           }
//                                           else {
                                              
//                                               const checkbox = row.find('td.field-taxable');
//                                               cy.wrap(checkbox,{timeout:120000}).should('be.visible').dblclick({ force: true }); // Check the checkbox
//                                               cy.get('[aria-label="Sales Tax"]')
//                                               .eq(0).should('be.visible')
//                                               .click({force:true})
//                                               cy.wait(2000)
//                                               cy.get('body').then(($body) => {
//                                                   const errorSelector = 'div.alert-content:contains("We can\'t validate this shipping address, so we\'ve based the sales tax calculation on your business address. For a more accurate calculation, update the address you are shipping to.")';
                                                
//                                                   if ($body.find(errorSelector).length > 0) {
//                                                     cy.log('Error message found. Clicking on "See the math"');
//                                                     cy.wait(15000);
//                                                     cy.xpath('//button[@data-automation-id="recommendedTaxRatesModalDisplay"]//span[contains(text(), "See the math")]',{timeout:100000}).eq(0)
//                                                     .should('be.visible').click({force:true})
                                                
//                                                     cy.get('[class="content"]').should('be.visible');
//                                                     cy.get('[data-automation-id="editAgencyDrawerSave"]').click({ force: true });
//                                                     cy.get('[class="close-sprite icon-close"]').eq(0).click({ force: true });
//                                                   } else {
//                                                     cy.log("Successfully check box checked");
//                                                   }
//                                                 });
                                                
//                                           }
//                                       });
//                                       cy.wait(2000)
//                                       // Save Data
//                                       // cy.xpath('//div[@class="combo-button primary saveActionComboButton"]//button[@class="combo-button-toggle dijitDownArrowButton"]').click({force:true})
//                                       cy.contains('Save and close').eq(0).click({force:true})
//                                   }
//                                   else{
//                                       cy.log('state is not in list so data skipping')
//                                       cy.get('.trowserHeaderRight > .hi-close').eq(0).click({force:true})
//                                   }
//                           });




//                       }
//                   })  
//               // end check for checkbox checked or not
//               }
//               // end check if month in current month
//                else {
//                    cy.log('Skipping the script as the date is not in the current month');
//                    return; // Skip the rest of the test
//                }
//            });
  


//           cy.wait(4000); // Adjust the wait time as needed
//           // temporary data
          
//           // cy.contains('button', 'Cancel').dblclick({force:true})
//           // cy.get('[data-automation-id="button-cancel-universal"]')
       
          
//       });
  
//       // cy.go(-1); // Navigate back to the list of invoices
          
//       // Optional: Wait for a moment before processing the next element
//       cy.wait(2000); // Adjust the wait time as needed
//   }

//   // end processinvoice

//   function processInvoices() {
//       processInvoicesOnCurrentPage();
  
//       // Check if there is a next page button and click it if available
//       cy.get('[data-automation-id="table-next-page-button"]').then($nextButton => {
//           if ($nextButton.is(':enabled')) {
//               cy.wrap($nextButton).click();
//               cy.wait(2000); // Wait for the page to load (adjust the wait time as needed)
//               processInvoices(); // Recursively process invoices on the next page
//           } else {
//               // No more pages available, processing completed
//               cy.log('All invoices processed.');
//           }
//       });
//   }
  
//   // Start processing invoices from the first page
//   processInvoices();    



//   })
// })