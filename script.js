let gridSize = 16;
let divs = [];

function buildGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        divs[i] = document.createElement('div');
        divs[i].className = `divv`;
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            divs[i].appendChild(box);
        }
        container.appendChild(divs[i]);
    }
}

buildGrid(gridSize);
