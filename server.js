const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

async function example() {

// launch browser
let driver = await new Builder().forBrowser("chrome").build();

// navigate to our application
await driver.get("https://lambdatest.github.io/sample-todo-app/")

// add a todo
await driver.findElement(By.id("sampletodotext")).sendKeys("selenium test", Key.RETURN);

// close the browser:
// await driver.quit;

}

example();