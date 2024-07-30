import { defineConfig } from "playwright/test";
import { OrtoniReportConfig } from 'ortoni-report';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const reportConfig: OrtoniReportConfig = {
  //logo: "path/logo.png",
  authorName: "Evans",
  base64Image: false,
  preferredTheme: "dark",
  projectName: "Calculadora Clasificación de atención médica domiciliaria ERR ",
  testType: "Automatico E2E"
}

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  
  reporter: [["html"],['dot']],
  //reporter: [['ortoni-report', reportConfig], ['dot']], 
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    headless: true, //visualizar pruebas en navegadores
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: "off", //graba video dela prueba
    screenshot: "off",
  },
  // expect: {
  //   timeout: 10 * 1000, // 10 segundos (ajusta según tus necesidades)
  // },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "chromium",
    //   use: {
    //     browserName: "chromium",
    //     viewport: { width: 1420, height: 900 },
    //   },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: "Google Chrome",
    //   use: {
    //     channel: "chrome",
    //     launchOptions: {
    //       args: ["--ignore-certificate-errors"],
    //     },
    //     viewport: { width: 1420, height: 900 },
    //   },
    // },
    {
      name: "chrome web",
      use: {
        browserName: "chromium",
        launchOptions: {
          //args: ['--ignore-certificate-errors']
        },
        viewport: { width: 1420, height: 900 },
        //baseURL: BASEURL,
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
