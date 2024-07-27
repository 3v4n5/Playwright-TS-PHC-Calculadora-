import { Locator, Page } from '@playwright/test';

export class LoginPHC {
    private linkEmpleado: Locator;
    private usuario: Locator;
    private contrasenia: Locator;
    private botonLogin: Locator;
    private cerrarX: Locator;
    private btnAtenciontemporal: Locator;

    constructor(page: Page) {
        this.linkEmpleado = page.getByRole('link', { name: 'Empleado Sura' })
        this.usuario = page.locator('#suranetName')
        this.contrasenia = page.locator('#suranetPassword')
        this.botonLogin = page.getByRole('button', { name: 'Iniciar sesión' })
        this.cerrarX = page.getByRole('link', { name: 'X' })
        this.btnAtenciontemporal = page.getByRole('button', { name: 'Aceptar' })
    }

    async nuevoLoginPHC(usuario: string, contrasenia: string) {
        if (await this.linkEmpleado.isEnabled()) {
            await this.linkEmpleado.click()
        }
        else {
            throw new Error('No se encuentra Login Revisar ambiente PHC')
        }
        await this.usuario.fill(usuario);
        await this.contrasenia.fill(contrasenia);
        await this.botonLogin.click()
        await this.cerrarX.click();

        if (await this.btnAtenciontemporal.isVisible()) this.btnAtenciontemporal.click()

    }

}