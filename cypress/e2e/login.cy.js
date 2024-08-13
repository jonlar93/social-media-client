describe('test login', () => {
    beforeEach(() => {
      
      cy.visit('/')
      cy.wait(500)
    })

    
    it('login with valid credentials', () => {
        cy.login()

        cy.getAllLocalStorage().should(() => {
            expect(localStorage.getItem('token')).to.be.a("string")
          })
      })


      it('logout and confirm token is null', () => {
        cy.login()

        cy.getAllLocalStorage().should(() => {
            expect(localStorage.getItem('token')).to.be.a("string")
          })

        cy.get('button[data-auth="logout"]').click()
        cy.getAllLocalStorage().should(() => {
            expect(localStorage.getItem('token')).to.be.null
          })
      })

      it('login with invalid credentials and is shown a message', () => {
        cy.invalidLogin()

        cy.on('window:alert', (text) => {
            expect(text).to.eq('Either your username was not found or your password is incorrect')
          })
      })

})



