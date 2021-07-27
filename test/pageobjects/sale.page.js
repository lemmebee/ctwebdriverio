const Page = require('./page');

class SalePage extends Page {

    get spanSpecialPriceList () { return $$('ul li div p[class="special-price"] span[class="price"]') }
    get spanShoppingPriceFilter () { return $('li span[class="value"]') }

    open () {
        return super.open('sale.html?price=100-200');
    }
}

module.exports = new SalePage();
