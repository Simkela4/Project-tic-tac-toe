function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];
  
    
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }

    function cell(row, column) {
        return board[row][column];
      }

      function markCell(row, column, player) {
        const chosenCell = cell(row, column);
        chosenCell.addToken(player);
      }


      const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
      };
      return{
        cell, markCell, printBoard
      };
}

function Cell() {
    let value = 0;
  
    
    const addToken = (player) => {
      value = player;
    };
  
    
    const getValue = () => value;
  
    return {
      addToken,
      getValue
    };
  }

  function gameController(){

 
    const board = Gameboard(); // pozivaš svoj board
    let currentPlayer = "X";
    let winner = null;
  
    function checkWinner() {
      const winningCombinations = [
        [ [0, 0], [0, 1], [0, 2] ],
        [ [1, 0], [1, 1], [1, 2] ],
        [ [2, 0], [2, 1], [2, 2] ],
        [ [0, 0], [1, 0], [2, 0] ],
        [ [0, 1], [1, 1], [2, 1] ],
        [ [0, 2], [1, 2], [2, 2] ],
        [ [0, 0], [1, 1], [2, 2] ],
        [ [0, 2], [1, 1], [2, 0] ],
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
  
        const valA = board.cell(a[0], a[1]).getValue();
        const valB = board.cell(b[0], b[1]).getValue();
        const valC = board.cell(c[0], c[1]).getValue();
  
        if (valA !== 0 && valA === valB && valB === valC) {
          return valA;
        }
      }
  
      return null;
    }
    function switchPlayer(){
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function playRound(row,column){
      const selectedCell=board.cell(row,column);

      if(selectedCell.getValue() !==0 || winner)
        return;

      selectedCell.addToken(currentPlayer);
    
      const result=checkWinner();
      if(result){
        winner=result;
        console.log(`Player ${winner} wins!`);
        return;
      }
      switchPlayer();
    }
    
    return {
      playRound,
      getCurrentPlayer: () => currentPlayer,
      getBoard: () => board
    };
   
  }

