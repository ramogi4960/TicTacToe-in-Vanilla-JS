let player_turn = true;

function clicked(button_number) {
    let b = document.querySelector(button_number);
    if (!b.innerText) {
        if (player_turn) {
            player_turn = false;
            b.innerText = "X";
        }
        else {
            player_turn = true;
            b.innerText = "O";
        }
    }
}
