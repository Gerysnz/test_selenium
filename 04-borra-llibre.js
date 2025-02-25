// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

//.env
require('dotenv').config();
const site_url = process.env.site_url;
const username = process.env.username;
const password = process.env.password;
const book_title = process.env.book_title;

class MyTest extends BaseTest {
    async test() {
       
        await this.driver.get(site_url + "/admin/login/");
        await this.driver.findElement(By.name("username")).sendKeys(username);
        await this.driver.findElement(By.name("password")).sendKeys(password);

        await this.driver.findElement(By.xpath("//input[@value='Iniciar sessió']")).click();
        await this.driver.findElement(By.xpath("//a[text()='Llibres']")).click();

        await this.driver.findElement(By.xpath("//a[text()='"+book_title+"']")).click();
        await this.driver.findElement(By.xpath("//a[contains(@class, 'deletelink')]")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit']")).click();
        await this.driver.sleep(1000);
        await this.driver.findElement(By.xpath("//button[@type='submit']")).click();

        console.log("TEST OK");
    }
}


(async function test_example() {
    const test = new MyTest();
    await test.run();
    console.log("END")
})();