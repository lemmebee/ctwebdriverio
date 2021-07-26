const HomePage = require('../pageobjects/home.page');
const SearchResult = require('../pageobjects/search-result.page');
const ProductPage = require('../pageobjects/product.page');
const CartPage = require('../pageobjects/cart.page');

describe('add to cart test suite', () => {

    it('should add item to cart successfully', async () => {

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
