import Page from './page'

class RegisterPage extends Page {

    get inputFirstname () { return $('#firstname') }
    get inputLastname () { return $('#lastname') }
    get inputEmail () { return $('#email_address') }
    get inputPassword () { return $('#password') }
    get inputPasswordConfirmation () { return $('#confirmation') }
    get buttonRegister () { return $('button[title="Register"]') }

    async register (usrInfo) {
        await (await this.inputFirstname).setValue(usrInfo.firstName);
        await (await this.inputLastname).setValue(usrInfo.lastName);
        await (await this.inputEmail).setValue(usrInfo.email);
        await (await this.inputPassword).setValue(usrInfo.password);
        await (await this.inputPasswordConfirmation).setValue(usrInfo.password);
        await (await this.buttonRegister).click();
    }

    open () {
        return super.open('customer/account/create/');
    }
}

module.exports = new RegisterPage();
