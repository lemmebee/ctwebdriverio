import Page from './page'

let successMessage = "Thank you for registering with Madison Island."
let accountLabel = "Account"

/**
 * Account dashboard sub page containing specific selectors and methods
 */
class AccountDashboard extends Page {

    /**
     * web selectors using getter methods
     */
    get spanRegisterSuccessMessage () { return $(`span*=${successMessage}`) }
    get h1DashboardLabel () { return $('div[class="page-title"] h1') }
    get strongGreetings () { return $('p[class="hello"] strong') }
    get spanAccountLabel () { return $(`span*=${accountLabel}`) }
    get aLogoutLabel () { return $('a[title="Log Out"]') }
    
    /**
     * overwrite base url
     */
    open () {
        return super.open('customer/account/index/');
    }
    
    /**
     * Logout behaviour
     */
    async logout () {
        await (await this.spanAccountLabel).click();
        await (await this.aLogoutLabel).click();
    }
}

module.exports = new AccountDashboard();
