/// <reference types="cypress" />

describe('Mapa com as Rotas do Ônibus Linha 5000', () => {
  beforeEach(() => {
    cy.visit('/bus');
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(4) > .btnRoutBus').first().click();
    cy.url().should('include', 'itinerary/5000');
    cy.wait(5000);
  });

  it('Mudar de Tema', () => {
    cy.get('.btnMenuTheme').contains('Tema Claro').click();
    cy.get('.btnMenuTheme').contains('Tema Escuro').click();
    cy.wait(1000);
  });

  it('Ir para rota no Google Maps', () => {
    cy.get(
      '[style="transform: translate(-50%, -50%) translate(351px, 252px) rotateX(0deg) rotateZ(0deg);"] > svg > [fill-rule="nonzero"]'
    )
      .first()
      .click();
    cy.wait(1000);
    cy.get('h6').contains('Ver no Google Maps').click();
    cy.wait(1000);
  });
});
