# Testes E2E Cypress 


### Configurando o projeto em sua máquina

1. Abra esta pasta pelo VS Code

2. Ainda no VS Code vá até aba Terminal clique na opção New Terminal

3. Execute o comando
    - npm install

Pronto a instalação está concluída e para rodar o Cypress, basta rodar o comando abaixo:

- npm run test:chrome

Após a execução para conferir o resultado basta clicar no link abaixo, adicionei a Manuela e a Maynna as pessoas com permissões para visualizarem o resultado dos testes.
(https://dashboard.cypress.io/projects/h48p6z)



### Estrutura de diretórios e Arquitetura


* [integration](cypress/integration) - Pasta destinada a agrupar os ***Cenários*** que serão efetivamente executados. O nosso arquivo com os cenários descritos em Gherkin e possuí a extensão 
.fetaure
    - Ex.: validarNomeUnidade.feature

* [validarNomeUnidade](cypress/integration/validarNomeUnidade) - Pasta destinada a agrupar as nossas 
steps definitions. As nossas steps definitions é a forma como o cypress compreende as instruções descritas em nossas features escritas com cucumber
- Ex.: step_definitions.js

* [elements](cypress/support/elements) - Pasta destinada a agrupar as classes de ***Elements***. Cada classe de *elements* representa uma *"Página do sistema"* e seus *"Componentes de tela"* 
    - Ex.: unidadeElements.js ou CuboElements.js


* [testCases](cypress/support/pageObjects) - Pasta destinada a agrupar as classes de ***TestCase***. Cada classe de *Test Case* representa uma ou mais execuções simples de teste (ou seja, um ***Caso de teste***) baseado-se em somente uma *"Página do sistema"* *(Elements)*.
    - Ex.: unidadePage.js