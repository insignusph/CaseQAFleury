import UnidadeElements from '../elements/unidadeElements'
const unidadeElements = new UnidadeElements()
const url = Cypress.config("baseUrl")

class unidadePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de unidades do site
    clicaMenuUnidade() {
        cy.get(unidadeElements.menuUnidades()).contains('Unidades').click()
    }

    //Clica no DropDown de facilidades
    clicaDdFacilidades() {
        cy.get(unidadeElements.ddFacilidades()).click()
    }

    //Seleciona a Facilidade desejadas
    selecionaFacilidade(facilidade) {
        cy.get(unidadeElements.optFacilidades()).contains(facilidade).click()
    }

    //clica em ver detalhes
    clicaVerDetalhes() {
        cy.get(unidadeElements.btnDetalhes()).first().click()
    }
  
    // Verifica se a label tem o nome da Unidade
    visualizarNomeUnidade() {
        cy.get(unidadeElements.nomeUnidade()).should('contain', 'Alameda Jaú')
    }
}

export default unidadePage;