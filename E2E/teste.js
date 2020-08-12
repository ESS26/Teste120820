browser.ignoreSynchronization = true;

describe("Cenario", () => {

    it("caso de teste", () => {
        browser.get('https://www.google.com/');

        var PesquisaGoogle = $('[name="q"]');
        PesquisaGoogle.sendKeys("Accenture");
        PesquisaGoogle.submit();

        browser.sleep(5000);
    })


})