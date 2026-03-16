Feature: Cadastro

Background: Acessar a página de cadastro
  Given que o usuário esteja na página de cadastro

  Scenario: Cadastro com campo nome vazio
    When o usuário clica no botao cadastro
    Then validada a mensagem de erro "O campo nome deve ser prenchido"

Scenario: Cadastro com campo e-mail vazio
    And preenche o campo nome do cadastro com "Andrei Britto"
    When o usuário clica no botao cadastro
    Then validada a mensagem de erro "O campo e-mail deve ser prenchido corretamente"

Scenario: Cadastro com campo de e-mail inválido
    And preenche o campo nome do cadastro com "Andrei Britto"
    And preenche o campo email do cadastro com "andrei.invalido"
    When o usuário clica no botao cadastro
    Then validada a mensagem de erro "O campo e-mail deve ser prenchido corretamente"
  
Scenario: Cadastro com campo de senha vazio
    And preenche o campo nome do cadastro com "Andrei Britto"
    And preenche o campo email do cadastro com "andrei.valido@gmail.com"
    When o usuário clica no botao cadastro
    Then validada a mensagem de erro "O campo senha deve ter pelo menos 6 dígitos"

Scenario: Cadastro com campo de senha inválida
    And preenche o campo nome do cadastro com "Andrei Britto"
    And preenche o campo email do cadastro com "andrei.valido@gmail.com"
    And preenche o campo senha do cadastro com "123"
    When o usuário clica no botao cadastro
    Then validada a mensagem de erro "O campo senha deve ter pelo menos 6 dígitos"

Scenario: Login com sucesso
    And preenche minhas credenciais de cadastro
    When o usuário clica no botao cadastro
    Then validada a mensagem de sucesso do cadastro