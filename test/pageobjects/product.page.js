const Page = require('./page');

class ProductPage extends Page {

    get selectColor () { return $('#attribute92') } 
    get selectSize () { return $('#attribute180') } 
    get btnAddToCart () { return $("div[class='add-to-cart-buttons'] button[title='Add to Cart']") } 

    async chooseBlue () {
        await (await this.selectColor).selectByAttribute('value', '27');
    }

    async chooseXS() {
        await (await this.selectSize).selectByAttribute('value', '81');
    }

    async clickAddBtn() {
        await (await this.btnAddToCart).click();
    }
}

module.exports = new ProductPage();
