import Page from './page'

let navText = "Sale";
let dropdownText = "View All Sale"

class HomePage extends Page {

    get inputSearch () { return $('#search') }
    get aSale () { return $(`a*=${navText}`) }
    get aViewAllSale () { return $(`a*=${dropdownText}`) }

    async search (searchText) {
        await (await this.inputSearch).setValue(searchText);
    }

    async navigateToSalePage () {
        await (await this.aSale).moveTo();
        await (await this.aViewAllSale).click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
