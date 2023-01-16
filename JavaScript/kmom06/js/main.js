import { hangman } from "./hangman.js";
const keyboard = document.getElementById("keyboard");
const result = document.getElementById("result");
const statusDiv = document.getElementById("statusDiv");
const massageText = document.getElementById("massageText");
const corectInput = document.createElement('p');
const inCorectInput = document.createElement('p');
let index = 0;
let chosenWord = [];
const unkowingWord = [];

/**
 * Function that run when window loaded.
 */
function init () {
    keyboardDraw();
    randomWord();
    hangman.hideAll(hangman.validParts);
    chosenWord = sessionStorage.getItem("chosenWord").toUpperCase().split('');
    corectInput.innerText = unkowingWord.join('');
    result.append(corectInput);
    statusDiv.style.display = "none";
}window.onload = init();

/**
 * Function to draw the input keyboard for user
 */
function keyboardDraw () {
    const alphabet = [
        "A", "B", "C",
        "D", "E", "F",
        "G", "H", "I",
        "J", "K", "L",
        "M", "N", "O",
        "P", "Q", "R",
        "S", "T", "U",
        "V", "W", "X",
        "Y", "Z", "Ä",
        "Ö", "Å"];

    for (let i = 0; i < alphabet.length; i++) {
        const button = document.createElement('button');
        button.value = alphabet[i];
        button.innerText = alphabet[i];
        button.addEventListener("click", () => {
            button.disabled = true;
            chekIfIncluded(button.value);
        });
        keyboard.append(button);
    }
}

/**
 * Function to chodse random word from wordList.
 */
function randomWord () {
    const wordList = hangman.wordList();
    const randomNumber = Math.round(Math.random() * 5);
    sessionStorage.setItem("chosenWord", wordList[randomNumber]);

    for (let i = 0; i < wordList[randomNumber].split('').length; i++) {
        unkowingWord.push('-');
    }
}

/**
 * Function to cheh if user input is include in chosen word.
 * @param {String} input are the input alphabet from user.
 */
function chekIfIncluded (input) {
    if (!chosenWord.includes(input)) {
        hangman.show(hangman.validParts[index]);
        index += 1;
        inCorectInput.innerText += input;
        result.append(inCorectInput);
        if (index === hangman.validParts.length) {
            displayMassage("false");
            const childNodes = document.getElementById("keyboard").getElementsByTagName('*');
            for (const node of childNodes) {
                node.disabled = true;
            }
        }
    } else {
        unkowingWord[chosenWord.indexOf(input)] = input;
        corectInput.innerText = unkowingWord.join('');
        result.append(corectInput);
        if (!unkowingWord.includes('-')) {
            displayMassage("true");
            const childNodes = document.getElementById("keyboard").getElementsByTagName('*');
            for (const node of childNodes) {
                node.disabled = true;
            }
        }
    }
}

/**
 * Function to display result massage to user when the game is finished.
 * @param {String} status are for chek if user won ore lose the game.
 */
function displayMassage (status) {
    if (status === "true") {
        massageText.innerText = "You Won The Game!";
        statusDiv.style.backgroundColor = "green";
    } else if (status === "false") {
        massageText.innerText = "Game Over!, right word is: " + chosenWord.join('');
        statusDiv.style.backgroundColor = "red";
    }

    statusDiv.style.display = "block";
}
