import { test } from "@playwright/test";
import { BaseUrl, Atencion, Credenciales, Calculadoras } from "./Data/Variables";
import { LoginPHC } from "./pages/loginPHC";
import { AtencionPHC } from "./pages/AtencionPHC";
import { FirmaAtencion } from "./pages/FirmaAtencion";

test.describe.parallel("Test Calculadora ERR", () => {
  
  test.beforeEach(async ({ page }) => {
    const login = new LoginPHC(page);
    //const atencion = new AtencionPHC(page);

    await test.step(" Login ", async () => {
      await page.waitForTimeout(500)
      await page.goto(BaseUrl.URL_Piloto);
      await login.nuevoLoginPHC(Credenciales.PHCUSER, Credenciales.PHCPASSW);
    });

    await test.step("Atencion", async () => {
      // await atencion.iniciarNuevaAtencion(Atencion.CEDULA); //Atencion.CEDULA
      // await atencion.seleccionarTipoAtencion(Atencion.ATENCION);
      // await atencion.seleccionarTipoPlan(Atencion.PLAN);
    });
  });

  test("ESC-1 Todos Respuesta Condición Especial SI", async ({ page }) => {
    const firma = new FirmaAtencion(page);

    await firma.llenarDatosbasicos(Calculadoras.SEXO, Calculadoras.GENERO);
    await firma.condicionEspecialSiTodos(Calculadoras.CALCULADORA, Calculadoras.MODALIDAD, Calculadoras.INDICACIONES);
    await firma.firmaHistoria();
  });

  test("ESC-2 Mujeres >= 9 < 54 Condición Especial NO, Embarazo SI", async ({ page }) => {
    const firma = new FirmaAtencion(page);

    await firma.llenarDatosbasicos(Calculadoras.SEXO, Calculadoras.GENERO);
    await firma.condicionEspecialNoEmbarazoSiMujeresEntre9_54(Calculadoras.CALCULADORA, Calculadoras.MODALIDAD, Calculadoras.INDICACIONES);
    await firma.firmaHistoria();
  });


  test.only("ESC-3 Mujeres >= 9 Condición Especial NO, Embarazo NO", async ({ page }) => {
      const atencion = new AtencionPHC(page);

      await atencion.iniciarNuevaAtencion('CC','43650277'); //Atencion.NUMERO_DOCUMENTO
      await atencion.seleccionarTipoAtencion(Atencion.ATENCION);
      await atencion.seleccionarTipoPlan(Atencion.PLAN);
    
      const firma = new FirmaAtencion(page);

      await firma.llenarDatosbasicos(Calculadoras.SEXO, Calculadoras.GENERO);
      await firma.condicionEspecialNoEmbarazoNoMujeresHombresMayores_9(
        Calculadoras.CALCULADORA, Calculadoras.SISTEMA_CONSULTA, 
        Calculadoras.SINTOMA_PPAL, Calculadoras.SINTOMA_ASOCIADO, 
        Calculadoras.MODALIDAD, Calculadoras.INDICACIONES);
      await firma.firmaHistoria();

  });

  test.only("ESC-4 Hombres >= 9 Condición Especial NO", async ({ page }) => {
    
    const atencion = new AtencionPHC(page);

      await atencion.iniciarNuevaAtencion('CC','16743572'); //Atencion.NUMERO_DOCUMENTO
      await atencion.seleccionarTipoAtencion(Atencion.ATENCION);
      await atencion.seleccionarTipoPlan(Atencion.PLAN);
    
    const firma = new FirmaAtencion(page);

    await firma.llenarDatosbasicos(Calculadoras.SEXO, Calculadoras.GENERO);
    await firma.condicionEspecialNoEmbarazoNoMujeresHombresMayores_9(
      Calculadoras.CALCULADORA, Calculadoras.SISTEMA_CONSULTA, 
      Calculadoras.SINTOMA_PPAL, Calculadoras.SINTOMA_ASOCIADO, 
      Calculadoras.MODALIDAD, Calculadoras.INDICACIONES);
    await firma.firmaHistoria();

  });


  test("ESC-5 Mujeres < 9 Condición Especial NO", async ({ page }) => {
    
    const atencion = new AtencionPHC(page);

      await atencion.iniciarNuevaAtencion('RC','1046715602'); //Atencion.NUMERO_DOCUMENTO
      await atencion.seleccionarTipoAtencion(Atencion.ATENCION);
      await atencion.seleccionarTipoPlan(Atencion.PLAN);
    const firma = new FirmaAtencion(page);

    await firma.llenarDatosbasicos(Calculadoras.SEXO, Calculadoras.GENERO);
    await firma.condicionEspecialNoMujeresHombresMenores_9(
      Calculadoras.CALCULADORA, Calculadoras.SISTEMA_CONSULTA, 
      Calculadoras.SINTOMA_PPAL, Calculadoras.SINTOMA_ASOCIADO, 
      Calculadoras.MODALIDAD, Calculadoras.INDICACIONES);
    await firma.firmaHistoria();

  });

  test("ESC-6 Hombres < 9 Condición Especial NO", async ({ page }) => {
    const atencion = new AtencionPHC(page);

      await atencion.iniciarNuevaAtencion('CC','1001017270'); //Atencion.NUMERO_DOCUMENTO
      await atencion.seleccionarTipoAtencion(Atencion.ATENCION);
      await atencion.seleccionarTipoPlan(Atencion.PLAN);
    const firma = new FirmaAtencion(page);

    await firma.llenarDatosbasicos(Calculadoras.SEXO, Calculadoras.GENERO);
    await firma.condicionEspecialNoMujeresHombresMenores_9(
      Calculadoras.CALCULADORA, Calculadoras.SISTEMA_CONSULTA, 
      Calculadoras.SINTOMA_PPAL, Calculadoras.SINTOMA_ASOCIADO, 
      Calculadoras.MODALIDAD, Calculadoras.INDICACIONES);
    await firma.firmaHistoria();

  });

  // test("ESC-6 Hombres < 9 > 54 Condición Especial NO", async ({ page }) => {
  //   const firma = new FirmaAtencion(page);

  //   await firma.llenarDatosbasicos(Calculadoras.SEXO, Calculadoras.GENERO);
  //   await firma.calculadoraNoHombresMujeresMenores9Mayores54(
  //     Calculadoras.CALCULADORA, Calculadoras.SISTEMA_CONSULTA, 
  //     Calculadoras.SINTOMA_PPAL, Calculadoras.SINTOMA_ASOCIADO, 
  //     Calculadoras.MODALIDAD, Calculadoras.INDICACIONES);
  //   await firma.firmaHistoria();

  // });
});
