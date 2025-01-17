import { expect, test } from "../fixture/baseFixture";
import * as billingData from "../test-data/billingAddress-test-data.json";
import * as registerData from "../test-data/registration-test-data.json";
import * as loginData from "../test-data/login-test-data.json";

const baseUrl = "https://test460.nop-station.com/en/";

test.describe("Page object test demo", async () => {

    test("Register test_01", async ({ page, registrationPage }) => {
        // const register = new RegistrationPage(page);
        await page.goto(baseUrl);

        await registrationPage.clickRegiterInit();

        await registrationPage.enterGender();
        await registrationPage.enterFirstName(registerData.firstname);
        await registrationPage.enterLasttName(registerData.lastname);
        await registrationPage.selectDayOfBirth(registerData.dob.day);
        await registrationPage.selectMonthOfBirth(registerData.dob.month);
        await registrationPage.selectYearOfBirth(registerData.dob.year);
        await registrationPage.enterEmail(registerData.email);
        await registrationPage.enterCompanyDetails(registerData.company);
        await registrationPage.newsletter();
        await registrationPage.enterPassword(registerData.password);
        await registrationPage.enterConfirmPassword(registerData.password);
        await registrationPage.clickRegister();
        await registrationPage.verifySuccessfulRegistration();
    })

    test("User able to place order successfully_02", async ({ page, loginPage, homePage, jewelry, checkout }) => {
        await page.goto(baseUrl);

        await loginPage.clickLoginInit();
        await loginPage.login(loginData.email, loginData.password);
        await loginPage.verifySuccessfulLogin();

        await jewelry.clearCart();

        await homePage.clickOnBooks();
        await jewelry.addProductsToCart();
        await checkout.checkoutPage();

        await checkout.verifyBillingAddress();
        await checkout.enterFirstName(billingData.firstname);
        await checkout.enterLastName(billingData.lastname);
        await checkout.enterEmail(billingData.email);
        await checkout.enterCompanyName(billingData.company);
        await checkout.enterCountryName(billingData.country);
        await checkout.enterStateName(billingData.state);
        await checkout.enterCityName(billingData.city);
        await checkout.enterAddress1(billingData.address1);
        await checkout.enterAddress2(billingData.address2);
        await checkout.enterZip(billingData.zipcode);
        await checkout.enterPhoneNo(billingData.phone);
        await checkout.enterFaxNo(billingData.fax);

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
        await checkout.clickConfirmOrderDetails();
    })
})