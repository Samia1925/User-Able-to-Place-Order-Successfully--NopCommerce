import { Page } from "@playwright/test";
import * as quantity from "../test-data/productQuantity-test-data.json";

const jewelryCartIcon="//a[@class='ico-cart']";
const jewelryEmptyCartMsg="//span[@class='cart-qty' and text()='(0)']";
const jewelryRemoveCartProduct="//button[@name='updatecart' and @class='remove-btn']";
const jewelryAddCartProduct="//button[contains(text(), 'Add to cart')]";
const jewelryPopupMsg="//p[contains(text(), 'The product has been added')]";
const jewelryMultiProduct="//h2[@class='product-title']//a[normalize-space()='Flower Girl Bracelet']";
const jewelryMultiProductQty="//input[@class='qty-input'] ";
const jewelryAddMultitProduct="//button[@id='add-to-cart-button-41']";
const jewelryCloseCart="//span[@class='close' and @title='Close']";

export default class Jewelry {

    constructor(public page: Page) {}

    async clearCart() {
        const cartIcon = this.page.locator(jewelryCartIcon);
        await cartIcon.hover();
        await cartIcon.click();

        // Wait for the cart page to load
        const emptyCartMessage = this.page.locator(jewelryEmptyCartMsg);
        if (await emptyCartMessage.isVisible()) {
            console.log("Cart is already empty.");
        } else {
            // Dynamically update the locator inside the loop
            while (true) {
                const removeButtons = this.page.locator(jewelryRemoveCartProduct);
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


    async addProductsToCart() {
        // Locate the "Add to cart" buttons
        const addFirstAndSecondProductsToCart = this.page.locator(jewelryAddCartProduct);

        // Click the first product's "Add to cart" button
        await addFirstAndSecondProductsToCart.nth(0).click();

        // Wait for the confirmation of the first product being added to the cart
        const popupMessage1 = this.page.locator(jewelryPopupMsg);
        await popupMessage1.waitFor({ state: "visible" });

        // Click the second product's "Add to cart" button
        await addFirstAndSecondProductsToCart.nth(1).click();

        // Wait for the confirmation of the second product being added to the cart
        const popupMessage2 = this.page.locator(jewelryPopupMsg);
        await popupMessage2.waitFor({ state: "visible" });

        // adding multiple quantity of product

        const multiProduct = this.page.locator(jewelryMultiProduct);
        await multiProduct.click();

        const multiProductQty = this.page.locator(jewelryMultiProductQty)
        await multiProductQty.fill(quantity.value);

        const addMultiProduct = this.page.locator(jewelryAddMultitProduct);
        await addMultiProduct.click();

        const popupMessage3 = this.page.locator(jewelryPopupMsg);
        await popupMessage3.waitFor({ state: "visible" });

        // closing the carts
        const closeButton = this.page.locator(jewelryCloseCart);
        await closeButton.click();

        const cartIcon = this.page.locator(jewelryCartIcon);
        await cartIcon.hover();
        await cartIcon.click();
    }
}