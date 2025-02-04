import { LoginPage } from '../../page/login.page';
import { DashboardPage } from '../../page/dashboard.page';
import { BasePage } from '../../page/base.page';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();
let UserName = 'Dange997';

Given('Navego al sitio', async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.ingresoBaseUrl();
});

When('Hago click en el botón {string}', async ({ page }, boton) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickLogin();
});

When('Relleno el campo {string} con {string}', async ({ page }, campo, texto) => {
    const loginPage = new LoginPage(page);
    switch (campo) {
        case "UserName":
            await loginPage.ingresoUsername(texto);
            break;
        case "Password":
            await loginPage.ingresoPassword(texto);
            break;
        default:
            throw new Error("Caso no cubierto para el step.")
    }
});

Then('Valido que se inicio sesión con exito', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.validacionNombreUsuario(UserName);
});
