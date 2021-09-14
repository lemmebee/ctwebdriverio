import LoginPage from '../pageobjects/login.page'
import * as loginCreds from '../json-helper/registered-user.json'
import AccountDashboard from '../pageobjects/account-dashboard.page'
import allureReporter from '@wdio/allure-reporter'

/**
 * This is a test file containing tests for the following
 * behaviour on ctqatest.biz/ecom/: Logout feature
 */
describe('Logout test suite', () => 

    'should logout successfully', async () => {

        allureReporter.addSeverity('normal');

        await LoginPage.open();
        await LoginPage.login(loginCreds.user.email, loginCreds.user.password);
        await expect(AccountDashboard.h1DashboardLabel).toHaveTextContaining('MY DASHBOARD');
        await AccountDashboard.logout();
        await expect(browser).toHaveUrl('http://www.ctqatest.biz/ecom/customer/account/logoutSuccess/');
        
    });
});
