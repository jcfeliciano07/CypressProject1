//Handling file upload element
//note: file to attach should be place in fixture folder
/// <reference types="Cypress" />
import 'cypress-file-upload'

describe('File uploads Test Suite', function () {

    it('Single file upload ', function () {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('EQA QAL FG 2021.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    })

it('Single file upload - Rename', function () {

    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('#file-upload').attachFile({ filePath: 'EQA QAL FG 2021.pdf', fileName: 'Testupload.pdf' });
    cy.get('#file-submit').click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

})

it('File upload - drag and drop', function () {

    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('#drag-drop-upload').attachFile("LibraryAPI+(1).docx", { subjectType: 'drag-n-drop' });
    cy.wait(5000);
    cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").contains("LibraryAPI+(1).docx");


})

it('File upload - multiple files', function () {

    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get('#filesToUpload').attachFile(["EQA QAL FG 2021.pdf", "LibraryAPI+(1).docx"]);
    cy.wait(5000);
    cy.get(':nth-child(6) > strong').should('contains.text', 'Files You Selected:');

})

it('File upload - shadow DOM', function () {

    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
    cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile("LibraryAPI+(1).docx");
    cy.wait(5000);
    cy.get('.smart-item-name', { includeShadowDom: true }).contains('LibraryAPI+(1).docx');
    cy.get('.smart-file-upload', { includeShadowDom: true }).click();


})
})
