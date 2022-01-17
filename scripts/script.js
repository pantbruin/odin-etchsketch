function createGrid(){
    const gridContainer = document.querySelector('.grid-container')

    for (let i = 0; i < 16; i++){
        let row = document.createElement('div');
        for (let j = 0; j < 16; j++){
            let column = document.createElement('div');
            row.appendChild(column);
        };
        gridContainer.appendChild(row);
    };
};

createGrid()