// find the array that carries all button objects of the game
const all_buttons = document.querySelectorAll("#the-game button")
/*
Functions required:
Clicking function on all buttons.
Winner function for finding a winner.
 */


// switch (true) {
        //     case (values[0] === values[1] && values[1] === values[2] && values[2] !== ""): return true;
        //     case (values[3] === values[4] && values[4] === values[5] && values[5] !== ""): return true;
        //     case (values[6] === values[7] && values[7] === values[8] && values[8] !== ""): return true;
        //     case (values[0] === values[3] && values[3] === values[6] && values[6] !== ""): return true;
        //     case (values[1] === values[4] && values[4] === values[7] && values[7] !== ""): return true;
        //     case (values[2] === values[5] && values[5] === values[8] && values[8] !== ""): return true; 
        //     case (values[0] === values[4] && values[4] === values[8] && values[8] !== ""): return true;
        //     case (values[2] === values[4] && values[4] === values[6] && values[6] !== ""): return true;
        //     default: return false;
        // }

let player_turn = true;

// function for checking if there's a winner
function winner() {
    const values = [];
    for (let item of all_buttons) {
        values.push(item.innerText);
    }
    if (values[0] === values[1] && values[1] === values[2] && values[2] !== "") { return true}
    else if (values[3] === values[4] && values[4] === values[5] && values[5] !== "") { return true}
    else if (values[6] === values[7] && values[7] === values[8] && values[8] !== "") { return true}
    else if (values[0] === values[3] && values[3] === values[6] && values[6] !== "") { return true}
    else if (values[1] === values[4] && values[4] === values[7] && values[7] !== "") { return true}
    else if (values[2] === values[5] && values[5] === values[8] && values[8] !== "") { return true}
    else if (values[0] === values[4] && values[4] === values[8] && values[8] !== "") { return true}
    else if (values[2] === values[4] && values[4] === values[6] && values[6] !== "") { return true}
    return false;
}

// function for what happens when you click on a button
function clicking(button_id) {
    let id = Number(button_id[button_id.length - 1]);
    if (player_turn) {
        all_buttons[id - 1].innerHTML = "X";
        if (winner()) {
            let the_game = document.querySelector("#the-game");
            the_game.innerHTML = `
            <h1 id="win">Player 1 wins</h1>
            `;
            document.querySelector("#the-game").style.display = "block";
        }
        player_turn = false
        document.querySelector("h1").innerText = "Player 2's Turn";
    } else {
        all_buttons[id - 1].innerHTML = "O";
        if (winner()) {
            let the_game = document.querySelector("#the-game");
            the_game.innerHTML = `
            <h1 id="win">Player 2 wins</h1>
            `;
            document.querySelector("#the-game").style.display = "block";
        }
        player_turn = true;
        document.querySelector("h1").innerText = "Player 1's Turn";
    }
}

function reset() {
    for (let item of all_buttons) {
        item.innerText = "";
    }
    let x = document.querySelector("#the-game");
    // x.innerText = '';
    x.innerHTML = `
    <button id="button1" onclick="clicking('button1')"></buttton>
            <button id="button2" onclick="clicking('button2')"></buttton>
            <button id="button3" onclick="clicking('button3')"></buttton>
            <button id="button4" onclick="clicking('button4')"></buttton>
            <button id="button5" onclick="clicking('button5')"></buttton>
            <button id="button6" onclick="clicking('button6')"></buttton>
            <button id="button7" onclick="clicking('button7')"></buttton>
            <button id="button8" onclick="clicking('button8')"></buttton>
            <button id="button9" onclick="clicking('button9')"></buttton>
    `;
    x.style.display = "grid";
    
}
document.querySelector("#reset").addEventListener("click", reset);