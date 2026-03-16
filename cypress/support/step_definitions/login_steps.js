// 2 - transformar o gherkin em métodos do cypress
/// <reference types="cypress" /> 

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home_page"
import loginPage from "../pages/login_page"

const email = "andrei.valido@gmail.com"
const password = "123456"

//Given que o usuário esteja na página de login
Given("que o usuário esteja na página de login", () => {
    homePage.acessaLogin()
});

When("o usuário clica no botao login", () => {
    loginPage.clicarBotaoLogin()
});

When("preenche o campo email com {string}", (email) => {
    loginPage.digitarEmail(email)
});

When("preenche o campo senha com {string}", (password) => {
    loginPage.digitarSenha(password)
});

Then("deverá ser validada a mensagem de erro {string}", (mensagem) => {
    loginPage.checkMsgErro(mensagem)
});

Then("deverá ser validada a mensagem de sucesso", () => {
     loginPage.checkMsgSucesso(email)
});
 
