
import 'dotenv/config'

export const config = {
    runner: 'local',

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    protocol: 'https',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 13 Pro',
            'appium:platformVersion': '18.7.1',
            'appium:automationName': 'XCUITest',
            'appium:app': 'storage:filename=LojaEBAC.ipa',

            'sauce:options': {
                appiumVersion: 'appium2-20250901',
                build: 'ebac-store-ios',
                name: 'EBAC Store - Teste iOS'
            }
        }
    ],

    logLevel: 'debug',
    connectionRetryTimeout: 60000,
    connectionRetryCount: 1,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }
}
