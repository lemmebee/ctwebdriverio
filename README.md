#### Setup
+ Run ``npm install``

#### How to run
+ ``npx wdio run wdio.conf.js`` to run tests in browser mode
+ ``npx wdio run wdio.conf.js --spec example.e2e.js`` to run a single test suite
+ ``allure generate allure-results/ --clean && allure open`` to generate and open test report