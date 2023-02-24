let game = {
    // xTurn: true,
    i:0,
    xState: [],
    oState: [],
    winnigState: [
        [1, 5, 9],
        [3, 5, 7],

        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
    ]
}

const createGrid = () => {
    const grid = document.createElement('div')
    grid.classList.add('grid')
    return grid
}

const createCell = (i) => {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    cell.dataset.id = i
    cell.addEventListener("click", (event) => {
        const element = event.target
        const id = element.dataset.id

        if (!(id)) return
        i++;
        if (i % 2 === 0) {
            game.oState.push(id)
            element.classList.add('o')
            element.classList.add('desabled')
            
        } else {
            game.xState.push(id)
            element.classList.add('x')
            element.classList.add('desabled')
        }
        
        // if (game.xTurn) {
        //     game.xState.push(id)

        //     element.classList.add('x')
        //     element.classList.add('desabled')

        //    game.xTurn = false
        // } else {
        //     game.oState.push(id)

        //     element.classList.add('o')

        //     game.xTurn = true
        // }
        // element.classList.add('disabled')
        // console.log(id)
    });
    return cell
}

const generateGrid = () => {
    const grid = createGrid()
    for (let i = 0; i < 9; i++) {
        const cell = createCell(i)
        grid.appendChild(cell)
    }
    return grid
}

const initialApp = (app) => {
    const grid = generateGrid()
    app.appendChild(grid)
}

initialApp(document.getElementById('app'))
