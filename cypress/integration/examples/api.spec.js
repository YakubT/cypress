describe('Api testing of fake api', () => {
    it('Get method', () => {
        cy.request('http://localhost:3000/students/1').its('body').then(body => {
            expect(body.fullname == "Anatolii Yakubyshyn");
        })
    });
    it('Post method', () => {
        cy.request({
            url: 'http://localhost:3000/students',
            method: 'POST',
            body: {
                group: "KP-12",
                fullname: "Gavrysh Oleksii"
            }
        }).its('status').then((status) => status === 200 || status === 201);
    });
    it('Delete method',() => {
        cy.request({
            url: 'http://localhost:3000/students/2',
            method: 'DELETE',
        });
    })
})