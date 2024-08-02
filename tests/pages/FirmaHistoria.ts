import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class FirmaHistoria{
  readonly page: Page;
    
  readonly analisisPlan: Locator;
  readonly firma: Locator;
  readonly Continuar: Locator;
  readonly guardar: Locator;
  readonly finalizar: Locator;
    
    
constructor(page:Page){
    this.page = page;
    this.analisisPlan = this.page.locator("#analisis-plan");
    this.firma = this.page.getByRole("button", { name: "Firmar Historia" });
    this.Continuar = this.page.getByRole("button", { name: "Aceptar" });
    this.guardar = this.page.getByText("Se ha guardado la información");
    this.finalizar = this.page.getByRole("button", { name: "Continuar" });
}

async firmaHistoria() {
    await this.analisisPlan.fill("Prueba");
    await this.firma.click({ force: true });
    await this.page.waitForTimeout(1000);
    if (await this.Continuar.isVisible()) {
      await this.Continuar.click();
    } else {
      await this.firma.click({ force: true });
    }
    await this.firma.click({ force: true });
    await this.page.waitForTimeout(1000);
    expect(this.guardar).toContainText(
      "Se ha guardado la información en PHC correctamente"
    );
    await this.finalizar.click();
  }
  
}