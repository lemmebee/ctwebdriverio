import Page from './page'

/**
 * Sale sub page containing specific selectors and methods
 */
class SalePage extends Page {

    /**
     * web selectors using getter methods
     */
    get spanSpecialPriceList () { return $$('ul li div p[class="special-price"] span[class="price"]') }
    get spanShoppingPriceFilter () { return $('li span[class="value"]') }
    get aAbove200Filter () { return $('a[href="http://www.ctqatest.biz/ecom/sale.html?price=200-"]') }
    get spanFilterSelected () { return $('span[class="value"]') }
    get aMen () { return $('a[href="http://www.ctqatest.biz/ecom/sale/men.html?gender=93"]') }
    get aWomen () { return $('a[href="http://www.ctqatest.biz/ecom/sale/women.html?gender=94"]') }

    /**
     * overwrite base url
     */
    open () {
        return super.open('sale.html?price=100-200');
    }

    /**
     * Route to sale section with gender filter specified
     * @param {String} gender 
     * @returns dynamic url e.g. if gender='male' routes
     * to sale section with men filter on products
     */
    routeSaleGenderOnly (gender) {
        return super.open('sale/'+gender+'.html');
    }

    /**
     * Choose price filter from 200$ to above
     */
    async chooseAbove200Filter () {
        await (await this.aAbove200Filter).click();
    }
}

module.exports = new SalePage();
