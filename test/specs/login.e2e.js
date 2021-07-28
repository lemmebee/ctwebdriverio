import LoginPage from '../pageobjects/login.page'
import * as loginCreds from '../json-helper/registered-user.json'
import AccountDashboard from '../pageobjects/account-dashboard.page'


describe('Login test suite', () => {

    // it('should not login with invalid credentials', async () => {
        
    //     await LoginPage.open();
    //     await LoginPage.login('test@test.com', 'ThisIs@T3st');
    //     await expect(LoginPage.spanInvalidLoginErrorMessage).toBeExisting();
    //     await expect(LoginPage.spanInvalidLoginErrorMessage).toHaveTextContaining(
    //         'Invalid login or password.');

    // });

    // it('should not login with empty credentials', async () => {

    //     await LoginPage.open();
    //     await LoginPage.login('', '');
    //     await expect(LoginPage.divEmptyEmailValidation).toBeExisting();
    //     await expect(LoginPage.divEmptyEmailValidation).toHaveTextContaining(
    //         'This is a required field.');
    //     await expect(LoginPage.divEmptyPasswordValidation).toBeExisting();
    //     await expect(LoginPage.divEmptyPasswordValidation).toHaveTextContaining(
    //         'This is a required field.');

    // });

    it('should login with valid credentials', async () => {

        await LoginPage.open();
        await LoginPage.login(loginCreds.user.email, loginCreds.user.password);
        await expect(AccountDashboard.h1DashboardLabel).toBeExisting();
        await expect(AccountDashboard.h1DashboardLabel).toHaveTextContaining('MY DASHBOARD');

        await expect(AccountDashboard.strongGreetings).toBeExisting();
        await expect(AccountDashboard.strongGreetings).toHaveTextContaining('Hello, '+loginCreds.user.firstName+' '+loginCreds.user.lastName+'!');

    });
});
