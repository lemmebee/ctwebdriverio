import Page from './page'


class HomePage extends Page {

    get inputSearch () { return $('#search') }

    async search (searchText) {
        await (await this.inputSearch).setValue(searchText);
    }

    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
