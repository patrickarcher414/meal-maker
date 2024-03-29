# Meal Maker (Bootcamp Project One)
Meal Maker is a mobile first application created as a tool to help users find recipes by the user inputing a list of ingredients for a recipe, then the Meal Maker will render a list of 10 recipes for the user to choose from.
This is a group class project for the UW Coding Bootcamp. 
## Table of Contents

- [Functionality](#functionality)
- [Code Layout](#code-layout)
- [API](#api)
- [Link](#link)

## Functionality 
Upon opening the Meal Maker application the user is presented with a simple User Interface with an input field labeled "Enter Ingredients", a button to add ingredients, a button to remove all ingredients and a final button used to generate recipes.
When entering ingredients into the "Enter Ingredients" input field and selecting the "ADD" button, the ingredients that the user has input will be displayed into the main body of the page in a list format.
If the user is satisfied with the ingredients that have been entered to the list, they can proceed to click the "MAKE MEAL" button which will generate a second page that will list 10 Recipes that includes the ingredients the user has provided.
Otherwise, if the user does not want to use the ingredients that have been input, they can click the "CLEAR INGREDIENTS" button to remove the entire list.
Once on the Recipes page, the user has the option to "SEE LIST" which will return them to the original Meal Maker page while saving the ingredients that they had previously input.

## Code Layout
The code for the Meal Maker app consist of the following files
* index.html

This HTML file is built as the main skeleton of the Meal Maker page. Containing a `<head>` `<body>` `<main>` and `<footer>`

The styles from https://materializecss.com/ are also built on the elements on this page as well as all the buttons for the applications main page functionality

* meals.html

This HTML file is rendered to display the recipes for the user once the "MAKE MEAL" button has been clicked, mirroring the stylings of the main page and also containing a button to return the user to the main page.

* style.css

The CSS stylings for the page build the basic sizing, positioning and font for the header, footer, and buttons. The bulk of the page stylings are built with https://materializecss.com/ in the index.html

* script.js

The bulk of the applications functionality uses the logic within this JavaScript file and the below images with comments show an example of some of its main functions:

![meal-maker-img1](https://user-images.githubusercontent.com/98231043/163300085-48da1302-02a3-40eb-93e5-5fcf966a3b97.jpeg)

![meal-maker-img2](https://user-images.githubusercontent.com/98231043/163300440-4cd0b49c-4e1b-4f7e-a54f-ae924aedad53.jpeg)


* meal.js

The logic used within this file is primarily for fetching the data from the API's and the functionality to display the recipes on to the recipes page from the two seperate API's.

## API
Below provides links to the API's used within the Meal Maker application:

* Materalize:  https://materializecss.com/

This CSS framework was used to build the layout styles and color/theme for the application.

* Spoonacular: https://spoonacular.com/food-api 

Spoonacular is one of the two API's used for accessing the data for the recipes generated by the Meal Maker application by providing a data base of over 5000 recipes.

* Edamam https://www.edamam.com/

Edamam is the second recipe API used to generate additional recipes and diet information.


## Link
Below is the link to the published page:

https://patrickarcher414.github.io/meal-maker/


