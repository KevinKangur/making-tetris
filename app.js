import { GameBoard } from './src/GameBoard.js';

//const messageDiv = document.getElementById('message');
//const scoreDiv = document.getElementById('score');
//const resetBtn = document.getElementById('reset');

//let score, speed;

//resetBtn.addEventListener('click', e => {
//    initGame();
//});

// initialize game
function initGame () {
    
    //clearTimeout(timeoutID);
    //timeoutID = null;

    //score = 0;
    //speed = 200;
    
    //messageDiv.innerText = '';
    //messageDiv.classList.add('hidden');    

    GameBoard.init();
    GameBoard.addNewBlock();
    GameBoard.draw();

    //(function repeat() {
    //    timeoutID = setTimeout(repeat, speed);
    //    runGame();
    //})();

    //updateHighScore();
    
}

initGame();

