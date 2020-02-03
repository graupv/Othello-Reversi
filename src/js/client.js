// Reversi - Othello

const APP_STATE = {
    turn: 1,
    board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    // starting board
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
};

const renderBoard = (state) => {

    
};

const jugar = () => {console.log('lmao')};

const renderBoxContainer = (arrStates) => {
    const cont = document.createElement('div');
    cont.setAttribute('class','boxRow')
    arrStates.forEach(element => {
        // appendChild(renderbox(element))
        // renderbox recibe el element==estado / color de la ficha
        cont.appendChild(renderBox(element));
    });

    return cont;
};

const renderBox = (
    player = 0,
) => {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    
    const checker = document.createElement('div');
    checker.setAttribute('class', 'checker');
    
    if (player == 0) {
        checker.style.backgroundColor = 'transparent';
    } else if (player == 1) {
        checker.style.backgroundColor = 'chocolate';
    } else {
        checker.style.backgroundColor = 'navajowhite';
    }

    box.appendChild(checker);
    return box;
};

const renderTitle = () => {
    const title = document.createElement('div');
    title.setAttribute('class', 'titulo');
    title.id = 'titulo';
    title.style.height = '75px';
    title.style.width = '550px';
    title.innerText = '-- Othello --'

    return title;
};


const render = (mount, state) => {
    mount.innerHTML = ''; 
    // clean
    mount.appendChild(renderTitle());
    const contenedorBoard = document.createElement('div');
    contenedorBoard.setAttribute('class','board');
    contenedorBoard.style.width = '550px';
    contenedorBoard.style.height = '550px';

    mount.appendChild(contenedorBoard);

    let { board } = state;
    // recibir board de state
    console.log(board, typeof(board));
    let boxRows = board.map(renderBoxContainer);
    boxRows.forEach(element => {
        contenedorBoard.appendChild(element);
    });
    
    

};
/*

const { board } = app_state 
board.map() -> 

*/ 
const root = document.getElementById('root');

try {
    render(root, APP_STATE);
    // console.log('lol');
    
} catch (error) {
    console.log(error);
}
