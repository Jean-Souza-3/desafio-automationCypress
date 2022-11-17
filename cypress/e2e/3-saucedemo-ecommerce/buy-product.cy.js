/// <reference types="cypress" />

import LoginPage from '../pages/loginPage'

import { faker } from '@faker-js/faker'

describe('Saucedemo - NextQA', () => {
  beforeEach(() => {

    cy.visit('/')
    cy.fixture('./dados-login.json').as('dados')
  })

  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const postalCode = faker.phone.number()

  it('Realizar a compra de um produto com sucesso', () => {

    cy.get('@dados').then((dados) => {

      LoginPage.login(dados.valid.user, dados.valid.password)
  })

    cy.get('.title').contains('Products')

    cy.get('[id=add-to-cart-sauce-labs-onesie]').click()
    cy.get('[id=shopping_cart_container]').click()

    cy.get('[id=checkout]').click()
    cy.get('[id=first-name]').type(firstName)
    cy.get('[id=last-name]').type(lastName)
    cy.get('[id=postal-code]').type(postalCode)
    cy.get('[id=continue]').click()
    cy.get('[id=finish]').click()
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })
})