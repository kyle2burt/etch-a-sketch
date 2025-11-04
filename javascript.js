console.log('hello world');

const gridContainer = document.querySelector('#grid-container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('item-container');
    for (j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.classList.add('item');
        row.appendChild(column);
    }
    gridContainer.appendChild(row);
}

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target != gridContainer) {
        event.target.style.backgroundColor = "red";
    }
});