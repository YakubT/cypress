/// <reference types="cypress" />


describe('GSMARENA', () => {
    it('Menu is present?', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false });
        cy.visit("https://gsmarena.com/");
        cy.xpath("//button[@aria-label='Toggle Navigation']").click();
        cy.xpath("//a[text()='Home']", { timeout: 5000 }).should('be.visible');
    });
});

describe('File upload test', () => {
    beforeEach(() => {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html');
    });
    it('Upload file', () => {
        cy.fixture('img.jpg', 'base64').then((fileContent) => {
            cy.get('input[name=\'userfile\']').upload({
                fileContent,
                fileName: 'EAWeekly.png',
                mimeType: 'image/png'
            },
                {
                    uploadType: 'input'
                }
            );});
})});
