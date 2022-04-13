
var edamamKey = 'ad1b23b5a41114ae64b13d36bb2dceda'
var edamamId = '62eb7f7d'
var spoonKey = '129215e0949b4e2284c679c5b3665666'
var maxRecipe = 4
var savedIng = localStorage.getItem('ingredients')
var ingredients = JSON.parse(savedIng) || []
var recipes = document.querySelector('.meal')


function displayRecipes(data) {
    for (var i=0; i < ingredients.length; i++ ) {
        var listItem = document.createElement('li')
        listItem.innerText = data[i].title
        recipes.appendChild(listItem)
    }
}


// fetch requests to the API Spoonacular and Edamam
// need to add a variable to the value of ingredients parameter that's equal to savedIng
function getSpoonData() {
<<<<<<< HEAD
    fetch ('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients.join(',') + '&ranking=1&ignorePantry=true') 
        .then(function(response) {
<<<<<<< HEAD
            return response.json()
        })
        .then(function(data) {
            console.log(data)
        })
}


function getEdamamData() {
    fetch ('https://api.edamam.com/api/recipes/v2?q=' + ingredients.join(',') + '&app_id=' + + '&app_key=') 
        .then(function(response) { 
=======
>>>>>>> 745f56d630e51bc720bc297ebbe1adbdbbeb9e56
            response.JSON
        })
        .then(function(data) {
            console.log(data)
        })
=======
<<<<<<< HEAD
    fetch ('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients.join(',') + '&ranking=1&ignorePantry=true&number=' + maxRecipe + '&apiKey=' + spoonKey ) 
        .then(function(response) {
=======
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients.join(',') + '&ranking=1&ignorePantry=true&apiKey=' + spoonKey)
        .then(function (response) {
            console.log(response)
>>>>>>> b84a0e72a33e53570c28e49338c26d5b0e5b62cf
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            displayRecipes(data)
        })      
>>>>>>> de4e53cd26ed517e9cf7ba2b01166e6a6bd9cdeb
}


function getEdamamData() {
<<<<<<< HEAD
    fetch ('https://api.edamam.com/api/recipes/v2?q=' + + '&app_id=' + + '&app_key=') 
        .then(function(response) { 
            response.JSON
        })
        .then(function(data) {
=======
    fetch('https://api.edamam.com/api/recipes/v2?q=' + ingredients.join(',') + '&app_id=' + + '&app_key=')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
>>>>>>> de4e53cd26ed517e9cf7ba2b01166e6a6bd9cdeb
            console.log(data)
        })
}

<<<<<<< HEAD






//this call is not being used right now but could. See earlier comment for details.
// displayList()
=======
getSpoonData()
>>>>>>> de4e53cd26ed517e9cf7ba2b01166e6a6bd9cdeb


