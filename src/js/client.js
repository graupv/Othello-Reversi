// Reversi - Othello

const APP_STATE = {
    turn: 1,    // 1 / -1
    /* 
    1 == p1
    2 == possible play p1
    
    -1 == p2
    -2 == possible play p2

    */
    board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],

    possiblePlays: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    p1: 2,
    p2: 2,
};

const checkPlays = (arr) => {
    // 
    let lastPos = 0;
    let initPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == APP_STATE.turn) {
            // cumple -> revisar si 
            initPos = i;
        };
        
    }
    if () {
        // horizontal -> vertical -> diag LTR -> diag RTL
        // find first if any, if next/prev item is not self or otherplayer
        // can't play


    } else {

    }

};

const resetBoard = () => {
    APP_STATE.board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]
    render(root, APP_STATE);
    
};

const jugar = () => {console.log('lmao')};

const renderBoxContainer = (arrStates) => {
    const cont = document.createElement('div');
    cont.setAttribute('class','boxRow')
    let cajitas = arrStates.map((player, col) => renderBox(player, APP_STATE.board.indexOf(arrStates),col))
    cajitas.forEach(element => {
        // appendChild(renderbox(element))
        // renderbox recibe el element==estado / color de la ficha
        cont.appendChild(element);
    });

    return cont;
};

const renderBox = (
    player = 0,
    row,
    col
) => {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    
    const checker = document.createElement('div');
    checker.setAttribute('class', 'checker');
    // console.log(player, row, col);
    // check turn
    if (APP_STATE.turn) {
        // A or B
        if (playable()) {

        } else {
            // APP_STATE.turn;
        };
    }
    if (player == 0) {
        checker.style.backgroundColor = 'transparent';
        checker.onclick = () => {
            APP_STATE.board[row][col] = 1;
            render(root, APP_STATE);
        };
    } else if (player == 1) {
        checker.style.backgroundColor = 'chocolate';
        checker.onclick = () => {
            APP_STATE.board[row][col] = 1;
            // APP_STATE.p1 += 1;
            render(root, APP_STATE);
        };
    } else if (player == 2) {
        checker.style.border = 'chocolate dashed';
    } else if (player == -2) {
        checker.style.border = 'navajowhite dashed';
        // checker.onclick = () => {console.log('notlmao')};
    } else {
        checker.style.backgroundColor = 'navajowhite';
        checker.onclick = () => {
            APP_STATE.board[row][col] = -1;
            render(root, APP_STATE);
        };
        // checker.onclick = () => {console.log('lmao')};
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
    const scoreBoard = document.createElement('div');
    scoreBoard.setAttribute('class', 'scoreBoardBox');
    
    const scoreBoardP1 = document.createElement('div');
    scoreBoardP1.setAttribute('class', 'score1');
    scoreBoardP1.innerText = 'P1 | Score: ' + APP_STATE.p1;

    const scoreBoardP2 = document.createElement('div');
    scoreBoardP2.innerText = 'P2 | Score: ' + APP_STATE.p2;
    scoreBoardP2.setAttribute('class', 'score2');

    scoreBoard.appendChild(scoreBoardP1);
    scoreBoard.appendChild(scoreBoardP2);
    contenedorBoard.appendChild(scoreBoard);


    let { board } = state;
    // recibir board de state
    
    let boxRows = board.map(renderBoxContainer,);
    // boxRows recibe un arreglo de contenedores de cajas con checkers
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
