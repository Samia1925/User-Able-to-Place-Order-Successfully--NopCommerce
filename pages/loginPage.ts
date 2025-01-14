import { Page } from "@playwright/test";

export default class LoginPage{

        constructor(public page: Page){
        }

        async login(email: string, password: string){
            await this.enterEmail("ela12@gmail.com");
            await this.enterPassword(password);
            await this.checkedRememberMe();
            await this.clickLogin();
        }

        async enterEmail(email: string){
        await this.page.locator("//input[@name='Email'] ")
        .type(email);
        }
        async enterPassword(password: string){
        await this.page.locator("//input[@type='password' and @id='Password']")
        .type(password);
        }
        async checkedRememberMe(){
        return this.page.locator("//input[@type='checkbox' and @name='RememberMe'] ")
        }
        async clickLogin(){
        //await this.page.click("//button[@type= 'submit' and @class= 'button-1 login-button'] ")

        await Promise.all([
        this.page.waitForNavigation(),
        this.page.click("//button[@type= 'submit' and @class= 'button-1 login-button'] ")

    ])
        }

    }