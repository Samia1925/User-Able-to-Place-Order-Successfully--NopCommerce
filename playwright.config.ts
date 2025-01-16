import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
  timeout: 60 * 1000 * 5, // Set global timeout to 5 minutes (300000 ms)

  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"], 
      },
    }
    // ,

    // {
    //   name: "edge",
    //   use: {
    //     ...devices["Desktop Edge"],
    //   },
    // },

  ],

  testMatch: ["test/checkout.test.ts"], // Verify path


  use: {
    headless: false,
    screenshot: "on", // "only-on-failure" can be used as well
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000,
    },
  },

  retries: 0, // Increase retries if needed

  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReporters/jsonReport.json" }],
    ["html", { open: "on-failure" }],
  ],
};

export default config;
