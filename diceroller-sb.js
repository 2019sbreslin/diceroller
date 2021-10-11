    function RollDiceX(){
    x = document.getElementById("diceX").value = Math.floor(Math.random()*6) + 1;

}

function RollDice(){
    y = document.getElementById("diceY").value = Math.floor(Math.random()*6) + 1;

    if (x > y){
        result = "Player 1 Wins!"
    } else if (y > x){
        result = "Player 2 Wins!"
    } else {
        result ="You Have Tied!"
    }
    document.getElementById("resultID").innerHTML = result;
    
}

function start(){
    RollDiceX();
    RollDice();
}
