import Page from './page'

/**
 * Login sub page containing specific selectors and methods
 */
class LoginPage extends Page {
    
    /**
     * web selectors using getter methods
     */
    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#pass') }
    get btnSubmit () { return $('#send2') }
    get spanInvalidLoginErrorMessage () { return $('li[class="error-msg"] span') }
    get divEmptyEmailValidation () { return $('#advice-required-entry-email') }
    get divEmptyPasswordValidation () { return $('#advice-required-entry-pass') }

    /**
     * Login behaviour to the system
     * @param {String} username -username used in login
     * @param {String} password -password used in login
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite base url
     */
    open () {
        return super.open('customer/account/login/');
    }
}

module.exports = new LoginPage();
