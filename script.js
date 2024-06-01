let player_turn = true;

function checker() {
    const buttons = document.querySelectorAll("button");
    if (buttons[0].innerText === buttons[1].innerText && buttons[1].innerText === buttons[2].innerText && buttons[2].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
    else if (buttons[3].innerText === buttons[4].innerText && buttons[4].innerText === buttons[5].innerText && buttons[4].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
    else if (buttons[6].innerText === buttons[7].innerText && buttons[7].innerText === buttons[8].innerText && buttons[8].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
    else if (buttons[0].innerText === buttons[3].innerText && buttons[3].innerText === buttons[6].innerText && buttons[6].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
    else if (buttons[1].innerText === buttons[4].innerText && buttons[4].innerText === buttons[7].innerText && buttons[4].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
    else if (buttons[2].innerText === buttons[5].innerText && buttons[5].innerText === buttons[8].innerText && buttons[2].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
    else if (buttons[0].innerText === buttons[4].innerText && buttons[4].innerText === buttons[8].innerText && buttons[4].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
    else if (buttons[2].innerText === buttons[4].innerText && buttons[4].innerText === buttons[6].innerText && buttons[2].innerText !== "") {
        if (player_turn) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
    }
}

function clicked(button_number) {
    let b = document.querySelector(button_number);
    if (!b.innerText) {
        if (player_turn) {
            player_turn = false;
            b.innerText = "X";
            document.querySelector("p").innerHTML = "Player 2's Turn";
        }
        else {
            player_turn = true;
            b.innerText = "O";
            document.querySelector("p").innerHTML = "Player 1's Turn";
        }
    }
    checker();
}
