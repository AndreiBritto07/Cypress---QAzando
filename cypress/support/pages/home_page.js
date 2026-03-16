// 3 - criar as ações da página home

/// <reference types="cypress" /> 

export default{
    acessaLogin(){
        cy.visit('/')
            .get('#top_header')
            
            cy.get('.fa-user')
                .click()
        
    },

    acessaCadastro(){
        cy.visit('/')
            .get('#top_header')
            
            cy.get('.fa-lock')
                .click()
        
    }

}