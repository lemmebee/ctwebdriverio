#### Setup
+ Run ``npm install``

#### How to run
+ ``npx wdio run wdio.conf.js`` to run tests in browser mode
+ ``npx wdio run wdio.conf.js --spec add-to-cart.e2e.js`` to run add-to-cart.e2e.js suite only
+ ``allure generate allure-results/ --clean && allure open`` to generate and open test report