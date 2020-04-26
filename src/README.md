### Description

A demo e-commerce site including homepage, category & product pages. 
Features sorting, order, price range & pagination.

To view the project, type "yarn start" in your console while in the project directory.
When the development server initializes, the site will be available at [http://localhost:3000](http://localhost:3000)

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Knows issues

When applying a filter, API only returns an array of products. 
The total number of products can be obtained only via the get category request.
This way, the pagination does not work properly when applying a filter, it still shows
the pages availabe based on the total product pages of the category, filtering excluded.