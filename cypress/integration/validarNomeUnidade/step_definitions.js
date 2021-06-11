/* global Given, And, Then, When */
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import UnidadePage from '../../support/pageObjects/unidadePage'
const unidadePage = new UnidadePage()


Given(/^acesso o site$/, () => {
    unidadePage.acessarSite();
})

When("acesso o menu Unidades", () => {
    unidadePage.clicaMenuUnidade()
})

When("informo as facilidades desejadas", (dataTable) => {
    dataTable.hashes().forEach(elem =>{
        unidadePage.clicaDdFacilidades()
        unidadePage.selecionaFacilidade(elem.facilidade1)
       
    })
})

When("Clico na unidade que contém as facilidades", () => {
    unidadePage.clicaVerDetalhes();
})


Then("Devo validar o nome da unidade", () => {
    unidadePage.visualizarNomeUnidade();
})