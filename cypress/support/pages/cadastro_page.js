// 3 - criar as ações da página home

const elements = {
    buttons: {
        btnRegister: '#btnRegister',        
    },

    fields: {
        inputName: '#user',
        inputEmail: '#email',
        inputPassword: '#passwords'
    },
    messages: {
        error: '.errorLabel',
        successTitle: '.swal2-title',
        successSubTitle: '.swal2-html-container'
    }
};

export default {
    clicarBotaoCadastrar() {
        cy.get(elements.buttons.btnRegister)
            .click() 
    },

    digitarNome(name) {
        cy.get(elements.fields.inputName)
            .type(name)
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

    checkMsgSucesso(name) {
        cy.get(elements.messages.successTitle)
            .should('be.visible') //verificar se o elemento está visível
            .should('have.text', 'Cadastro realizado!')//verificar se o elemento tem o texto 'Please enter your email' 

        cy.get(elements.messages.successSubTitle)
            .should('be.visible') //verificar se o elemento está visível
            .should('have.text', 'Bem-vindo ' + name)//verificar se o elemento tem o texto 'Please enter your email' 
    },

}