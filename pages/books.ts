import { Page } from "@playwright/test";

export default class Books {

    constructor(public page: Page) {
    }

    async addFirstAndSecondProductsToCart() {
        // Locate the "Add to cart" buttons
        const addFirstAndSecondProductsToCart = this.page.locator("//button[contains(text(), 'Add to cart')]");

        // Click the first product's "Add to cart" button
        await addFirstAndSecondProductsToCart.nth(0).click();

        // Wait for the confirmation of the first product being added to the cart
        const popupMessage1 = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
        await popupMessage1.waitFor({ state: "visible" });

        // Click the second product's "Add to cart" button
        await addFirstAndSecondProductsToCart.nth(1).click();

        // Wait for the confirmation of the second product being added to the cart
        const popupMessage2 = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
        await popupMessage2.waitFor({ state: "visible" });

        const closeButton = this.page.locator("//span[@class='close' and @title='Close']");
        await closeButton.click();

        const cartIcon = this.page.locator("//a[@class='ico-cart']");
        await cartIcon.hover();
        await cartIcon.click();

        // Select the 'terms of service' checkbox
        const termsCheckbox = this.page.locator("//input[@type='checkbox' and @name='termsofservice']");
        await termsCheckbox.check(); // Check the checkbox

       // const termandconditionClose = this.page.locator("//button[@type='button' and @title='Close']");
        // await termandconditionClose.click();

        const checkoutButton = this.page.locator("//button[@type='submit' and @name='checkout']");
        await checkoutButton.click();


    }

    
}
