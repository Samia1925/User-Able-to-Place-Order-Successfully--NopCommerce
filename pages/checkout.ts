import { Page, expect } from "@playwright/test";

const checkoutTermsCheckBox="//input[@type='checkbox' and @name='termsofservice']";
const checkoutCheckedButton="//button[@type='submit' and @name='checkout']";
const checkoutAccountLocator1 ="//h1[contains(text(), 'Billing address')]";
const checkoutAccountLocator2 ="//h1[contains(text(), 'Select shipping method')] ";
const checkoutAccountLocator3 ="//h1[contains(text(), 'Select payment method')] ";
const checkoutAccountLocator4 ="//h1[contains(text(), 'Payment information')] ";
const checkoutAccountLocator5 ="//h1[contains(text(), 'Confirm your order')] ";
const thankYouFirstMsg="//h1[contains(text(), 'Thank you')]";
const thankYouSecondMsg="//strong[contains(text(), 'Your order has been successfully processed!')]";

const billiingFirstName="//input[@type='text' and @name='BillingNewAddress.FirstName']";
const billiingLastName="//input[@name='BillingNewAddress.LastName']";
const billiingEmail="//input[@name='BillingNewAddress.Email']";
const billingCompany="//input[@name='BillingNewAddress.Company']";
const billingCountry="//select[@name='BillingNewAddress.CountryId']";
const billingState="//select[@name='BillingNewAddress.StateProvinceId']";
const billingCity="//input[@name='BillingNewAddress.City']";
const billingAddress1="//input[@name='BillingNewAddress.Address1']";
const billingAddress2="//input[@name='BillingNewAddress.Address2']";
const billingZip="//input[@name='BillingNewAddress.ZipPostalCode']";
const billingPhone="//input[@name='BillingNewAddress.PhoneNumber'] ";
const billingFax="//input[@name='BillingNewAddress.FaxNumber'] ";
const billingNextBtn="//button[@type='submit' and @id='billingaddress-next-button']";

const shippingMethodGround="//input[@type='radio' and @value='Ground___Shipping.FixedByWeightByTotal']";
const shippingMethodNextBtn="//button[@type='submit' and @class= 'button-1 shipping-method-next-step-button']";

const paymentMethodCheckMoneyOrder="//input[@type='radio' and @value='Payments.CheckMoneyOrder' and @id='paymentmethod_4']";
const paymentMethodNextBtn="//button[@type='submit' and @class='button-1 payment-method-next-step-button']";

const paymentInfoNextBtn="//button[@type='submit' and @class='button-1 payment-info-next-step-button']";

const confirmOrderNextBtn="//button[@type='submit' and @class='button-1 confirm-order-next-step-button']";
const orderDetailsBtn="//a[contains(text(), 'Click here for order details.')]";


export default class Checkout {

    constructor(public page: Page) {
    }

    async checkoutPage(){
        const termsCheckbox = this.page.locator(checkoutTermsCheckBox);
        await termsCheckbox.check(); 

        const checkoutButton = this.page.locator(checkoutCheckedButton);
        await checkoutButton.click();
    }

    async verifyBillingAddress() {
        const accountLocator1 = this.page.locator(checkoutAccountLocator1);
        
        // Wait for the element to be visible
        if (await accountLocator1.isVisible()) {
            const text = await accountLocator1.textContent();
    
            // Check if the text matches the expected value
            if (text?.trim() === "Billing address") {
                console.log("Success: User successfully on Billing Address page.");
            } else {
                console.error(`Error: Expected 'Billing address' but found '${text?.trim()}'.`);
            }
        } else {
            console.error("Error: place order failed, Billing address is not visible.");
        }
    }

