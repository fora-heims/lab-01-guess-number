
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('conatains hidden score table', ()=>{
            cy.get('#wins-losses').should('be.hidden');
        });
    });

    describe('user interactions', ()=>{   
        it('score table displayed when Display Score button is clicked', ()=>{
            cy.get('#score-button').click();
            cy.get('#score-button').click();
            cy.get('#wins-losses').should('be.visible');
        });
    });
});