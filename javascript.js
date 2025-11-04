console.log('hello world');

const gridContainer = document.querySelector('#grid-container');
const button = document.querySelector('#resize');

createGrid(16);

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target != gridContainer) {
        event.target.style.backgroundColor = "red";
    }
});

button.addEventListener('click', (event) => {
    let size = prompt("Enter grid size (16-100):");
    if (size >= 100) size = 100;
    else if (size <= 16) size = 16;
    removeGrid();
    createGrid(size);
});

function createGrid(size) {
    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('item-container');
        for (j = 0; j < size; j++) {
            const column = document.createElement('div');
            column.classList.add('item');
            row.appendChild(column);
        }
        gridContainer.appendChild(row);
    }
}

function removeGrid() {
    console.log(gridContainer.childNodes.length)
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
