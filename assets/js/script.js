var form = document.querySelector('form')
var addIng = document.querySelector('[name="ingredients"]')
var listContUlEl = document.getElementById('list-cont')
var makeMealBtn = document.getElementById('make-meal-btn')
var clearLocalBtn = document.getElementById('clear-local-btn')

// the displayList pulls ingredients from localStorage and 
//renders them as list items on the browser with unique IDs
function displayList() {
    var savedIng = localStorage.getItem('ingredients')
    var displayIng = JSON.parse(savedIng) || []
    console.log(displayIng)
    //add savedIng items to ingList array
    // ingList.push(displayIng)

    for (var i = 0; i < displayIng.length; i++) {

        var listItemEl = document.createElement('li')
        listItemEl.innerText = displayIng[i]
        listItemEl.setAttribute("id", displayIng[i])
        listContUlEl.appendChild(listItemEl)
    }
}

// begins the primary functionality and logic of Meal Maker

function addIngredient() {
    if (input.value !== '') {
        //add the input.value as an array item to ingList variable
        var savedIng = localStorage.getItem('ingredients')
        var displayIng = JSON.parse(savedIng) || []
        displayIng.push(input.value)
        localStorage.setItem('ingredients', JSON.stringify(displayIng))

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
    input.value = ""
}
form.addEventListener('submit', handleSubmit);

//this function moves browser to the Meals.HTML
function redirectToMealsHTML() {
    location.assign('./meals.html')
}

function clearLocalEventHandler() {
    localStorage.clear();
    location.reload();

}

makeMealBtn.addEventListener('click', redirectToMealsHTML);
clearLocalBtn.addEventListener('click', clearLocalEventHandler);

//this call is not being used right now but could. See earlier comment for details.
displayList()


