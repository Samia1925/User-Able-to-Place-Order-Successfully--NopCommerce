import { Page } from "@playwright/test";

export default class Jewelry {

    constructor(public page: Page) {
    }

    async clearCart() {
        const cartIcon = this.page.locator("//a[@class='ico-cart']");
        await cartIcon.hover();
        await cartIcon.click();
   
        // Wait for the cart page to load
        const emptyCartMessage = this.page.locator("//span[@class='cart-qty' and text()='(0)']");
        if (await emptyCartMessage.isVisible()) {
            console.log("Cart is already empty.");
        } else {
            // Dynamically update the locator inside the loop
            while (true) {
                const removeButtons = this.page.locator("//button[@name='updatecart' and @class='remove-btn']");
                const removeButtonCount = await removeButtons.count();
               
                if (removeButtonCount === 0) {
                    console.log("All items removed from the cart.");
                    break; // Exit the loop when no more items are left
                }
                await removeButtons.nth(0).click();
                await this.page.waitForTimeout(1000);
            }
        }
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

        // adding multiple quantity of product

        const multiProduct = this.page.locator("//h2[@class='product-title']//a[normalize-space()='Flower Girl Bracelet']");
        await multiProduct.click();

        const multiProductQty = this.page.locator("//input[@class='qty-input'] ")
        await multiProductQty.fill("5");

        const addMultiProduct = this.page.locator("//button[@id='add-to-cart-button-41']");
        await addMultiProduct.click();

        const popupMessage3 = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
        await popupMessage3.waitFor({ state: "visible" });

        // closing the carts

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
