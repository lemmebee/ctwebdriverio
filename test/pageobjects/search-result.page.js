const Page = require('./page');

class SearchResult extends Page {

    get aSelectedItem () { return $('h2 a[title="Slim fit Dobby Oxford Shirt"]') }

    async search (searchText) {
        await (await this.inputSearch).setValue(searchText);
    }

    async selectItem () {
        await (await this.aSelectedItem).click();
    }
}

module.exports = new SearchResult();
