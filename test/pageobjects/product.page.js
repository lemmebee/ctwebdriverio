import Page from './page'

/**
 * Product sub page containing specific selectors and methods
 */
class ProductPage extends Page {

    /**
     * web selectors using getter methods
     */
    get selectColor () { return $('#attribute92') } 
    get selectSize () { return $('#attribute180') } 
    get btnAddToCart () { return $("div[class='add-to-cart-buttons'] button[title='Add to Cart']") } 

    /**
     * Select blue color for the product item
     */
    async chooseBlue () {
        await (await this.selectColor).selectByAttribute('value', '27');
    }

    /**
     * Select xs size for the product item
     */
    async chooseXS() {
        await (await this.selectSize).selectByAttribute('value', '81');
    }
    
    /**
     * Click on add to cart button
     */
    async clickAddBtn() {
        await (await this.btnAddToCart).click();
    }
}

module.exports = new ProductPage();
