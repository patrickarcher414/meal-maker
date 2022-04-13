
var edamamKey = 'ad1b23b5a41114ae64b13d36bb2dceda'
var edamamId = '62eb7f7d'
var spoonKey = '129215e0949b4e2284c679c5b3665666'
var maxRecipe = 4
var savedIng = localStorage.getItem('ingredients')
var ingredients = JSON.parse(savedIng) || []
var recipes = document.querySelector('.meal')



function displaySpoonRecipes(data) {
    for (var i=0; i < ingredients.length; i++ ) {
        var listItem = document.createElement('li')
        listItem.innerText = data[i].title
        recipes.appendChild(listItem)
    }
}

function displayEdamamRecipes(data) {
    for (var i=0; i < 5; i++ ) {
        var listItem = document.createElement('li')
        listItem.innerText = data.hits[i].recipe.label
        recipes.appendChild(listItem)
    }
}


// fetch requests to the API Spoonacular and Edamam
// need to add a variable to the value of ingredients parameter that's equal to savedIng
function getSpoonData() {

    fetch ('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients.join(',') + '&ranking=1&ignorePantry=true&number=5&apiKey=' + spoonKey ) 
        .then(function(response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            displaySpoonRecipes(data)
        })      
}


function getEdamamData() {


    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + ingredients.join(',') + '&app_id=' + edamamId + '&app_key=' + edamamKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            displayEdamamRecipes(data)
        })
}


getSpoonData()
getEdamamData()


