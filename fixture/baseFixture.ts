import {test as baseTest} from "@playwright/test"
import RegistrationPage from "../pages/registrationPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import Jewelry from "../pages/jewelry"
import Checkout from "../pages/checkout"
import { homedir } from "os"

type pages = {
    registrationPage: RegistrationPage;
    loginPage: LoginPage;
    homePage: HomePage;
    jewelry: Jewelry;
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

jewelry: async ({ page }, use) => {
    await use(new Jewelry(page));
},

checkout: async ({ page }, use) => {
    await use(new Checkout(page));
}

})

export const test = testPages;
export const expect = testPages.expect;