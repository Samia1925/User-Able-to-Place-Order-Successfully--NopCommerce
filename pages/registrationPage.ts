import { expect, Page } from "@playwright/test";

const registerInit = "//a[@class='ico-register']";
const registerGender = "//input[@type='radio' and contains(@value, 'F')] ";
const registerFirstName = "//input[@name= 'FirstName']";
const registerLastName = "//input[@name= 'LastName'] ";
const registerDayOfBirth = "//select[@name='DateOfBirthDay']";
const registerMonthOfBirth = "//select[@name='DateOfBirthMonth']";
const registerYearOfBirth = "//select[@name='DateOfBirthYear']";
const registerEmail = "//input[@name='Email'] ";
const registerCompany = "//input[@name='Company'] ";
const registerNewsletter = "//input[@type='checkbox' and @name='Newsletter'] ";
const registerPassword = "//input[@type='password' and @id='Password'] ";
const registerConfirmPassword = "//input[@type='password' and @name='ConfirmPassword'] ";
const registerButton = "//button[@type='submit' and @name='register-button'] ";
const registerVerify = "//div[contains(text(), 'Your registration completed')]";


export default class RegisterPage {

    constructor(public page: Page) {}

    // to click on the register link from base url
    async clickRegiterInit() {
        await this.page.locator(registerInit).click();
    }

    //to choose gender from radio button
    async enterGender() {
        return this.page.locator(registerGender).click();

    }

    // to enter first name
    async enterFirstName(firstname: string) {
        await this.page.locator(registerFirstName).fill(firstname);
    }

    // to enter last name
    async enterLasttName(lastname: string) {
        await this.page.locator(registerLastName).fill(lastname);
    }


    async selectDayOfBirth(day: string) {
        await this.page.selectOption(registerDayOfBirth, { value: day });
    }

    // to select month of birth from dropdown
    async selectMonthOfBirth(month: string) {
        await this.page.selectOption(registerMonthOfBirth, { value: month });
    }

    // to select year of birth from dropdown
    async selectYearOfBirth(year: string) {
        await this.page.selectOption(registerYearOfBirth, { value: year });
    }

    // to enter the email address
    async enterEmail(email: string) {
        await this.page.locator(registerEmail).fill(email);
    }

    // to enter company name
    async enterCompanyDetails(company: string) {
        await this.page.locator(registerCompany).fill(company);
    }

    //  to choose newsletter or not
    async newsletter() {
        return this.page.locator(registerNewsletter);
    }

    // to enter password
    async enterPassword(password: string) {
        await this.page.locator(registerPassword).fill(password);
    }

    //  to confirm password
    async enterConfirmPassword(confirmPassword: string) {
        await this.page.locator(registerConfirmPassword).fill(confirmPassword);
    }

    //  to click on the register button
    async clickRegister() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(registerButton)
        ])

    }

    async verifySuccessfulRegistration() {
        const accountLocator = this.page.locator(registerVerify);

        // Wait for the element to be visible
        if (await accountLocator.isVisible()) {
            const text = await accountLocator.textContent();

            // Check if the text matches the expected value
            if (text?.trim() === "Your registration completed") {
                console.log("Success: User successfully registered.");
            } else {
                console.error(`Error: Expected 'Your registration completed' but found '${text?.trim()}'.`);
            }
        } else {
            console.error("Error: regitration failed, 'Your registration completed' is not visible.");
        }
    }
}
