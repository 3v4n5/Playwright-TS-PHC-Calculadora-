import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ValidarCalculadora {
  readonly page: Page;
  readonly preguntaRadioButton1: Locator;
  readonly preguntaRadioButton2: Locator;
  readonly si: Locator;
  readonly no: Locator;

  readonly textPreguntaTodos: Locator;

  readonly embarazada: Locator;
  readonly embarazadaRadioButtonSi: Locator;
  readonly embarazadaRadioButtonNo: Locator;
  readonly embarazadaTxtSi: Locator;
  readonly embarazadaTxtNo: Locator;

  readonly modalidadSugeridaInput: Locator;
  readonly modalidadSugeridaLabel: Locator;
  readonly indicacionesUsuarioInput: Locator;
  readonly indicacionesUsuarioLabel: Locator;
  readonly sistemaConsultaInput: Locator;
  readonly sistemaConsultaLabel: Locator;
  readonly sintomaPrincipalInput: Locator;
  readonly sintomaPrincipalLabel: Locator;
  readonly sintomaAsociadoInput: Locator;
  readonly sintomaAsociadoLabel: Locator;


  constructor(page: Page) {
    this.page = page;

    this.preguntaRadioButton1 = this.page.locator("(//label[text()='¿Paciente en condición especial (Anticuagulado, diálisis, Quimioterapia, inmunosuprimido o VIH) y tiene fiebre o signos de infección sistémica o local?']/following::input)[1]");
    this.si = this.page.locator("//body//div[contains(@class,'container ng-scope')]//div[contains(@class,'entryDiv')]//div[contains(@class,'entryDiv')]//div[2]//span[1]//div[2]//span[1]//div[2]//span[1]")
   
    this.preguntaRadioButton2 = this.page.locator(
      "(//label[text()='¿Paciente en condición especial (Anticuagulado, diálisis, Quimioterapia, inmunosuprimido o VIH) y tiene fiebre o signos de infección sistémica o local?']/following::input)[2]"
    );
    this.no = this.page.locator("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(3) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(9) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2) > div:nth-child(3) > span:nth-child(1) > div:nth-child(2) > span:nth-child(1)")

    this.textPreguntaTodos = this.page.locator("//label[text()='¿Paciente en condición especial (Anticuagulado, diálisis, Quimioterapia, inmunosuprimido o VIH) y tiene fiebre o signos de infección sistémica o local?']");

    this.embarazada = this.page.locator("//span[text()='¿Esta embarazada y tiene alguno de los siguientes síntomas?:']");
    this.embarazadaRadioButtonSi = this.page.locator(
      '//*[@id="classificationAttentionERRcalc"]/div/span/span/span/span/span/span/div/div[2]/div/div[1]/span/span/div/div[3]/span/div[2]/span/div[1]/input'
    );
    this.embarazadaRadioButtonNo = this.page.locator(
      '//*[@id="classificationAttentionERRcalc"]/div/span/span/span/span/span/span/div/div[2]/div/div[1]/span/span/div/div[3]/span/div[3]/span/div[1]/input'
    );
    
    this.embarazadaTxtSi = this.page.locator('#classificationAttentionERRcalc').getByText('Si', { exact: true }).nth(1)
    this.embarazadaTxtNo = this.page.locator('#classificationAttentionERRcalc').getByText('No').nth(4);
    this.sistemaConsultaLabel = this.page.locator("//label[text()='Sistema por el cual consulta']");
    this.sistemaConsultaInput = this.page.locator("(//label[text()='Sistema por el cual consulta']/following::input)[1]");

    this.sintomaPrincipalLabel = this.page.locator("//label[text()='¿Cuál es el síntoma principal?']");
    this.sintomaPrincipalInput = this.page.locator("(//label[text()='¿Cuál es el síntoma principal?']/following::input)[1]");

    this.sintomaAsociadoLabel = this.page.locator("//label[text()='¿El síntoma principal está asociado con alguno de los siguientes síntomas o caracteristicas?']");
    this.sintomaAsociadoInput = this.page.locator("(//label[text()='¿El síntoma principal está asociado con alguno de los siguientes síntomas o caracteristicas?']/following::input)[1]")

    this.modalidadSugeridaLabel = this.page.locator("//label[text()='Modalidad sugerida para la atención']");
    this.modalidadSugeridaInput = this.page.locator("(//label[text()='Modalidad sugerida para la atención']/following::input)[1]");

    this.indicacionesUsuarioLabel = this.page.locator("//label[text()='Indicaciones para el usuario']");
    this.indicacionesUsuarioInput = this.page.locator("(//label[text()='Indicaciones para el usuario']/following::input)[1]");

  }

  async condicionEspecialSiTodos(calculadora: string, modalidad: string, indicaciones: string) {
    
    const preguntaTodos = await this.textPreguntaTodos.textContent();
    
    await this.preguntaRadioButton1.click();
    const respuestaSi = await this.si.textContent()
    
    const modalidadTxt = await this.modalidadSugeridaLabel.textContent()
    const modalidadInp = await this.modalidadSugeridaInput.inputValue()
    expect(modalidadInp).toEqual(modalidad)
    
    const indicacionesTxt = await this.indicacionesUsuarioLabel.textContent()
    const indicacionesInp = await this.indicacionesUsuarioInput.inputValue()
    expect(indicacionesInp).toEqual(indicaciones)

    await this.page.screenshot({
      path: "tests/Screenshots/calculadora/calculadora.png",
    });
    
    
    console.log(preguntaTodos);
    console.log("")
    console.log("Respuesta: ",respuestaSi)
    console.log("")
    console.log(modalidadTxt,":",modalidadInp)
    console.log(indicacionesTxt,"       :",indicacionesInp)
    console.log("")
  }

  async condicionEspecialNoEmbarazoSiMujeresEntre9_54(calculadora: string, modalidad: string, indicaciones: string) {
    
    const preguntaTodos = await this.textPreguntaTodos.textContent();
    
    await this.preguntaRadioButton2.click();
    const respuestaNo = await this.no.textContent()

    await this.embarazadaRadioButtonSi.click();

    const embarazadaP = await this.embarazada.textContent()    
    const embarazadaR = await this.embarazadaTxtSi.textContent()

    const modalidadTxt = await this.modalidadSugeridaLabel.textContent()
    const modalidadInp = await this.modalidadSugeridaInput.inputValue()
    expect(modalidadInp).toEqual(modalidad)
    
    const indicacionesTxt = await this.indicacionesUsuarioLabel.textContent()
    const indicacionesInp = await this.indicacionesUsuarioInput.inputValue()
    expect(indicacionesInp).toEqual(indicaciones)

    await this.page.screenshot({
      path: "tests/Screenshots/calculadora/calculadora.png",
    });

    console.log(preguntaTodos);
    console.log("")
    console.log("Respuesta: ", respuestaNo);
    console.log("")
    console.log(embarazadaP)
    console.log("")
    console.log("Respuesta:",embarazadaR)
    console.log("")
    console.log(modalidadTxt,":",modalidadInp)
    console.log(indicacionesTxt,"       :",indicacionesInp)
    console.log("")
  }

  async condicionEspecialNoEmbarazoNoMujeresHombresMayores_9(
    calculadora: string, sistemaConsulta: string, sintomaPpal: string, sintomaAsociado: string, 
    modalidad: string, indicaciones: string ) {
      
      const preguntaTodos = await this.textPreguntaTodos.textContent();
      
      await this.preguntaRadioButton2.click();
      const respuestaNo = await this.no.textContent()
      
      var embarazadaPregunta;
      var embarazadaRespuesta;
      if(await this.embarazadaRadioButtonNo.isVisible()){
        await this.embarazadaRadioButtonNo.click();
         embarazadaPregunta = await this.embarazada.textContent()    
         embarazadaRespuesta = await this.embarazadaTxtNo.textContent() 
      }

      const sistemaConsultaLbl = await this.sistemaConsultaLabel.textContent()
      await this.sistemaConsultaInput.click()
      this.page.getByText(sistemaConsulta, {exact: true}).click()
      await this.page.waitForTimeout(200)
      const sistemaConsultaInp = await this.sistemaConsultaInput.inputValue()
      expect(sistemaConsultaInp).toEqual(sistemaConsulta);

      const sintomaPpalLbl = await this.sintomaPrincipalLabel.textContent();
      await this.sintomaPrincipalInput.click()
      this.page.getByText(sintomaPpal, {exact: true}).click()
      await this.page.waitForTimeout(200)
      const sintomaPpalInp = await this.sintomaPrincipalInput.inputValue();
      expect(sintomaPpalInp).toEqual(sintomaPpal);
      
      var sintomaAsociadoLbl;
      var sintomaAsociadoInp;
      if(await this.sintomaAsociadoLabel.isVisible()){
        sintomaAsociadoLbl = await this.sintomaAsociadoLabel.textContent()
        await this.sintomaAsociadoInput.click()
        await this.page.getByText(sintomaAsociado, {exact:true}).click()
        await this.page.waitForTimeout(200)
        sintomaAsociadoInp = await this.sintomaAsociadoInput.inputValue()
        expect(sintomaAsociadoInp).toEqual(sintomaAsociado);
      }
      
      await this.page.screenshot({path: "tests/Screenshots/calculadora/calculadora.png",});

      const modalidadTxt = await this.modalidadSugeridaLabel.textContent()
      const modalidadInp = await this.modalidadSugeridaInput.inputValue()
      expect(modalidadInp).toEqual(modalidad)

      const indicacionesTxt = await this.indicacionesUsuarioLabel.textContent()
      const indicacionesInp = await this.indicacionesUsuarioInput.inputValue()
      expect(indicacionesInp).toEqual(indicaciones)
        
        console.log(preguntaTodos);
        console.log("")
        console.log("Respuesta: ", respuestaNo);
        console.log("")
        if(embarazadaPregunta) console.log(embarazadaPregunta), console.log("") 
        if(embarazadaRespuesta) console.log("Respuesta: ", embarazadaRespuesta), console.log("")
        console.log(sistemaConsultaLbl,":",sistemaConsultaInp)
        console.log("")
        console.log(sintomaPpalLbl,":",sintomaPpalInp)
        console.log("")
        if(sintomaAsociadoLbl && sintomaAsociadoInp){
          console.log(sintomaAsociadoLbl,":",sintomaAsociadoInp)
        }else{console.log("Sin Modificador")}
        console.log("")
        console.log(modalidadTxt,":",modalidadInp)
        console.log(indicacionesTxt,"       :",indicacionesInp)
        console.log("")
  }

  async condicionEspecialNoMujeresHombresMenores_9(
    calculadora: string, sistemaConsulta: string, sintomaPpal: string,
     sintomaAsociado: string, modalidad: string, indicaciones: string ) {
      
      const preguntaTodos = await this.textPreguntaTodos.textContent();
      
      await this.preguntaRadioButton2.click();
      const respuestaNo = await this.no.textContent()

      const sistemaConsultaLbl = await this.sistemaConsultaLabel.textContent()
      await this.sistemaConsultaInput.click()
      this.page.getByText(sistemaConsulta, {exact: true}).click()
      await this.page.waitForTimeout(200)
      const sistemaConsultaInp = await this.sistemaConsultaInput.inputValue()
      expect(sistemaConsultaInp).toEqual(sistemaConsulta)

      const sintomaPpalLbl = await this.sintomaPrincipalLabel.textContent();
      await this.sintomaPrincipalInput.click()
      this.page.getByText(sintomaPpal, {exact: true}).click()
      await this.page.waitForTimeout(200)
      const sintomaPpalInp = await this.sintomaPrincipalInput.inputValue();
      expect(sintomaPpalInp).toEqual(sintomaPpal)
      
      var sintomaAsociadoLbl;
      var sintomaAsociadoInp;
      if(await this.sintomaAsociadoLabel.isVisible()){
        sintomaAsociadoLbl = await this.sintomaAsociadoLabel.textContent()
        await this.sintomaAsociadoInput.click()
        await this.page.getByText(sintomaAsociado, {exact:true}).click()
        await this.page.waitForTimeout(200)
        sintomaAsociadoInp = await this.sintomaAsociadoInput.inputValue()
        expect(sintomaAsociadoInp).toEqual(sintomaAsociado);
      }
     
      await this.page.screenshot({
        path: "tests/Screenshots/calculadora/calculadora.png",
      });

      const modalidadTxt = await this.modalidadSugeridaLabel.textContent()
      const modalidadInp = await this.modalidadSugeridaInput.inputValue()
      expect(modalidadInp).toEqual(modalidad)

      const indicacionesTxt = await this.indicacionesUsuarioLabel.textContent()
      const indicacionesInp = await this.indicacionesUsuarioInput.inputValue()
      expect(indicacionesInp).toEqual(indicaciones)

        console.log("")
        console.log(preguntaTodos);
        console.log("")
        console.log("Respuesta: ", respuestaNo);
        console.log("")
        console.log(sistemaConsultaLbl,":",sistemaConsultaInp)
        console.log("")
        console.log(sintomaPpalLbl,":",sintomaPpalInp)
        console.log("")
        if(sintomaAsociadoLbl && sintomaAsociadoInp){
          console.log(sintomaAsociadoLbl,":",sintomaAsociadoInp)
        }else{console.log("Sin Modificador")}
        console.log("")
        console.log("")
        console.log(modalidadTxt,":",modalidadInp)
        console.log(indicacionesTxt,"       :",indicacionesInp)
        console.log("")
  }

  // async calculadoraNoHombresMujeresMenores9Mayores54(
  //   calculadora: string, sistemaConsulta: string, sintomaPpal: string,
  //    sintomaAsociado: string, modalidad: string, indicaciones: string ) {
      
  //     await this.page.locator(this.buscar).click();
  //     await this.page.locator(this.seleccionarCalculadora).click();
  //     const msj = await this.page.locator(this.encabezadoSeccionCalculadora).textContent();
  //     expect(msj).toEqual("Clasificación de atención médica domiciliaria ERR     ");
      
  //     const textoInformativo = await this.textoInformativo.textContent();
  //     const preguntaTodos = await this.textPreguntaTodos.textContent();
      
  //     await this.preguntaRadioButton2.click();
  //     const respuestaNo = await this.no.textContent()

  //     const sistemaConsultaLbl = await this.sistemaConsultaLabel.textContent()
  //     await this.sistemaConsultaInput.click()
  //     this.page.getByText(sistemaConsulta, {exact: true}).click()
  //     await this.page.waitForTimeout(1000)
  //     const sistemaConsultaInp = await this.sistemaConsultaInput.inputValue()
  //     expect(sistemaConsultaInp).toEqual(sistemaConsulta)

  //     const sintomaPpalLbl = await this.sintomaPrincipalLabel.textContent();
  //     await this.sintomaPrincipalInput.click()
  //     this.page.getByText(sintomaPpal, {exact: true}).click()
  //     await this.page.waitForTimeout(1000)
  //     const sintomaPpalInp = await this.sintomaPrincipalInput.inputValue();
  //     expect(sintomaPpalInp).toEqual(sintomaPpal)
      
  //     if(await this.sintomaAsociadoLabel.isVisible()){
  //       await this.sintomaAsociadoInput.click()
  //       this.page.getByText(sintomaAsociado, {exact:true}).click()
  //       await this.page.waitForTimeout(1000)
  //     }
      
  //     const sintomaAsociadoLbl = await this.sintomaAsociadoLabel.textContent();
  //     const sintomaAsociadoInp = await this.sintomaAsociadoInput.inputValue();
  //     expect(sintomaAsociadoInp).toEqual(sintomaAsociado)
     
  //     const modalidadTxt = await this.modalidadSugeridaLabel.textContent()
  //       await this.page.screenshot({path: "tests/Screenshots/calculadora/calculadora.png"});
  //     const modalidadInp = await this.modalidadSugeridaInput.inputValue()
  //     expect(modalidadInp).toEqual(modalidad)

  //     const indicacionesTxt = await this.indicacionesUsuarioLabel.textContent()
  //     const indicacionesInp = await this.indicacionesUsuarioInput.inputValue()
  //     expect(indicacionesInp).toEqual(indicaciones)

  //       console.log("Evaluación del riesgo: " + msj);
  //       console.log("");  
  //       console.log(textoInformativo);
  //       console.log("")
  //       console.log(preguntaTodos);
  //       console.log("")
  //       console.log("Respuesta: ", respuestaNo);
  //       console.log("")
  //       console.log(sistemaConsultaLbl,":",sistemaConsultaInp)
  //       console.log("")
  //       console.log(sintomaPpalLbl,":",sintomaPpalInp)
  //       console.log("")
  //       console.log(sintomaAsociadoLbl,":",sintomaAsociadoInp)
  //       console.log("")
  //       console.log("")
  //       console.log(modalidadTxt,":",modalidadInp)
  //       console.log(indicacionesTxt,"       :",indicacionesInp)
  //       console.log("")
  // }
  
}
