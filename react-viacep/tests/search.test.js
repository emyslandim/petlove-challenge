const timeout = 20000;

beforeAll(async() => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
});

afterEach(async() => {
    await page.waitFor(2000);
})
describe("Testing interface of the page", () => {
    test("Should get the title of the page", async() => {
        const title = await page.title();

        expect(title).toBe("Busca CEP");
    }, timeout);

    test("Should get a success cep", async() => {
        await page.type('.input-cep', '03210001')
        await page.click('.button-search')
        await page.waitForSelector('.box-info p')
        const response = await page.evaluate(el => el.innerHTML, await page.$('.box-info p strong'));
        expect(response).toBe("CEP: ")
    }, timeout);

    test("Should get a error because of the lenth of the cep", async() => {
        await page.evaluate(() => document.querySelector(".input-cep").value = "")
        await page.type('.input-cep', '03210')
        await page.click('.button-search')
        await page.waitForSelector('.box-info p')
        const response = await page.evaluate(el => el.innerHTML, await page.$('.box-info p strong'));
        expect(response).toBe("Digite um CEP válido!")
    }, timeout);

    test("Should get a error because the cep does not exist", async() => {
        await page.evaluate(() => document.querySelector(".input-cep").value = "")
        await page.type('.input-cep', '03210002')
        await page.click('.button-search')
        await page.waitForSelector('.box-info p')
        const response = await page.evaluate(el => el.innerHTML, await page.$('.box-info p strong'));
        expect(response).toBe("Digite um CEP válido!")
    }, timeout);

    test("Should show that the input still empty after typing letters", async() => {
        await page.evaluate(() => document.querySelector(".input-cep").value = "")
        await page.type('.input-cep', 'zzz')
        const response = await page.evaluate(el => el.value, await page.$('.input-cep'));
        expect(response).toBe("_____-___")
    }, timeout);

});