import Page from './page'

let navText = "Sale";
let dropdownText = "View All Sale"

/**
 * Home sub page containing specific selectors and methods
 */
class HomePage extends Page {
    
    /**
     * web selectors using getter methods
     */
    get inputSearch () { return $('#search') }
    get aSale () { return $(`a*=${navText}`) }
    get aViewAllSale () { return $(`a*=${dropdownText}`) }

    /**
     * Search behaviour
     * @param {String} searchText -search text to use in search feature
     */
    async search (searchText) {
        await (await this.inputSearch).setValue(searchText);
    }

    /**
     * Route to sales section
     */
    async navigateToSalePage () {
        await (await this.aSale).moveTo();
        await (await this.aViewAllSale).click();
    }

    /**
     * overwrite base url
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
