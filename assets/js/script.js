
var spoonKey = '129215e0949b4e2284c679c5b3665666'
var form = document.querySelector('form')
var addIng = document.querySelector('[name="ingredients"]')
var ingList = []
var createLi = document.createElement('li')
var listContUlEl = document.getElementById('list-cont')

function displayList() {
    var savedIng = localStorage.getItem('ingredients')
    var displayIng = JSON.parse(savedIng)
    for (var i = 0; i < displayIng.length; i++) {
        var createLi = document.createElement('li')
        createLi.innerText = displayIng[i].ingredient
        createUl.appendChild(createLi)
    }
}

function addIngredient() {
    if (input.value !== '') {
        //add the input.value as an array item to ingList variable
        ingList.push(JSON.stringify(input.value))
        console.log(ingList)
        localStorage.setItem('ingredients', JSON.stringify(ingList))
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

function handleSubmit(ev) {
    ev.preventDefault()
    console.log(input.value + " this is the value that was typed into the input box")
    addIngredient(input.value)
}

form.addEventListener('submit', handleSubmit)

// displayList()


