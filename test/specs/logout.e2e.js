import LoginPage from '../pageobjects/login.page'
import * as loginCreds from '../json-helper/registered-user.json'
import AccountDashboard from '../pageobjects/account-dashboard.page'

describe('Logout test suite', () => {

    it('should logout successfully', async () => {

        await LoginPage.open();
        await LoginPage.login(loginCreds.user.email, loginCreds.user.password);
        await expect(AccountDashboard.h1DashboardLabel).toHaveTextContaining('MY DASHBOARD');
        await AccountDashboard.logout();
        await expect(browser).toHaveUrl('http://www.ctqatest.biz/ecom/customer/account/logoutSuccess/');
        
    });
});
