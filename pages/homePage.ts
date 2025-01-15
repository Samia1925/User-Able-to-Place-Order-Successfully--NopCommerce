import { Page } from "@playwright/test";

export default class HomePage {

  constructor(public page: Page) {

  }

  async clickOnBooks() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),

      this.page.click("//a[contains (text(), 'Jewelry')] ")
    ])
  }
}