## Business Index

This is a project that provides access to the information of the businesses that OwnLocal services. 
All libraries listed and used in the package.json file are open source libraries and full credit is given to authors and I take no credit in authoring them.


To run:

```
npm install
npm start
```
The server should be running on localhost:8080

To run unit tests:

```
npm test

```

NOTE: if running the unit tests throws a 'cannot find module error', change node_modules/react-addons-test-utils/index.js to:

```
module.exports = require('react/lib/ReactTestUtils');
```

If unit tests are failing, it is probably because of a dependancy on the Reflux store (researching the best mock library that is compatible with enzymne/shallow). I have provided some documentation in the src/js/lib/services/BusinessService.js. The actual service will need to be commented out and the mock service will need to be used instead.

```
//comment either line out to toggle between live data and mockData

const BusinessService = RestService('businesses');

//const BusinessService = businessServiceMock;

```
