import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class BuscaCalculadora {
  readonly page: Page;
  readonly buscar: string;
  readonly encabezadoSeccionCalculadora: string;
  readonly seleccionarCalculadora: string;
  readonly textoInformativo: string;
  

  constructor(page: Page) {
    this.page = page;
    this.buscar = "#myInput" 
    //"//input[@placeholder='Buscar...']";
    this.encabezadoSeccionCalculadora ='//h5[contains(text(),"Clasificación de atención médica domiciliaria ERR")]';
    this.seleccionarCalculadora = "(//span[@ng-if='option.visible'])[3]";
    this.textoInformativo = "(//span[text()='Cuando tenga varias respuestas posibles, elija la respuesta que refleje mayor gravedad.'])[1]";

  }

  async buscarCalculadora(calculadora: string) {
    await this.page.locator(this.buscar).click();
    await this.page.locator(this.seleccionarCalculadora).click();
    
    const msj = await this.page.locator(this.encabezadoSeccionCalculadora).textContent();
    expect(msj).toEqual("Clasificación de atención médica domiciliaria ERR     ");
  
    const texto = await this.page.locator(this.textoInformativo).textContent();

    console.log("Evaluación del riesgo: " + msj);
    console.log(""); 
    console.log(texto);
    console.log("")
  }


}
