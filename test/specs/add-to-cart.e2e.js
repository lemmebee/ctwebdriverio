import HomePage from '../pageobjects/home.page'
import SearchResult from '../pageobjects/search-result.page'
import ProductPage from '../pageobjects/product.page'
import CartPage from '../pageobjects/cart.page'
import allureReporter from '@wdio/allure-reporter'

/**
 * This is a test file containing tests for the following
 * behaviour on ctqatest.biz/ecom/: Adding new item to shopping cart
 */
describe('Add to cart test suite', () => {

    it('should add item to cart successfully', async () => {

        allureReporter.addSeverity('critical');

        await HomePage.open();
        await HomePage.search('shirt\n');
        await SearchResult.chooseItem();
        await ProductPage.chooseBlue();
        await ProductPage.chooseXS();
        await ProductPage.clickAddBtn();
        await expect(CartPage.spanSuccessMessage).toBeExisting();
        await expect(CartPage.spanSuccessMessage).toHaveTextContaining(
            'Slim fit Dobby Oxford Shirt was added to your shopping cart.');
        
    });

});
