var spoonKey = '129215e0949b4e2284c679c5b3665666'

var savedIng = localStorage.getItem('ingredients')
var ingredients = JSON.parse(savedIng) || []

// fetch requests to the API Spoonacular and Edamam
// need to add a variable to the value of ingredients parameter that's equal to savedIng
function getSpoonData() {
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients.join(',') + '&ranking=1&ignorePantry=true')
        .then(function (response) {
            response.JSON
        })
        .then(function (data) {
            console.log(data)
        })
}


function getEdamamData() {
    fetch('https://api.edamam.com/api/recipes/v2?q=' + + '&app_id=' + + '&app_key=')
        .then(function (response) {
            response.JSON
        })
        .then(function (data) {
            console.log(data)
        })
}







//this call is not being used right now but could. See earlier comment for details.
// displayList()


