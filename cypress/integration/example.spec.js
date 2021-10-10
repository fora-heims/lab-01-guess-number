
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('conatains score table', ()=>{
            cy.get('#wins-losses').should('be.visible');
        });
    });

    describe('user interactions', ()=>{   
        it('wins set to 0 when Reset Score button is clicked', ()=>{
            cy.get('#reset-timer').click();
            cy.get('#wins').should('contain', '0');
        });
    });
});