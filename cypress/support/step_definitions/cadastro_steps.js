// 2 - transformar o gherkin em métodos do cypress
/// <reference types="cypress" /> 

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home_page"
import cadastroPage from "../pages/cadastro_page"

const nome = "Andrei Britto"
const email = "andrei.valido@gmail.com"
const password = 123456
//const emailInvalido = "andrei.invalido"
//const passwordInvalida = "123"

Given("que o usuário esteja na página de cadastro", () => {
    homePage.acessaCadastro()
});

When("o usuário clica no botao cadastro", () => {
    cadastroPage.clicarBotaoCadastrar()
});

When("preenche o campo nome do cadastro com {string}", (nome) => {
    cadastroPage.digitarNome(nome)
});

When("preenche o campo email do cadastro com {string}", (email) => {
    cadastroPage.digitarEmail(email)
});

When("preenche o campo senha do cadastro com {string}", (password) => {
    cadastroPage.digitarSenha(password)
});

When("preenche minhas credenciais de cadastro", () => {
    cadastroPage.digitarNome(nome)
    cadastroPage.digitarEmail(email)
    cadastroPage.digitarSenha(password)
});

Then("validada a mensagem de erro {string}", (mensagem) => {
    cadastroPage.checkMsgErro(mensagem)
});

Then("validada a mensagem de sucesso do cadastro", () => {
    cadastroPage.checkMsgSucesso(nome)
});
 