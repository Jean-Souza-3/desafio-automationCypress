/// <reference types="cypress" />

import LoginPage from '../pages/loginPage'

describe('Saucedemo - Login - NextQA', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.fixture('./dados-login.json').as('dados')
    })

    it('Realizar login com sucesso', () => {

        cy.get('@dados').then((dados) => {

            LoginPage.login(dados.valid.user, dados.valid.password)
        })
        cy.get('.title').contains('Products')
    })

    it('Validar login com senha inválida', () => {

        cy.get('@dados').then((dados) => {

            LoginPage.login(dados.valid.user, dados.invalid.password)
        })
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.get('.title').contains('Products')
    })
})