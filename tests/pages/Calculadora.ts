import { TIMEOUT } from "dns";
import { tap } from "node:test/reporters";
import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class Calculadora {
  readonly page: Page;
  readonly buscar: string;
  readonly encabezadoCalculadora: string;
  readonly encabezadoSeccionCalculadora: string;
  readonly textoInformativo: string;
  readonly textPreguntaTodos: string;
  readonly preguntaRadioButton1: Locator;
  readonly preguntaRadioButton2: Locator;
  readonly modalidadSugeridaInput: string;
  readonly modalidadSugeridaLabel: string;
  readonly indicacionesUsuarioInput: string;
  readonly indicacionesUsuarioLabel: string;
  readonly sistemaConsultaLabel: Locator;
  readonly sistemaConsultaInput: string;
  readonly sintomaPrincipalLabel: string;
  readonly sintomaPrincipalInput: Locator;
  readonly sintomaAsociadoLabel: string;
  readonly sintomaAsociadoInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buscar = "//input[@type='text'] [@placeholder='Buscar...']";

    this.encabezadoCalculadora =
      "//h4[text()='Clasificación de atención médica domiciliaria ERR']";
    this.encabezadoSeccionCalculadora =
      '//h5[contains(text(),"Clasificación de atención médica domiciliaria ERR")]';
    this.textoInformativo =
      "(//span[text()='Cuando tenga varias respuestas posibles, elija la respuesta que refleje mayor gravedad.'])[1]";


  }

  async buscarCalculadora(calculadora: string) {
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.buscar).click();
    await this.page.getByText(calculadora, { exact: true }).click();
  }


}
