let player1PosY = 50;
let player1PosX = 50;
let player2PosY = 50;
let player2PosX = 50;
let targetPosY = 50;
let targetPosX = 50;
let scoreplayer1 = 0;
let scoreplayer2 = 0;
let sizeplayer1 = 50;
let sizeplayer2 = 50;

document.body.onkeydown = function(e){

    if(e.keyCode == 38){
        player1PosY--;
        console.log(player1PosY);
        document.getElementById("player1").style.top = player1PosY + "%";
    }else if(e.keyCode == 40){
        player1PosY++;
        console.log(player1PosY);
        document.getElementById("player1").style.top = player1PosY + "%";
    }else if(e.keyCode == 37){
        player1PosX--;
        console.log(player1PosX);
        document.getElementById("player1").style.left = player1PosX + "%";
    }else if(e.keyCode == 39){
        player1PosX++;
        console.log(player1PosX);
        document.getElementById("player1").style.left = player1PosX + "%";
    }


    if(e.keyCode == 87){
        player2PosY--;
        console.log(player2PosY);
        document.getElementById("player2").style.top = player2PosY + "%";
    }else if(e.keyCode == 83){
        player2PosY++;
        console.log(player2PosY);
        document.getElementById("player2").style.top = player2PosY + "%";
    }else if(e.keyCode == 65){
        player2PosX--;
        console.log(player2PosX);
        document.getElementById("player2").style.left = player2PosX + "%";
    }else if(e.keyCode == 68){
        player2PosX++;
        console.log(player2PosX);
        document.getElementById("player2").style.left = player2PosX + "%";
    }

    check();
}

function target() {
    targetPosY = Math.floor(Math.random() * 100);
    targetPosX = Math.floor(Math.random() * 100);
    document.getElementById("target").style.top = targetPosY + "%";
    document.getElementById("target").style.left = targetPosX + "%";
}

target();

function check() {
    if(player1PosX == targetPosX && player1PosY == targetPosY){
        target();
        scoreplayer1++;
        sizeplayer1++;
        document.getElementById("player1score").textContent = scoreplayer1;
        document.getElementById("player1").style.width = sizeplayer1 + "px";
        document.getElementById("player1").style.height = sizeplayer1 + "px";
        if(scoreplayer1 == 10){
            alert("Player 1 wins! Good job")
            location.reload()
        }
    }else if(player2PosX == targetPosX && player2PosY == targetPosY) {
        target();
        scoreplayer2++;
        sizeplayer2++;
        document.getElementById("player2score").textContent = scoreplayer2;
        document.getElementById("player2").style.width = sizeplayer2 + "px";
        document.getElementById("player2").style.height = sizeplayer2 + "px";
        if(scoreplayer2 == 10){
            alert("Player 2 wins! Good job")
            location.reload()
        }
    }
}