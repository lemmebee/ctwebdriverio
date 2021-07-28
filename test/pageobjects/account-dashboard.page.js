import Page from './page'

let successMessage = "Thank you for registering with Madison Island."
let accountLabel = "Account"

class AccountDashboard extends Page {

    get spanRegisterSuccessMessage () { return $(`span*=${successMessage}`) }
    get h1DashboardLabel () { return $('div[class="page-title"] h1') }
    get strongGreetings () { return $('p[class="hello"] strong') }
    get spanAccountLabel () { return $(`span*=${accountLabel}`) }
    get aLogoutLabel () { return $('a[title="Log Out"]') }

    open () {
        return super.open('customer/account/index/');
    }

    async logout () {
        await (await this.spanAccountLabel).click();
        await (await this.aLogoutLabel).click();
    }
}

module.exports = new AccountDashboard();
