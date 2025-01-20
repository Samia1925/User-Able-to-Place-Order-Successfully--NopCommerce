# **User Able to Place Order Successfully in NopCommerce**

NopCommerce is a widely used e-commerce platform, and ensuring the reliability of critical functions like registration and order placement is essential for maintaining customer trust. Automating these processes reduces manual testing effort and improves accuracy. This project automates the key functionalities of the NopCommerce platform, specifically user registration and order placement processes. Utilizing Playwright, Page Object Model (POM) and Fixture with Typescript, the suite ensures these processes are tested efficiently across multiple operating systems. It ensures robust and reliable testing across multiple browsers, reducing manual effort while improving accuracy.

### Page object models(POM)
Page object models are one such approach to structure your test suite where large test suites can be structured to optimize ease of authoring and maintenance. A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models. Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place and creating reusable code to avoid repetition. The use of POM ensures separation of concerns, making the code modular, readable, and maintainable.  

### Playwright Fixtures
Playwright's built-in fixtures offer core elements like browser instances, contexts, and pages, ensuring that the browser is properly set up and reset. Test fixtures are used to establish the environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, instead of their common setup. 

## **Features:**
1. Automated tests for user registration and order placement.
2. Cross-browser support (eg. Chromium, WebKit).
3. Modular TypeScript code for better maintainability.
4. Fast execution and retries for failed tests.
5. Detailed reporting for each test execution.

## **Technologies Used:**
1. Programming Language: [TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html),
2. Automation Framework: [Playwright](https://playwright.dev/docs/intro),
3. Editor: [Visual Studio Code](https://code.visualstudio.com/download),
4. Package Manager: [npm (Node.js)](https://nodejs.org/en/download),
5. Reporting Tool: [Allure](https://allurereport.org/docs/install-for-windows/) 

## **Installation & Running on your Device**
1. Node.js and Editor installation:
   -Ensure you have Node.js installed. If not then install it from [the site](https://nodejs.org/en/download). After installation to check if node is already installed or not, type “node -v” to check what is the node version.

   ![Screenshot 2025-01-17 104501](https://github.com/user-attachments/assets/5d98ebe4-2b59-4d65-8055-097b3c21f0f4)

Then, run:
   npm install
   -VS code shuld also be installed. If not then install it from [the site](https://code.visualstudio.com/download).

2. Playwright VS code plugins: 
Install “Playwright Test for VSCoc” from VS code extensions. Then type CTRL+SHIFT+P or from tab click View and choose “Command palette”, which will open command palette. Then type “install playwright” there and click the Enter button. It will pop up on such screen like below. Click on “OK”. It will start downloading browser driver.

![Screenshot 2025-01-17 105106](https://github.com/user-attachments/assets/1d433ad3-8e96-4ed0-8d28-2c8ba9443698)

4. Clone the Repository:
   git clone https://github.com/Samia1925/User-Able-to-Place-Order-Successfully--NopCommerce.git
5. Navigate to the Project Directory:
   cd User-Able-to-Place-Order-Successfully--NopCommerce
6. Run Tests: Execute the following command to run the tests:
   npx playwright test
7. Allure report generation:
   
   On terminal run below commands;

   npm install -D allure-commandline

   npx allure generate ./allure-results --clean

   npx allure open ./allure-report
   

## **Output:**
![screenshot (2)](https://github.com/user-attachments/assets/e07e4b68-8658-4424-8a51-b13cff3ca0c2)

![screenshot (3)](https://github.com/user-attachments/assets/be7668fd-217e-4f57-b797-318797aa2e9f)

![screenshot (4)](https://github.com/user-attachments/assets/67e469e5-ab55-4921-8917-00f2c8a38c7a)

## **Allure Report**
![1](https://github.com/user-attachments/assets/45925922-197f-4e43-960e-c015a39dd7ac)

![2](https://github.com/user-attachments/assets/ba7646c8-8cfc-4642-aad0-c06e8fbe1831)

![3](https://github.com/user-attachments/assets/90901a09-bdad-4027-94dd-40b4e7ae6050)

![4](https://github.com/user-attachments/assets/c62779db-943c-483a-ba18-ff76d717ced5)

![5](https://github.com/user-attachments/assets/1262adc9-4e02-499d-817f-4abc37aa4d1d)

![6](https://github.com/user-attachments/assets/962201f3-3a1b-4808-b992-ca317a9b783b)


## Contributing
I welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.
6. Please make sure to update tests as appropriate and adhere to the project's coding standards.

## Contact 
Samia Jahan-
[LinkedIn](https://www.linkedin.com/in/samia-jahan-binte-nour/)-
[github](https://github.com/Samia1925)

## **References:**
   1. [Testing Site](https://test460.nop-station.com/en/)
   2. [Playwright documentation](https://playwright.dev/docs/intro)
   3. [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
