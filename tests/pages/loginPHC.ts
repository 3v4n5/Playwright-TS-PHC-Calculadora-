import { Locator, Page } from '@playwright/test';

export class LoginPHC {
    private page: Page;
    private linkEmpleado: Locator;
    private usuario: Locator;
    private contrasenia: Locator;
    private botonLogin: Locator;
    private btnAtenciontemporal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkEmpleado = this.page.getByRole('link', { name: 'Empleado Sura' })
        this.usuario = this.page.locator('#suranetName')
        this.contrasenia = this.page.locator('#suranetPassword')
        this.botonLogin = this.page.getByRole('button', { name: 'Iniciar sesión' })
        this.btnAtenciontemporal = this.page.getByRole('button', { name: 'Aceptar' })
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
        
        if (await this.btnAtenciontemporal.isVisible()) this.btnAtenciontemporal.click()

    }

}