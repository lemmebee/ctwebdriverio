const LoginPage = require('../pageobjects/login.page');

describe('Login test suite', () => {

    it('should login with invalid credentials', async () => {

        await LoginPage.open();
        await LoginPage.login('test@test.com', 'ThisIs@T3st');
        await expect(LoginPage.invalidLoginErrorMessage).toBeExisting();
        await expect(LoginPage.invalidLoginErrorMessage).toHaveTextContaining(
            'Invalid login or password.');

    });
});


