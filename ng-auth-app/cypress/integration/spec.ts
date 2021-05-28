it('loads auth page', () => {
  cy.visit('/auth');
  cy.contains('Software development NGO for the less privileged.');
});

it('loads home page', () => {
  cy.visit('/home');
  cy.contains('Hello.');
});


