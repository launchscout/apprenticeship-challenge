# Gaslight Apprenticeship Challenge

## Shopping List App
This is a basic shopping list app that allows for the following:
* Create a new shopping list (can edit name of list)
* Add new products to list (qty, product name, price)
* Edit the qty, product name, and price of a product
* Remove products from list
* Rearrange product order on the list by drag and drop (or move to another shopping list)
* Lists are maintained in a database and accessible by multiple users (with instant updates)
* Calculate (and instantly update) a total shopping list price

## Future features to Add
* Mark products as picked (toggle state, moves to bottom of list in picked section when picked)
* Checkout on list to complete the shopping list (store in history)
* Autocomplete/look-ahead search to pull up previous products from product history

## Instructions to run
Clone the repo or download, cd into the base directory and run the following
```
npm install
npm start
```
This will startup an instance of the app running on your machine at http://localhost:8080/
**Note:** This requires that node and npm be installed on your machine

## Additional options
Build a minified and chunked version for deployment on webserver.
```
npm run build
```
Create a stats.json file for the build
```
npm run stats
```

Deploy a build version to be run on GitHub's gh-pages
```
npm run deploy
```

Run tests on the application
```
npm run test
```

Run linting programs to identify syntax issues in code
```
npm run lint
```
