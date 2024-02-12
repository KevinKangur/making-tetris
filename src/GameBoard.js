const GameBoard = {
    
    state: [],
    gameBoardTable: document.getElementById('gameboard'),
    boardSizeX: 12,
    boardSizeY: 18,
    currentBlock: undefined,
    
    init() {
        for ( let y = 0; y < this.boardSizeY; y++ ) {
            let arr = [];
            for ( let x = 0; x < this.boardSizeX; x++ ) {
                arr.push('');
            }
            this.state.push(arr);
        }

        document.addEventListener ('keydown', e => {
            switch ( e.key ) {
            //    case 'ArrowUp':
            //        direction = 'u';
            //        break;
            //    case 'ArrowDown':
            //        direction = 'd';
            //        break;
                case 'ArrowLeft':
                    direction = 'l';
                    break;
                case 'ArrowRight':
                    direction = 'r';
                    break;
            }
        });
    },
    
    draw() {

        this.gameBoardTable.innerHTML = '';
        
        for ( let y = 0; y < this.boardSizeY; y++ ) {
            const boardRowTr = document.createElement('tr');
            for ( let x = 0; x < this.boardSizeX; x++ ) {
                const boardCellTd = document.createElement('td');
                const id = y + '_' + x;
                boardCellTd.setAttribute('id', id);    
                boardCellTd.classList.add(this.state[y][x]);
                boardRowTr.append(boardCellTd);
            }
            this.gameBoardTable.append(boardRowTr);
        }
    
        //scoreDiv.innerText = 'Score: ' + score;
    },

    addNewBlock( block ) {
        this.currentBlock = block;
    },

    
}

export { GameBoard }