#### Setup
+ Run ``npm install``

#### How to run
> Run tests in browser mode
+ ``npm run tests`` to run all tests
+ ``npm run sale:suite`` to run sale suite
+ ``npm run cart:suite`` to run cart suite
+ ``npm run login:suite`` to run login suite
> Run tests in headless mode
+ Add new arg ``'--headless'`` to ``capabilities`` in ``wdio.conf.js`` and run again with previous commands
+ ``allure generate allure-results/ --clean && allure open`` to generate and open test report