import { HomePage } from '../../page/home.page';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

Then('Valido que se muestra el producto {string} en los resultados', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    await homePage.validoNombreProducto(producto);
});

Then('Valido que es visible el producto destado {string} del carrusel', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    switch (producto) {
        case "Apple Watch Series 7":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Sony PlayStation 5":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Canon EOS R5":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Microsoft Xbox Series X":
            await homePage.validoProductoCarrusel(producto);
            break;
        case "Sony Alpha a7 III":
            await homePage.validoProductoCarrusel(producto);
            break;
        default:
            throw new Error("Caso no cubierto para el step.")
    }
});

When('Hago click en el producto {string}', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    await homePage.clickProducto();
});

Then('Valido que es visible el producto {string} del carito', async ({ page }, producto) => {
    const homePage = new HomePage(page);
    await homePage.validoProductoCarrito(producto);
});

When('Selecciono el campo de cantidades para agregar 1 unidad mas', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.agregoMasProductos();
});

Then('Valido que es agregada la unidad al pedido', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validoCantidadProductos();
});

When('Hago click en el icono de {string}', async ({ page }, icono) => {
    const homePage = new HomePage(page);
    await homePage.clickIconoEliminar();
});

Then('Valido que fue eliminado el producto del carrito', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validoCarritoVacio();
});