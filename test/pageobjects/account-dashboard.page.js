import Page from './page'

let successMessage = "Thank you for registering with Madison Island."

class AccountDashboard extends Page {

    get spanRegisterSuccessMessage () { return $(`span*=${successMessage}`) }
    get h1DashboardLabel () { return $('div[class="page-title"] h1') }
    get strongGreetings () { return $('p[class="hello"] strong') }

    open () {
        return super.open('customer/account/index/');
    }
}

module.exports = new AccountDashboard();
