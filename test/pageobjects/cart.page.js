const Page = require('./page');

class CartPage extends Page {

    get spanSuccessMessage () { return $('li[class="success-msg"] span') }
    
}

module.exports = new CartPage();
