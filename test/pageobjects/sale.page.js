import Page from './page'

class SalePage extends Page {

    get spanSpecialPriceList () { return $$('ul li div p[class="special-price"] span[class="price"]') }
    get spanShoppingPriceFilter () { return $('li span[class="value"]') }
    get aAbove200Filter () { return $('a[href="http://www.ctqatest.biz/ecom/sale.html?price=200-"]') }
    get spanFilterSelected () { return $('span[class="value"]') }
    get aMen () { return $('a[href="http://www.ctqatest.biz/ecom/sale/men.html?gender=93"]') }
    get aWomen () { return $('a[href="http://www.ctqatest.biz/ecom/sale/women.html?gender=94"]') }

    open () {
        return super.open('sale.html?price=100-200');
    }

    routeSaleGenderOnly (gender) {
        return super.open('sale/'+gender+'.html');
    }

    async chooseAbove200Filter () {
        await (await this.aAbove200Filter).click();
    }
}

module.exports = new SalePage();
