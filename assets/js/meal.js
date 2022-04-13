var edamamId = '62eb7f7d'
var edamamKey = 'ad1b23b5a41114ae64b13d36bb2dceda'





var ingredients = localStorage.getItem("ingredients")


function getSpoonData() {
    fetch ('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +  + '&ranking=1&ignorePantry=true') 
        then(function(response) {
            response.JSON
        })
        then(function(data) {
            console.log(data)
        })
}


function getEdamamData() {
    fetch ('https://api.edamam.com/api/recipes/v2?q=' + + '&app_id=' + + '&app_key=' + '')
        then(function(response) { 
            response.JSON
        })
        then(function(data) {
            console.log(data)
        })
}