import { expect, Page } from "@playwright/test";
// import 


export default class RegisterPage {

    constructor(public page: Page) {

    }

    // to click on the register link from base url
    async clickRegiterInit() {
        await this.page.locator("//a[@class='ico-register']").click();
    }

    //to choose gender from radio button
    async enterGender() {
        return this.page.locator("//input[@type='radio' and contains(@value, 'F')] ").click();

    }

    // to enter first name
    async enterFirstName(firstname: string) {
        await this.page.locator("//input[@name= 'FirstName']")
            .type(firstname);
    }

    // to enter last name
    async enterLasttName(lastname: string) {
        await this.page.locator("//input[@name= 'LastName'] ")
            .type(lastname);
    }

   
    async selectDayOfBirth(day: string) {
        await this.page.selectOption("//select[@name='DateOfBirthDay']", { value: day });
    }

    // to select month of birth from dropdown
    async selectMonthOfBirth(month: string) {
        await this.page.selectOption("//select[@name='DateOfBirthMonth']", { value: month });
    }

    // to select year of birth from dropdown
    async selectYearOfBirth(year: string) {
        await this.page.selectOption("//select[@name='DateOfBirthYear']", { value: year });
    }

    // to enter the email address
    async enterEmail(email: string) {
        await this.page.locator("//input[@name='Email'] ")
            .type(email);
    }

    // to enter company name
    async enterCompanyDetails(company: string) {
        await this.page.locator("//input[@name='Company'] ")
            .type(company);
    }

    //  to choose newsletter or not
    async newsletter() {
        return this.page.locator("//input[@type='checkbox' and @name='Newsletter'] ")
    }

    // to enter password
    async enterPassword(password: string) {
        await this.page.locator("//input[@type='password' and @id='Password'] ")
            .type(password);
    }

    //  to confirm password
    async enterConfirmPassword(password: string) {
        await this.page.locator("//input[@type='password' and @name='ConfirmPassword'] ")
            .type(password);
    }

    //  to click on the register button
    async clickRegister() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("//button[@type='submit' and @name='register-button'] ")
        ])

    }


}
