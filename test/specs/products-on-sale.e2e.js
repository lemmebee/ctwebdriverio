const SalePage = require('../pageobjects/sale.page');

describe('products on sale test suite', () => {

    it('should filter products on sale with price filter', async () => {

        await SalePage.open();
        let onsalePrice = await SalePage.spanSpecialPriceList;
        await expect(onsalePrice[0]).toHaveTextContaining('$140.00');
        await expect(onsalePrice[1]).toHaveTextContaining('$120.00');
        
    });

});
