import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/* const capabilities = {
  browserName: "Chrome",
  browserVersion: "Latest",
  "LT:Options": {
      platform: "Windows 10",
      build: "Playwright Test from config",
      name: "Playwright Test -1",
      user: 'inowreenb1525',
      accessKey: '42sVE40zbIIggC9ANJBiMyPvyZcdQVfcguuPJzVkbcv1PD7iO7',
      network: true,
      video: true,
      console: true,
      tunnel: false,
      tunnelName: "",
      geoLocation: '',
  },
};  */

const config: PlaywrightTestConfig = {
  timeout: 60 * 1000 * 5, // Set global timeout to 5 minutes (300000 ms)

  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"], // Ensure correct casing
      },
    },
    /*
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    */
  ],

  testMatch: ["pomtest/addToCartUsingFixture.test.ts"], // Verify path

  //testMatch: ["pomtest/addToCart.test.ts"], // Verify path

  use: {
   // connectOptions: {
     // wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
    //},


    headless: false,
    screenshot: "on", // "only-on-failure" can be used as well
    video: "retain-on-failure",
    //timeout: 60 * 1000 * 5, // Test-specific timeout, also set to 5 minutes
    launchOptions: {
      slowMo: 1000,
    },
  },

  retries: 0, // Increase retries if needed

  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReporters/jsonReport.json" }],
    ["html", { open: "always" }],
  ],
};

export default config;
