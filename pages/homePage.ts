import { Page } from "@playwright/test";

const homepageToJewelry="//a[contains (text(), 'Jewelry')] ";

export default class HomePage {
  constructor(public page: Page) {}

  async clickOnBooks() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click(homepageToJewelry)
    ])
  }
}