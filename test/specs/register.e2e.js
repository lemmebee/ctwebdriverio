import RegisterPage from '../pageobjects/register.page'
import AccountDashboard from '../pageobjects/account-dashboard.page'
import allureReporter from '@wdio/allure-reporter'
import faker from 'faker'

/**
 * This is a test file containing tests for the following
 * behaviour on ctqatest.biz/ecom/: Register new users
 */
describe('Register users test suite', () => {

    it('should be able to create new user', async () => {
        
        allureReporter.addSeverity('critical');

        let usrInfo = {
            firstName     : faker.name.firstName(),
            lastName      : faker.name.lastName(),
            email         : faker.internet.email(),
            password      : faker.phone.phoneNumber()
        }
        
        await RegisterPage.open();
        await RegisterPage.register(usrInfo);
        let successMessage = await AccountDashboard.spanRegisterSuccessMessage;
        await expect(successMessage).toHaveTextContaining('Thank you for registering with Madison Island.');

    });

});
