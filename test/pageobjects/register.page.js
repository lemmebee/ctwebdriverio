import Page from './page'

/**
 * Register sub page containing specific selectors and methods
 */
class RegisterPage extends Page {

    /**
     * web selectors using getter methods
     */
    get inputFirstname () { return $('#firstname') }
    get inputLastname () { return $('#lastname') }
    get inputEmail () { return $('#email_address') }
    get inputPassword () { return $('#password') }
    get inputPasswordConfirmation () { return $('#confirmation') }
    get buttonRegister () { return $('button[title="Register"]') }

    /**
     * Register new user to the system
     * 
     * @property {String} firstName -user's first name
     * @property {String} lastName  -user's last name
     * @property {String} email     -user's email
     * @property {String} password  -user's password
     * 
     * @param {Object} usrInfo 
     */
    async register (usrInfo) {
        await (await this.inputFirstname).setValue(usrInfo.firstName);
        await (await this.inputLastname).setValue(usrInfo.lastName);
        await (await this.inputEmail).setValue(usrInfo.email);
        await (await this.inputPassword).setValue(usrInfo.password);
        await (await this.inputPasswordConfirmation).setValue(usrInfo.password);
        await (await this.buttonRegister).click();
    }

    /**
     * overwrite base url
     */
    open () {
        return super.open('customer/account/create/');
    }
}

module.exports = new RegisterPage();
