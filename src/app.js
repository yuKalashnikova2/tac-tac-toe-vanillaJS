const app = document.getElementById('app')

const winnigState = [
    [1, 5, 9],
    [3, 5, 7],

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
]

let xState = [];
let oState = [];

let xTurn = true;

const grid = document.createElement("div");
grid.classList.add("grid");

for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.dataset.id = i;

    grid.appendChild(cell)
}

const result = document.createElement("div");
result.classList.add("result");

const resultText = document.createElement("p");
resultText.textContent = 'Game over!';
resultText.style.color = 'red'

const restartButton = document.createElement("button");
restartButton.textContent = 'Restart';
restartButton.classList.add("btn");

restartButton.addEventListener('click', () => {
    result.remove();

    const cellDiv = document.querySelectorAll(".cell");
    cellDiv.forEach((cell) => cell.classList.remove('x', 'o'));

    xState = [];
    oState = [];

    xTurn = true
})


result.appendChild(resultText);
result.appendChild(restartButton);

app.appendChild(grid)

const cellDiv = document.querySelectorAll('.cell');

const drawCell = (element, xTurn) =>
    xTurn ? element.classList.add('x') : element.classList.add('o');

const saveTurn = (value, xTurn) =>
    xTurn ? xState.push(value) : oState.push(value);

const turn = (event) => {
    const element = event.target;
    if (element.classList.contains('x') || element.classList.contains('o'))
        return;

    drawCell(element, xTurn);

    saveTurn(parseInt(element.dataset.id), xTurn);


    if (xState.length + oState.length === 9) {
        app.appendChild(result);

        return
    }
    xTurn = !xTurn;
}

cellDiv.forEach((cell) => cell.addEventListener('click', turn))
