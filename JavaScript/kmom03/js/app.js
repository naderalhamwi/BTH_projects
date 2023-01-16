/**
 * Är den root elementet som allt ska ligga i
 * @constant
 * @type {Element}
*/
const app = document.getElementById('app');

/**
 * Counter för att holla koll på rätt object i listor
 * @type {int}
 */
let counter = 0;

/**
 * En knapp som skapas med DOM
 * @type {Element}
 */
const nextButton = document.createElement('button');
nextButton.setAttribute('class', 'center');
nextButton.setAttribute('onclick', 'showNext()');
nextButton.innerText = "Display " + data()[1][0] + " card";

app.append(nextButton);

/*
 * Function som kontrellar vilken kort som ska visas nästa
 */
function showNext () {
    if (counter === 6) {
        app.removeChild(nextButton);
        appendCard(counter);
    } else {
        appendCard(counter);
        counter++;
        nextButton.innerText = "Display " + data()[1][counter] + " card";
    }
}

/**
 * Function till att lägga nytt kort på root elementen app
 * @param {int} id id of currnet card
 */
function appendCard (id) {
    const card = document.createElement('div');
    const headerText = document.createElement('p');
    const img = document.createElement('img');
    const dateText = document.createElement('p');

    card.style.backgroundColor = data()[0][id];
    card.classList.add("card", 'hover');

    headerText.innerText = data()[1][id];
    img.setAttribute('src', 'img/logo.png');
    dateText.innerText = data()[2][id];

    card.addEventListener('mousedown', () => {
        card.append(headerText, img, dateText);
        card.classList.remove('hover');
        card.classList.add('cardBorder');
    });

    app.append(card);
}
