import { Locator, Page } from '@playwright/test';

export class AtencionPHC {
    private page: Page;
    private abrirBuscar: Locator;
    private tipoDocumento: Locator;
    private inputPaciente: Locator;
    private btnBuscar: Locator;
    private btnAtender: Locator;
    private seleccionarAtencion: Locator;
    private seleccionarPlan: Locator;
    private btnIniciarAtencion: Locator;
    private btnIniciarRegistro: Locator;
    private btnAceptarRemision: Locator;
    private btnAbrirRemisiones: Locator;
    private btnSinRemision: Locator;
    private btnAceptarSinRemision: Locator;
    private btnSinDerechos: Locator;
    private btnConsentInform: Locator;
    private btnRemisionesSLW: Locator;

    constructor(page: Page) {
        this.page = page;
        this.abrirBuscar = page.locator('#btnOpenFinder')
        this.tipoDocumento = page.locator("//select[@ng-model='typeIdentification']")
        this.inputPaciente = page.locator('input[name="identificacion"]')
        this.btnBuscar = page.locator('//button[normalize-space()="Buscar paciente"]')
        this.btnAtender = page.locator("//img[@title='Atender']")

        this.seleccionarAtencion = page.locator(
          "input[placeholder='Escribe para filtrar las atenciones...']"
        );
        this.seleccionarPlan = page.locator("//td[@class='width-80']//select[1]")

        this.btnIniciarAtencion = this.page.locator('//*[@id="ng-app"]/div[3]/div/div/span/div[3]/div/button[2]')
        this.btnIniciarRegistro = this.page.locator("//button[text()='Iniciar Registro']");
        this.btnAceptarRemision = this.page.locator("//button[@class='buttonMainAction ng-binding']")
        this.btnAbrirRemisiones = this.page.locator("(//button[@class='buttonExpand btn'])[1]")
        this.btnSinRemision = this.page.locator("//img[@title='Atender sin remisión']")
        this.btnAceptarSinRemision = page.locator("//button[@ng-if='messageButtonVisible']")
        this.btnSinDerechos = this.page.locator("//button[@class='buttonMainAction ng-binding']")
        this.btnConsentInform = this.page.getByRole('button', { name: 'Aceptar' })
        this.btnRemisionesSLW = this.page.locator("//div[@class='modal-footer']//button[1]");
    }

    async iniciarNuevaAtencion(tipoDocumento: string, numeroDocumento: string) {

        await this.abrirBuscar.click()
        await this.tipoDocumento.selectOption({label: tipoDocumento})
        await this.inputPaciente.fill(numeroDocumento)
        await this.btnBuscar.click()
        await this.btnAtender.click();
    }

    async seleccionarTipoAtencion(atencion: string) {
        await this.seleccionarAtencion.click()
        const valorImprimir = await this.page.getByText(atencion, { exact: true }).textContent()
        await this.page.getByText(atencion, { exact: true }).click()

        console.log('')
        console.log('Atencion:', valorImprimir)
        console.log('------------------------------------------------------------------')
        console.log('')
    }

    async seleccionarTipoPlan(plan: string) {
        await this.seleccionarPlan.selectOption({ value: plan })
        await this.btnIniciarAtencion.click()
        
        await this.page.waitForTimeout(500)

        // if(this.btnRemisionesSLW) this.btnRemisionesSLW.click()
         
        //     await this.page.waitForTimeout(200)

        if(await this.btnConsentInform.isVisible()){await this.btnConsentInform.click()} 

        await this.btnIniciarRegistro.click()

        // if(this.btnAceptarRemision){
        //     const botones = [
        //         this.btnAceptarRemision,
        //         this.btnAbrirRemisiones,
        //         this.btnSinRemision,
        //         this.btnAceptarSinRemision,
        //         this.btnSinDerechos,
        //     ]

        //     for (const selector of botones) {
        //         if (await selector.isVisible()) await selector.click()
        //     }
        // }else{
        //     await this.btnIniciarRegistro.click()
        // }
    }

    async btnVisibleEspecialidad() {
        
    }
} 