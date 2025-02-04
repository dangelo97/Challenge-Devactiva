const { expect } = require("@playwright/test");

exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;
    this.userNameText = page.locator('#userName-value');
  }

  async validacionNombreUsuario(text) {
    await expect(this.userNameText).toContainText(text);
  }

}

