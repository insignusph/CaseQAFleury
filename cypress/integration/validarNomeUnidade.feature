Feature: Validando nome da unidade

Como um usuario desejo saber qual unidade possui as facilidades que mais me atendem

@e2e-test
Scenario: Validando nome da unidade
  Given acesso o site
  When acesso o menu Unidades
  When informo as facilidades desejadas
  |facilidade1                |
  |Bicicletário e vaga verde  |

  When Clico na unidade que contém as facilidades
  Then Devo validar o nome da unidade

  