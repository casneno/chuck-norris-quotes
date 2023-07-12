var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://api.chucknorris.io'
/* GET joke. */
router.get('/', async function(req, res, next) {
  const categories = await fetch (`${ROOT_URL}/jokes/categories`) //get the array of categories and story in a variable to render it later
  .then(res=>res.json()) // make the data readable

  const selectedCategory = req.query.category //get the user <input> choice
  const selectJoke = await fetch (`${ROOT_URL}/jokes/random?category=${selectedCategory}`) //get the random joke in categories by using the category chosen by the user
  .then(res=>res.json()) // make the data readable
  

//Code below is not being called
  const joke = await fetch(`${ROOT_URL}/jokes/random`)
  .then(res=>res.json())
  // console.log(joke)
  // console.log('OK!!')
  res.render('index', {categories, selectJoke, joke}); //render the page with the variables that were established
});


module.exports = router;
