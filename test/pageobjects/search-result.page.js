import Page from './page'

/**
 * Search result sub page containing specific selectors and methods
 */
class SearchResult extends Page {

    /**
     * web selectors using getter methods
     */
    get aSelectedItem () { return $('h2 a[title="Slim fit Dobby Oxford Shirt"]') }

    /**
     * Choose slim fit dobby oxford shirt product
     */
    async chooseItem () {
        await (await this.aSelectedItem).click();
    }
}

module.exports = new SearchResult();
