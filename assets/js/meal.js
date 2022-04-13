
var edamamKey = 'ad1b23b5a41114ae64b13d36bb2dceda'
var edamamId = '62eb7f7d'
var spoonKey = '129215e0949b4e2284c679c5b3665666'
var savedIng = localStorage.getItem('ingredients')
var ingredients = JSON.parse(savedIng) || []

// fetch requests to the API Spoonacular and Edamam
// need to add a variable to the value of ingredients parameter that's equal to savedIng
function getSpoonData() {
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients.join(',') + '&ranking=1&ignorePantry=true&apiKey=' + spoonKey)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
}


function getEdamamData() {
    fetch('https://api.edamam.com/api/recipes/v2?q=' + ingredients.join(',') + '&app_id=' + + '&app_key=')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
}

getSpoonData()


