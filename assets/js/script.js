
var spoonKey = '129215e0949b4e2284c679c5b3665666'
var form = document.querySelector('form')
var addIng = document.querySelector('[name="ingredients"]')
var ingList = []
var listContUlEl = document.getElementById('list-cont')
var makeMealBtn = document.getElementById('make-meal-btn')




function displayList() {
    var savedIng = localStorage.getItem('ingredients')
    var displayIng = JSON.parse(savedIng)
    //add savedIng items to ingList array
    console.log(displayIng)
    // ingList.push(displayIng)
    for (var i = 0; i < displayIng.length; i++) {
        //add one array item from savedIng into the ingList variable array
        ingList.push(displayIng[i])
        var listItemEl = document.createElement('li')
        listItemEl.innerHTML = ingList[i]
        // listItemEl.innerText.str.replace()
        listItemEl.setAttribute("id", ingList[i])
        listContUlEl.appendChild(listItemEl)
    }
}
function addIngredient() {
    if (input.value !== '') {
        //add the input.value as an array item to ingList variable
        ingList.push(JSON.stringify(input.value))
        console.log(ingList)
        localStorage.setItem('ingredients', JSON.stringify(ingList))
        //create a Li element
        // make the innerText the input.value
        // give the Li a unique ID
        // give the Li a button el
        //give the Li Btn element a event listener
        //append the Btn to the Li
        //append the Li to the list-cont Ul
        createLiElement(input.value)
    } else {
        console.log('not a valid ingredient')
    }
    // var savedIng = localStorage.getItem('ingredients')
    // var displayIng = JSON.parse(savedIng)
    // console.log(displayIng + " this is pulled from local storage")
    // for (var i = 0; i < displayIng.length; i++) {
    //     var createLi = document.createElement('li')
    //     createLi.innerText = displayIng[i].ingredient
    //     listContUlEl.appendChild(createLi)
    // }
}
function createLiElement() {
    var listItemEl = document.createElement('li')
    listItemEl.innerText = input.value
    listItemEl.setAttribute("id", input.value)
    listContUlEl.appendChild(listItemEl)
}

function redirect() {
    window.location.assign()('./');
}
makeMealBtn.addEventListener('click', redirect);

function handleSubmit(ev) {
    ev.preventDefault()
    console.log(input.value + " this is the value that was typed into the input box")
    addIngredient(input.value)
    createLiElement()
}
form.addEventListener('submit', handleSubmit)
displayList()