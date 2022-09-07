describe( 'Main Page', ( ) => {
  beforeEach( ( ) => {
    cy.intercept(
        'GET',
        'http://localhost:3001/api/v1/tricks',
        {
          statusCode: 201, 
          fixtures: 'tricks.json'
        }
    )
    cy.visit( 'http://localhost:3000/' )
  } );

  it( 'Should show the user on the Main Page', ( ) => {
    cy.contains( 'Sick Trick Wish List' )
  } );

  it( 'Should show a form container', ( ) => {
    cy.get('.form-container')
  } );

  it( 'Should show three tricks on the page', ( ) => {
    cy.get('.trick-card-container')
    .should( 'exist', '.trick-card' )
    .should( 'exist', '.trick-card' )
    .should( 'exist', '.trick-card' )
  } )

} );