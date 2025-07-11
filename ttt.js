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

function Player(name, sign){
    this.name= name;
    const1 = 'X';
    const2 = 'O';
    if (sign===const1){
        return {name,const1};
    }
    else{
        return {name,const2};
    }

}

const player1= new Player("Rabo", 'X');
const player2 = new Player("Duca", 'O');
console.log(player1);
console.log(player2);


const flow = {

    

};

