let gridSize = 16;
let divs = [];

const container = document.getElementById('main-container');
const button = document.getElementById('btn');
button.addEventListener('click', function() { // changes the grid size to a value assigned by user
    while(true) {
        let newGridSize = parseInt(prompt("Enter the number of squares per side for the new grid"));
        if (newGridSize <= 100) {
            removeGrid();
            buildGrid(newGridSize);
            colorBoxes();
            break;
        }
    }
})

// build the grid inside the container div
function buildGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        divs[i] = document.createElement('div');
        divs[i].className = `box-container`;
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            divs[i].appendChild(box);
        }
        container.appendChild(divs[i]);
    }
}

// removes the existing grid, so that a new one can be build afterwards
function removeGrid() {
    let elementsToRemove = document.getElementsByClassName("box-container");
    while (elementsToRemove.length > 0) {
        elementsToRemove[0].parentNode.removeChild(elementsToRemove[0]);
    }
}

// changes the color of the hovered squares by adding a 'change' class
function colorBoxes() {
    const nodeListBoxes = document.querySelectorAll('.box');
    for (let i = 0; i < nodeListBoxes.length; i ++) {
        nodeListBoxes[i].addEventListener('mousemove', function() {
            nodeListBoxes[i].classList.add('change');
        })
    }
}

// builds the grid with the default value
buildGrid(gridSize);
colorBoxes();
