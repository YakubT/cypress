describe('Api testing of schedule kpi', () => {
    it('get group list', () => {
        cy.server();
        cy.request({
            method: 'GET',
            url: 'https://schedule.kpi.ua/api/schedule/groups'
        }).as('groups');
        cy.get('@groups').then((xhr) => {
            expect(xhr.status).to.eql(200);
        })
    })
})