import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/* const capabilities = {
  browserName: "Chrome",
  browserVersion: "Latest",
  "LT:Options": {
      platform: "Windows 10",
      build: "Playwright Test from config",
      name: "Playwright Test -1",
      user: 'samiajahan1925',
      accessKey: 'fwwEaeD2X89vzCjGEwvrNKcTXsfM5zVjK31211yETZOl8ts7HG',
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
    
    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"],
      },
    },
    
  ],

  testMatch: ["pomtest/addToCartUsingFixture.test.ts"], // Verify path


  use: {
   // connectOptions: {
     // wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
    //},


    headless: false,
    screenshot: "on", // "only-on-failure" can be used as well
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000,
    },
  },

  retries: 1, // Increase retries if needed

  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReporters/jsonReport.json" }],
    ["html", { open: "always" }],
  ],
};

export default config;
