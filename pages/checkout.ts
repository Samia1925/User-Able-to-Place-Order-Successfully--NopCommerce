
import { Page,expect } from "@playwright/test";

export default class Checkout {

    constructor(public page: Page) {
    }

    async enterFirstName(firstname: string){
        await this.page.locator("//input[@type='text' and @name='BillingNewAddress.FirstName']")
        .type(firstname);
        }

    async enterLastName(lastname: string){
        await this.page.locator("//input[@name='BillingNewAddress.LastName']")
        .type(lastname);
        }

    async enterEmail(email: string){
        await this.page.locator("//input[@name='BillingNewAddress.Email']")
        .type(email);
        }

    async enterCompanyName(company: string){
        await this.page.locator("//input[@name='BillingNewAddress.Company']")
        .type(company);
        }

         async enterCountryName(country: string) {
            const countryDropdown = this.page.locator("//select[@name='BillingNewAddress.CountryId']");
            await countryDropdown.selectOption({ 
                label: country 
            }); // Use selectOption to choose the country
            // Wait for the state dropdown to update after country selection
            await this.page.locator("//select[@name='BillingNewAddress.StateProvinceId']").waitFor({ state: 'visible' });
        }
        
        async enterStateName(state: string) {
            const stateDropdown = this.page.locator("//select[@name='BillingNewAddress.StateProvinceId']");
            await stateDropdown.selectOption({ 
                label: state
             }); // Use selectOption to choose the state
        } 
    async enterCityName(city: string){
         await this.page.locator("//input[@name='BillingNewAddress.City']")
        .type(city);
        }  
    async enterAddress1(address1: string){
        await this.page.locator("//input[@name='BillingNewAddress.Address1']")
        .type(address1);
         } 

    async enterAddress2(address2: string){
        await this.page.locator("//input[@name='BillingNewAddress.Address2']")
        .type(address2);
        } 

    async enterZip(zip: string){
    await this.page.locator("//input[@name='BillingNewAddress.ZipPostalCode']")
    .type(zip);
    } 
    
    async enterPhoneNo(phoneNo: string){
    await this.page.locator("//input[@name='BillingNewAddress.PhoneNumber'] ")
    .type(phoneNo);
                    
    } 
    async enterFaxNo(faxNo: string){
    await this.page.locator("//input[@name='BillingNewAddress.FaxNumber'] ")
    .type(faxNo);
    } 
                
    async clickNext(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("//button[@type='submit' and @id='billingaddress-next-button']")
            
        ]);

        
        const radioButton = this.page.locator("//input[@type='radio' and @value='Ground___Shipping.FixedByWeightByTotal']");
    await radioButton.waitFor({ state: 'visible' });

    
    await radioButton.check();

  
  
    
    }
    
    async clickNext2() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("//button[@type='submit' and @class= 'button-1 shipping-method-next-step-button']")
        ]);
    
        
        const radioButton = this.page.locator("//input[@type='radio' and @value='Payments.CheckMoneyOrder' and @id='paymentmethod_4']");
     
        await radioButton.click();
    }

    async clickNext3() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("//button[@type='submit' and @class='button-1 payment-method-next-step-button']")
        ]);
    
    }

    //button[@type='submit' and @class='button-1 payment-info-next-step-button']
    async clickNext4() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("//button[@type='submit' and @class='button-1 payment-info-next-step-button']")
        ]);
    
    }  
    //button[@type='submit' and @class='button-1 confirm-order-next-step-button']
    async clickConfirmOrder() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("//button[@type='submit' and @class='button-1 confirm-order-next-step-button']")
        ]);
    
    }  

    async verifyThankYouMessage() {
        const firstMsg = await this.page.locator("//h1[contains(text(), 'Thank you')]");
        const secondMsg = await this.page.locator("//strong[contains(text(), 'Your order has been successfully processed!')]");
    
        // Wait for the message to appear
        //await thankYouMessage.waitFor({ state: 'visible' });
    
        // Assert it is visible
        expect(await firstMsg.isVisible()).toBe(true);
        expect(await secondMsg.isVisible()).toBe(true);
       
    }

    async clickConfirmOrderDetailsLink() {
        //a[contains(text(), 'Click here for order details.')]
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("//a[contains(text(), 'Click here for order details.')]")
        ]);
    
    } 
    
    
    
              
}
