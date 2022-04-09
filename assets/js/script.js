var spoonKey = '129215e0949b4e2284c679c5b3665666'
var form = document.querySelector('form')
var addIng = document.querySelector('[name="ingredients"]')
var ingList = []
var listContUlEl = document.getElementById('list-cont')
var makeMealBtn = document.getElementById('make-meal-btn')
// the following variable is part of moving us to the Meals.HTML
//but is not currently working needs to be fixed.
// var seeListBtn = document.getElementById('see-list-btn')


// the displayList pulls ingredients from localStorage and 
//renders them as list items on the browser with unique IDs
//this is not currently being used but could be in the future
//if we want the option of saving ingredients for later.
function displayList() {
    var savedIng = localStorage.getItem('ingredients')
    var displayIng = JSON.parse(savedIng)

    //add savedIng items to ingList array

    console.log(displayIng)
    // ingList.push(displayIng)


    for (var i = 0; i < displayIng.length; i++) {

        //add one array item from savedIng into the ingList variable array
        ingList.push(displayIng[i].replaceAll('"', ''))

        var listItemEl = document.createElement('li')
        listItemEl.innerText = ingList[i]
        listItemEl.setAttribute("id", ingList[i])
        listContUlEl.appendChild(listItemEl)
    }
}


// begins the primary functionality and logic of Meal Maker

function addIngredient() {
    if (input.value !== '') {
        //add the input.value as an array item to ingList variable
        ingList.push(JSON.stringify(input.value))
        console.log(ingList)
        localStorage.setItem('ingredients', JSON.stringify(ingList))

        // creates a Li element and passes through the ingredient
        createLiElement(input.value)

    } else {
        console.log('not a valid ingredient')
    }
}

function createLiElement() {
    // create Li element, set inner text to what the user typed in for
    //an ingredient, sets a unique ID to the li, and lastly appends
    //the li element to the ul element in the HTML
    var listItemEl = document.createElement('li')
    listItemEl.innerText = input.value
    listItemEl.setAttribute("id", input.value)
    listContUlEl.appendChild(listItemEl)
}

function handleSubmit(ev) {
    ev.preventDefault()
    //sends the input value of what the user typed in as the paramenter
    //to the addIngredient function
    addIngredient(input.value)
}

form.addEventListener('submit', handleSubmit);


//this function moves browser to the Meals.HTML
function redirectToMealsHTML() {
    location.assign("./meals.html");
}
makeMealBtn.addEventListener('click', redirectToMealsHTML);


//This is broken we need to make it work
// function redirectToIngredientsListHTML() {
//     location.assign("./index.html");
// }
// seeListBtn.addEventListener('click', redirectToIngredientsListHTML);


//this call is not being used right now but could. See earlier comment for details.
// displayList()

makeMealBtn.addEventListener('click', redirect);

form.addEventListener('submit', handleSubmit)
displayList()