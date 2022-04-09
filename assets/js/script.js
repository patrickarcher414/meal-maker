
var spoonKey = '129215e0949b4e2284c679c5b3665666'
var form = document.querySelector('form')
var addIng = document.querySelector('[name="ingredients"]')
var listCont = document.querySelector('#list-cont')
var ingList = []

function displayList() {
    var savedIng = localStorage.getItem('ingredients')
    var displayIng = JSON.parse(savedIng)
    var createUl = document.createElement('ul')
    listCont.appendChild(createUl)
    for (var i=0; i < displayIng.length; i++) {
        var createLi = document.createElement('li')
        createLi.innerText = displayIng[i].ingredient
        createUl.appendChild(createLi)
    } 
}

function addIngredient() {
    if (addIng.value !== '') {
        var newIng = {
            ingredient: addIng.value
        }
        ingList.push(newIng)
        addIng.value = ""
        localStorage.setItem('ingredients', JSON.stringify(ingList))
    } else {
        console.log('not a valid ingredient')
    }
    var savedIng = localStorage.getItem('ingredients')
    var displayIng = JSON.parse(savedIng) 
    var createUl = document.createElement('ul')
    listCont.appendChild(createUl)
    for (var i=0; i < displayIng.length; i++) {
        var createLi = document.createElement('li')
        createLi.innerText = displayIng[i].ingredient
    }
    createUl.appendChild(createLi)
}

function handleSubmit(ev) {
    ev.preventDefault()
    addIngredient()
}

form.addEventListener('submit', handleSubmit)

displayList()


