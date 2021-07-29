import Page from './page'

/**
 * Cart sub page containing specific selectors and methods
 */
class CartPage extends Page {
    
    /**
     * web selectors using getter methods
     */
    get spanSuccessMessage () { return $('li[class="success-msg"] span') }
    
}

module.exports = new CartPage();
