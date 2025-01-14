import {test as baseTest} from "@playwright/test"
import RegistrationPage from "../pages/registrationPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import Books from "../pages/books"
import Checkout from "../pages/checkout"
import { homedir } from "os"



type pages = {
    registrationPage: RegistrationPage;
    loginPage: LoginPage;
    homePage: HomePage;
    books: Books;
    checkout: Checkout
}

const testPages = baseTest.extend<pages>({

registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
},
loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
},

homePage: async ({ page }, use) => {
    await use(new HomePage(page));
},

books: async ({ page }, use) => {
    await use(new Books(page));
},

checkout: async ({ page }, use) => {
    await use(new Checkout(page));
}

})

export const test = testPages;
export const expect = testPages.expect;