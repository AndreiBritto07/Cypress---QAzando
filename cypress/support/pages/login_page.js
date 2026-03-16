// 3 - criar as ações da página home

/// <reference types="cypress" /> 
const elements = {
    buttons: {
        btnLogin: '#btnLogin',
        checkBox: '.form-check-input'       
    },

    fields: {
        inputEmail: '#user',
        inputPassword: '#password'
    },
    messages: {
        error: '.invalid_input',
        successTitle: '.swal2-title',
        successSubTitle: '.swal2-html-container'
    }
};

export default {
    clicarBotaoLogin() {
        cy.get(elements.buttons.btnLogin)
            .click() 
    },

    digitarEmail(email) {
        cy.get(elements.fields.inputEmail)
            .type(email)
    },

    digitarSenha (password) {
        cy.get(elements.fields.inputPassword)
            .type(password)
    },
    checkMsgErro(mensagem) {
        cy.get(elements.messages.error)
            .should('be.visible') //verificar se o elemento está visível
            .should('have.text', mensagem)//verificar se o elemento tem o texto 'Please enter your email'          
    },

    checkMsgSucesso(email) {
        cy.get(elements.messages.successTitle)
            .should('be.visible') //verificar se o elemento está visível
            .should('have.text', 'Login realizado')//verificar se o elemento tem o texto 'Please enter your email' 

        cy.get(elements.messages.successSubTitle)
            .should('be.visible') //verificar se o elemento está visível
            .should('have.text', `Olá, ${email}`)//verificar se o elemento tem o texto 'Please enter your email' 
    },

    clickCheckbox() {
        cy.get(elements.buttons.checkBox).click()
    }

}