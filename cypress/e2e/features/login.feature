#1 - criar o meu cenário
Feature: Login

Background: Acessar a página de login
  Given que o usuário esteja na página de login

  Scenario: Login com campo de e-mail vazio
    When o usuário clica no botao login
    Then deverá ser validada a mensagem de erro "E-mail inválido."

  Scenario: Login com campo de e-mail inválido
    And preenche o campo email com "andrei.invalido"
    When o usuário clica no botao login
    Then deverá ser validada a mensagem de erro "E-mail inválido."
  
  Scenario: Login com campo de senha vazio
    And preenche o campo email com "andrei.valido@gmail.com"
    When o usuário clica no botao login
    Then deverá ser validada a mensagem de erro "Senha inválida."

  Scenario: Login com campo de senha inválida
    And preenche o campo email com "andrei.valido@gmail.com"
    And preenche o campo senha com "123"
    When o usuário clica no botao login
    Then deverá ser validada a mensagem de erro "Senha inválida."

    Scenario: Login com sucesso
    And preenche o campo email com "andrei.valido@gmail.com"
    And preenche o campo senha com "123456"
    When o usuário clica no botao login
    Then deverá ser validada a mensagem de sucesso
  