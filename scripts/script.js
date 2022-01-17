const gridContainer = document.querySelector('.grid-container')
const resetGridButton = document.querySelector('#reset-grid-btn')

function createGrid(sideLength) {
    for (let i = 0; i < sideLength; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < sideLength; j++){
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

function resetGrid(){
    gridContainer.innerHTML = '';
    let userInput;
    while(true) {
        userInput = Number(prompt('How big do you want your grid? Enter a number x to build an x by x grid.'));
        if (!(userInput > 100 || userInput < 1 || userInput === NaN)) break;
        alert('Sorry! You must enter a number greater than 0 and less than 101. Try again.');
    }

    createGrid(userInput);
}

createGrid(16);
gridContainer.addEventListener('mouseover', colorSquare)
resetGridButton.addEventListener('click', resetGrid)




