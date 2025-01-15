import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/addToCart-test-data.json"

/*test.use({
    browserName: "chromium" // how to run in different browser
}) */
const email = "ela12@gmail.com";
const password = "123456";

test.describe("Page object test demo", async () => {


    test("Register test_01", async ({ page, registrationPage }) => {

        // const register = new RegistrationPage(page);
        await page.goto("https://test460.nop-station.com/en/register?returnUrl=%2Fen%2F");

        await registrationPage.enterFirstName(data.firstname);
        await registrationPage.enterLasttName(data.lastname);
        await registrationPage.enterEmail(email);
        await registrationPage.enterCompanyDetails("");
        await registrationPage.enterOptions();
        await registrationPage.enterPassword(password);
        await registrationPage.enterConfirmPassword(password);
        await registrationPage.clickRegister();

    })

    test("Login test_02", async ({ page, loginPage }) => {
        //const login = new LoginPage(page);
        await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");

        await loginPage.enterEmail(email);
        await loginPage.enterPassword(password);
        await loginPage.checkedRememberMe();
        await loginPage.clickLogin();
    })

    test("Add to cart test_03", async ({ page, loginPage, homePage, jewelry }) => {
        //const login = new LoginPage(page);
        //const homepage = new HomePage(page);
        //const books = new Books(page);

        await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
        await loginPage.login(email, password);
        await jewelry.clearCart();

        await homePage.clickOnBooks();
        await jewelry.addFirstAndSecondProductsToCart();
    })

    test.only("Checkout test_04", async ({ page, loginPage, homePage, jewelry, checkout }) => {

        await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
        await loginPage.login(email, password);
        await loginPage.verifySuccessfulLogin();

        await jewelry.clearCart(); 

        await homePage.clickOnBooks();
        await jewelry.addFirstAndSecondProductsToCart();

        await checkout.verifyBillingAddress();
        await checkout.enterFirstName("");
        await checkout.enterLastName("");
        await checkout.enterEmail("");
        await checkout.enterCompanyName("");
        await checkout.enterCountryName(data.country);
        await checkout.enterStateName(data.state);
        await checkout.enterCityName(data.city);
        await checkout.enterAddress1(data.address1);
        await checkout.enterAddress2("");
        await checkout.enterZip(data.zipcode);
        await checkout.enterPhoneNo(data.phone);
        await checkout.enterFaxNo("");

        await checkout.clickNext();

        await checkout.verifyShippingMethod();
        await checkout.clickNext2();

        await checkout.verifyPaymentMethod();
        await checkout.clickNext3();

        await checkout.verifyPaymentInfo();
        await checkout.clickNext4();

        await checkout.verifyConfirmOrder();
        await checkout.clickConfirmOrder();
        await checkout.verifyThankYouMessage();
        await checkout.clickConfirmOrderDetailsLink();

    })

})