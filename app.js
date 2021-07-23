// step 1 add this JavaScript file to index.html in the head element using the appropriate attribute

//write functions for all of the following
//use querySelector or querySelectorAll for all of the following, where needed.

//step 2 select the first paragraph in the second div and add the class 'paragraph-color' so that the styles in the style sheet are applied to only that paragraph

// step 3 create a paragraph template using a template litteral

// step 5 add the paragraph template you just created to the first div using innerHTML

function colorParagraph() {
    const p = document.querySelector(".first-paragraph")
    p.classList.add("paragraph-color")
}

colorParagraph()

function createParagraph(text) {
    return `<p>${text}<p>`
}

function addNewParagraph(template) {
    const div = document.querySelector("#first-div")
    div.innerHTML += template
}

addNewParagraph(createParagraph("this is a new paragraph"))