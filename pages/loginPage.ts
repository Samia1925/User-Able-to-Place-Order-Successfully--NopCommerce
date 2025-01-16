import { expect, Page } from "@playwright/test";

const loginInit="//a[@class='ico-login']";
const loginEmail="//input[@name='Email'] ";
const loginPassword="//input[@type='password' and @id='Password']";
const loginRememberMe="//input[@type='checkbox' and @name='RememberMe'] ";
const loginButton="//button[@type= 'submit' and @class= 'button-1 login-button'] ";
const loginVeify="//a[@class='ico-account']";

export default class LoginPage {

    constructor(public page: Page) {}

    // to click on the login link from base url
    async clickLoginInit() {
        await this.page.locator(loginInit).click();
    }

    async login(email: string, password: string) {
        await this.enterEmail("ela12@gmail.com");
        await this.enterPassword(password);
        await this.checkedRememberMe();
        await this.clickLogin();
    }

    async enterEmail(email: string) {
        await this.page.locator(loginEmail).type(email);
    }
    async enterPassword(password: string) {
        await this.page.locator(loginPassword).type(password);
    }
    async checkedRememberMe() {
        return this.page.locator(loginRememberMe)
    }
    async clickLogin() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(loginButton)
        ])
    }

    async verifySuccessfulLogin() {
        const accountLocator = this.page.locator(loginVeify);
        
        // Wait for the element to be visible
        if (await accountLocator.isVisible()) {
            const text = await accountLocator.textContent();
    
            // Check if the text matches the expected value
            if (text?.trim() === "My account") {
                console.log("Success: User successfully logged in.");
            } else {
                console.error(`Error: Expected 'My account' but found '${text?.trim()}'.`);
            }
        } else {
            console.error("Error: Login failed, 'My account' link is not visible.");
        }
    }
}