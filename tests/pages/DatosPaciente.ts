import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class DatosPaciente{

  readonly page: Page;

  readonly nombrePaciente: Locator;
  readonly tipoDocumento: Locator;
  readonly numeroDocumento: Locator;
  readonly raza: Locator;
  readonly ocupacion: Locator;
  readonly escolaridad: Locator;
  readonly sexoBiologico: Locator;
  readonly identidadgenero: Locator;
  readonly grupoPoblacion: Locator;
  readonly responsable: Locator;
  readonly parentesco: Locator;
  readonly telefono: Locator;
  readonly acompanante: Locator;
  readonly motivo: Locator;
  readonly asesoriaVirtual: Locator;


constructor(page: Page){
    this.page = page;
    this.nombrePaciente = this.page.locator("//td[contains(@class,'nombrePaciente separadorInformacionPaciente')]");
    this.tipoDocumento = this.page.locator("(//span[@class='labelHistoriaPaciente ng-binding'])[1]");
    this.numeroDocumento = this.page.locator("(//td[@class='separadorInformacionPaciente']//span)[2]");
    this.raza = this.page.locator("select#proc-grupoEtnico");
    this.ocupacion = this.page.locator("input#proc-ocupacion");
    this.escolaridad = this.page.locator("select#proc-escolaridad");
    this.sexoBiologico = this.page.locator(
      "(//select[contains(@class,'select')])[25]"
    );
    this.identidadgenero = this.page.locator(
      "//tbody/tr[6]/td[4]/span[1]/select[1]"
    );
    this.grupoPoblacion = this.page.locator("(//input[@class='isCheck'])[1]");
    this.responsable = this.page.locator("#proc-nombre-responsable");
    this.parentesco = this.page.locator("#proc-parentesco-responsable");
    this.telefono = this.page.locator("#proc-telefono-responsable");
    this.acompanante = this.page.locator(
      "(//input[@id='id_viene_acompanante'])[1]"
    );
    this.motivo = this.page.locator("textarea").nth(1);
    this.asesoriaVirtual = this.page.locator(
      "(//label[text()='¿Paciente solicita asesoría en salud virtual?']/following::input)[2]"
    );
}


    async llenarDatosbasicos(sexo: string, identidad: string) {
    
    const nombre = await this.nombrePaciente.textContent()
    const tipoDoc = await this.tipoDocumento.textContent()
    const documento = await this.numeroDocumento.textContent()
    const fechaActual = new Date()
    console.log(fechaActual)
    console.log("")
    console.log("Nombre:",nombre)
    console.log("Documento, edad, sexo:",tipoDoc,documento)
    console.log("")
    
    await this.raza.selectOption({ value: "2" });
    await this.ocupacion.fill("Ingeniero");
    await this.escolaridad.selectOption({ value: "3" });
    // await this.sexoBiologico.selectOption({ value: sexo });
    // await this.identidadgenero.selectOption({ value: identidad });
    await this.grupoPoblacion.check();
    await this.responsable.fill("Responsable");
    await this.parentesco.selectOption({ value: "3" });
    await this.telefono.fill("321321598");
    await this.acompanante.check();
    await this.motivo.fill("Prueba");
    await this.asesoriaVirtual.check({ force: true });
  }
}


