import SalePage from '../pageobjects/sale.page'
import HomePage from '../pageobjects/home.page'
import allureReporter from '@wdio/allure-reporter'

/**
 * This is a test file containing tests for the following
 * behaviour on ctqatest.biz/ecom/: Apply multiple filters
 * for products that are on sale only
 */
describe('Products on sale test suite', () => {

    it('should filter products on sale with price filter from 100 to 199.99', async () => {

        allureReporter.addSeverity('normal');

        await SalePage.open();
        let onsalePrice = await SalePage.spanSpecialPriceList;
        let filterSelected = await SalePage.spanFilterSelected;
        await expect(onsalePrice[0]).toHaveTextContaining('$140.00');
        await expect(onsalePrice[1]).toHaveTextContaining('$120.00');
        await expect(filterSelected).toHaveTextContaining('$100.00 - $199.99');
        
    });

    it('should filter products on sale with price filter from 200 to above', async () => {

        allureReporter.addSeverity('normal');

        await HomePage.open();
        await HomePage.navigateToSalePage();
        await SalePage.chooseAbove200Filter();
        let onsalePrice = await SalePage.spanSpecialPriceList;
        let filterSelected = await SalePage.spanFilterSelected;
        await expect(onsalePrice[0]).toHaveTextContaining('$224.00');
        await expect(onsalePrice[1]).toHaveTextContaining('$225.00');
        await expect(filterSelected).toHaveTextContaining('$200.00 and above');

    });

    it('should filter products on sale with men only', async () => {

        allureReporter.addSeverity('normal');

        await SalePage.routeSaleGenderOnly('men');
        let gender = await SalePage.aMen;
        await expect(gender).toHaveTextContaining('Male');

    });

    it('should filter products on sale with women only', async () => {

        allureReporter.addSeverity('normal');

        await SalePage.routeSaleGenderOnly('women');
        let gender = await SalePage.aWomen;
        await expect(gender).toHaveTextContaining('Female');

    });

});
