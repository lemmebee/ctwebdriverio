import RegisterPage from '../pageobjects/register.page'
import AccountDashboard from '../pageobjects/account-dashboard.page'
import faker from 'faker'

describe('Register users test suite', () => {

    it('should be able to create new user', async () => {

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


