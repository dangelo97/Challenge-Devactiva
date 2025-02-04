exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('#login');
        this.usernameField = page.locator('#userName');
        this.passwordField = page.locator('#password');
    }

    async clickLogin() {
        await this.loginButton.click({ force: true });
    }

    async ingresoUsername(nombre) {
        await this.usernameField.click();
        await this.usernameField.fill(nombre)
    }

    async ingresoPassword(nombre) {
        await this.passwordField.click();
        await this.passwordField.fill(nombre)
    }
    
}