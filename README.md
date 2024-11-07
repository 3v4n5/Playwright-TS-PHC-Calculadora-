# Playwright-TS_PHC_CAlculadora ERR

## Pasos para clonar e instalar un proyecto de Playwright en VSCode

### Prerrequisitos
- Instalar [Node.js](https://nodejs.org/) (versión 12 o superior).
- Instalar [Git](https://git-scm.com/).
- Instalar [Visual Studio Code](https://code.visualstudio.com/).

### Pasos para la instalación

1. **Clonar el repositorio de GitHub**  
   Abre la terminal, navega a la carpeta donde deseas clonar el proyecto y ejecuta:
   
   ```bash
   git clone <url-del-repositorio>

2. **Abrir el proyecto en Visual Studio Code**
   Navega a la carpeta del proyecto y abre VSCode:
   ```bash
   cd nombre-del-proyecto
   code .

3. **Instalar las dependencias del proyecto**
   En VSCode, abre una nueva terminal desde Terminal > New Terminal y asegúrate de estar en la raíz del proyecto. Luego, ejecuta:
   ```bash
   npm install

4. **Instalar Playwright**
   Ejecuta el siguiente comando para instalar los navegadores necesarios y configurar Playwright:
   ```Bash
   npx playwright install

5. **Ejecutar un test de Playwright**
   Para verificar que la configuración funciona correctamente, ejecuta:
   ```Bash
   npx playwright install

##Opcional: Instalar extensión de Playwright en VSCode
   En VSCode, abre la pestaña de Extensiones.
   Busca e instala la extensión Playwright Test for VSCode para ejecutar y depurar tests directamente desde el editor.