    async enterFirstName(firstname: string) {
        await this.page.locator(billiingFirstName).type(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator(billiingLastName).type(lastname);
    }

    async enterEmail(email: string) {
        await this.page.locator(billiingEmail).type(email);
    }

    async enterCompanyName(company: string) {
        await this.page.locator(billingCompany).type(company);
    }

    async enterCountryName(country: string) {
        const countryDropdown = this.page.locator(billingCountry);
        await countryDropdown.selectOption({
            label: country
        }); 
        // Wait for the state dropdown to update after country selection
        await this.page.locator(billingState).waitFor({ state: 'visible' });
    }

    async enterStateName(state: string) {
        const stateDropdown = this.page.locator(billingState);
        await stateDropdown.selectOption({
            label: state
        }); 
    }
    async enterCityName(city: string) {
        await this.page.locator(billingCity).type(city);
    }
    async enterAddress1(address1: string) {
        await this.page.locator(billingAddress1).type(address1);
    }

    async enterAddress2(address2: string) {
        await this.page.locator(billingAddress2).type(address2);
    }

    async enterZip(zip: string) {
        await this.page.locator(billingZip).type(zip);
    }

    async enterPhoneNo(phoneNo: string) {
        await this.page.locator(billingPhone).type(phoneNo);

    }
    async enterFaxNo(faxNo: string) {
        await this.page.locator(billingFax).type(faxNo);
    }

    // shipping part 
    async billingToShippingmethodNext() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(billingNextBtn)
        ]);


        const shippingButton = this.page.locator(shippingMethodGround);
        await shippingButton.waitFor({ state: 'visible' });

        await shippingButton.check();

    }

    async verifyShippingMethod() {
        const accountLocator2 = this.page.locator(checkoutAccountLocator2);
        // Wait for the element to be visible
        if (await accountLocator2.isVisible()) {
            const text = await accountLocator2.textContent();
    
            // Check if the text matches the expected value
            if (text?.trim() === "Select shipping method") {
                console.log("Success: User successfully on Select shipping method page.");
            } else {
                console.error(`Error: Expected 'Select shipping method' but found '${text?.trim()}'.`);
            }
        } else {
            console.error("Error: place order failed, Select shipping method is not visible.");
        }
    }

    // payment method
    async shippingToPaymentMethodNext() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(shippingMethodNextBtn)
        ]);

        const paymentMethod = this.page.locator(paymentMethodCheckMoneyOrder);
        await paymentMethod.click();
    }

    async verifyPaymentMethod() {
        const accountLocator3 = this.page.locator(checkoutAccountLocator3);
        // Wait for the element to be visible
        if (await accountLocator3.isVisible()) {
            const text = await accountLocator3.textContent();
    
            // Check if the text matches the expected value
            if (text?.trim() === "Select payment method") {
                console.log("Success: User successfully on Select payment method page.");
            } else {
                console.error(`Error: Expected 'Select payment method' but found '${text?.trim()}'.`);
            }
        } else {
            console.error("Error: place order failed, Select payment method is not visible.");
        }
    }

    async paymentMethodToPaymentDetailsNext() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(paymentMethodNextBtn)
        ]);
    }

    async verifyPaymentInfo() {
        const accountLocator4 = this.page.locator(checkoutAccountLocator4);       
        // Wait for the element to be visible
        if (await accountLocator4.isVisible()) {
            const text = await accountLocator4.textContent();
    
            // Check if the text matches the expected value
            if (text?.trim() === "Payment information") {
                console.log("Success: User successfully on Payment information page.");
            } else {
                console.error(`Error: Expected 'Payment information' but found '${text?.trim()}'.`);
            }
        } else {
            console.error("Error: place order failed, Payment information is not visible.");
        }
    }

    async paymentInfoToConfirmationNext() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(paymentInfoNextBtn)
        ]);
    }

    async verifyConfirmOrder() {
        const accountLocator5 = this.page.locator(checkoutAccountLocator5);
        // Wait for the element to be visible
        if (await accountLocator5.isVisible()) {
            const text = await accountLocator5.textContent();
    
            // Check if the text matches the expected value
            if (text?.trim() === "Confirm your order") {
                console.log("Success: User successfully on Confirm your order page.");
            } else {
                console.error(`Error: Expected 'Confirm your order' but found '${text?.trim()}'.`);
            }
        } else {
            console.error("Error: place order failed, Confirm your order is not visible.");
        }
    }
    
    async clickConfirmOrder() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(confirmOrderNextBtn)
        ]);
    }

    async verifyThankYouMessage() {
        const firstMsg = this.page.locator(thankYouFirstMsg);
        const secondMsg = this.page.locator(thankYouSecondMsg);
        // Check if the first message is visible
        if (await firstMsg.isVisible()) {
            console.log("Success: 'Thank you' message is visible.");
        } else {
            console.error("Error: 'Thank you' message is not visible.");
        }
    
        // Check if the second message is visible
        if (await secondMsg.isVisible()) {
            console.log("Success: 'Your order has been successfully processed!' message is visible.");
        } else {
            console.error("Error: 'Your order has been successfully processed!' message is not visible.");
        }
    }
    
    async clickConfirmOrderDetails() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(orderDetailsBtn)
        ]);
    }
}
