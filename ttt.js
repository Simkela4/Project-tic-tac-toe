const Gameobard =(function() {
    const rows=3
    const cols=3
    const gameboard=[]

    for (let i = 0; i < rows; i++) {
        gameboard[i] = []; 
        for (let j = 0; j < cols; j++) {
          gameboard[i][j] = 0; 
        }
      }

      console.log(gameboard);
})();

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

