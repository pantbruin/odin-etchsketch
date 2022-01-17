const gridContainer = document.querySelector('.grid-container')

function createGrid() {
    for (let i = 0; i < 16; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++){
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        };
        gridContainer.appendChild(row);
    };
};

function colorSquare(event) {
    const box = event.target
    if (!box.classList.contains('column')) return
    box.classList.add('colored')
}

createGrid();
gridContainer.addEventListener('mouseover', colorSquare)



