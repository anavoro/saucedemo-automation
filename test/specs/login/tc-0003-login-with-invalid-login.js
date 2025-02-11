const loginTestPage = require('../../pageobjects/02-logintestpage.js');

describe('Wrong Login application', () => {
    it('should not login with an invalid login', async () => {
     
        await loginTestPage.open();

        await loginTestPage.login('terror_user', 'secret_sauce!');

       
        const errorMessageText = await loginTestPage.errorMessage.getText();  

        
        expect(errorMessageText).toContain('Username and password do not match any user in this service');
    });
});
