const gridContainer = document.querySelector('.grid-container')
const resetGridButton = document.querySelector('#reset-grid-btn')

function createGrid(sideLength) {
    for (let i = 0; i < sideLength; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < sideLength; j++){
            let column = document.createElement('div');
            column.classList.add('box');
            row.appendChild(column);
        };
        gridContainer.appendChild(row);
    };
};

function colorSquare(event) {
    const box = event.target
    if (!box.classList.contains('box')) return
    
    // Check if the box has a background-color property
    if (box.style.backgroundColor){
        box.style.filter = `brightness(0.15)`;
    } else {
        box.style.backgroundColor = getRandomHexColor();
    };
};

function getRandomHexColor() {
    let randomColorHex = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColorHex}`
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




