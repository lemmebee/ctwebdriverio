import Page from './page'

let successMessage = "Thank you for registering with Madison Island."

class AccountDashboard extends Page {

    get spanRegisterSuccessMessage () { return $(`span*=${successMessage}`) }

    open () {
        return super.open('customer/account/index/');
    }
}

module.exports = new AccountDashboard();
