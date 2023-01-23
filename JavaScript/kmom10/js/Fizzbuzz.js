/**
 * @module FizzBuzz
 */

/**
 * Main function that run the aplication
 */
function main () {
    let score;
    if (sessionStorage.getItem('score')) {
        score = Number(sessionStorage.getItem('score'));
    } else {
        score = 0;
        sessionStorage.setItem('score', score);
    }
    bodyHandler();
    headerHandler(score);
    footerHandler();
    document.getElementById("body").innerHTML = "";
    document.getElementById("body").classList.remove('index');
    document.getElementById("app").classList.add('testContainer');
    document.getElementById("infoText").innerText = "På detta testet så visas upp en sekvens av spelet FizzBuzz. Testpersonen skall gissa på nästa siffra i sekvensen genom att klicka på en av flera alternativa svar. När testpersonen klickat på svaret så visas det rätta svaret tillsammans med en länk till nästa test. Rätt klick ger 1 poäng och fel ger -1 poäng.";
    document.getElementById("info").style.display = "block";
}

/**
 * This function take over updaiting and creaiting the header.
 * @param {Int} score Represent the currnet score
 */
function headerHandler (score) {
    const documentHeader = document.getElementById("header");
    documentHeader.innerHTML = "";

    const headerText = document.createElement('p');
    const testInfo = document.createElement('p');
    headerText.setAttribute('id', 'score');

    if (sessionStorage.getItem('score')) {
        headerText.innerText = "poäng: " + score;
    } else {
        sessionStorage.setItem('score', score);
        headerText.innerText = "poäng: " + 0;
    }

    testInfo.innerText = "About";
    testInfo.addEventListener('click', () => {
        document.getElementById("info").style.display = "block";
    });

    documentHeader.append(headerText, testInfo);
}

/**
 * This function take over updaiting and creaiting the footer.
 */
function footerHandler () {
    const documentFooter = document.getElementById("footer");
    documentFooter.innerHTML = "";
    const quitButoon = document.createElement('button');
    const nextButoon = document.createElement('button');

    quitButoon.innerText = "Avsluta Test";
    quitButoon.addEventListener('click', () => {
        sessionStorage.removeItem('answer');
        window.location.reload();
    });

    nextButoon.innerText = "Nästa fråga";
    nextButoon.addEventListener('click', () => {
        bodyHandler();
    });

    documentFooter.append(nextButoon, quitButoon);
}

/**
 * This function take over updaiting and creaiting the body.
 */
function bodyHandler () {
    document.getElementById('body').innerHTML = "";
    let score = Number(sessionStorage.getItem('score'));

    const p = document.createElement('p');
    p.innerText = "loading...";
    p.setAttribute("id", "loader");
    document.getElementById('body').prepend(p);

    setTimeout(() => {
        if (document.getElementById("loader")) {
            document.getElementById("loader").innerHTML = "";
        }
        const answerList = ['Fizz', 'Buzz', 'FizzBuzz'];
        document.getElementById('body').innerHTML = "";

        const fizz = fizzBuss(3, 5, 101);

        fizz.push('?');
        const p = document.createElement('p');
        p.innerText = fizz.join(', ');
        document.getElementById('body').append(p);

        for (let i = 0; i < answerList.length; i++) {
            const button = document.createElement('button');
            button.innerText = answerList[i];
            button.setAttribute('value', answerList[i]);
            button.setAttribute('id', answerList[i]);
            button.addEventListener('click', (e) => {
                if (e.target.value === sessionStorage.getItem('answer')) {
                    score += 1;
                    headerHandler(score);
                    sessionStorage.setItem('score', score);
                    e.target.classList.add('correct');
                    e.target.innerText += ", Du valde rätt svar!";
                } else {
                    if (score !== 0) {
                        score -= 1;
                    }
                    headerHandler(score);
                    sessionStorage.setItem('score', score);
                    e.target.classList.add('inCorrect');
                    e.target.innerText += ", Du valde fel svar! ";
                    if (document.getElementById(sessionStorage.getItem('answer'))) {
                        document.getElementById(sessionStorage.getItem('answer')).classList.add('correct');
                        document.getElementById(sessionStorage.getItem('answer')).innerText += " ' Rätt svar! '";
                    } else {
                        e.target.innerText += `, Rätt svar är ${sessionStorage.getItem('answer')}`;
                    }
                }
                document.getElementById('body').childNodes.forEach(element => {
                    element.disabled = true;
                });
            });
            document.getElementById('body').append(button);
        }

        const userInput = document.createElement('input');
        userInput.setAttribute('value', 'Type here !');
        userInput.addEventListener('change', (e) => {
            if (e.target.value === sessionStorage.getItem('answer')) {
                score += 1;
                headerHandler(score);
                sessionStorage.setItem('score', score);
                e.target.classList.add('correct');
                e.target.value += ", Du valde rätt svar!";
            } else {
                if (score !== 0) {
                    score -= 1;
                }
                headerHandler(score);
                sessionStorage.setItem('score', score);
                e.target.classList.add('inCorrect');
                e.target.value += ", Du valde fel svar!";
                if (document.getElementById(sessionStorage.getItem('answer'))) {
                    document.getElementById(sessionStorage.getItem('answer')).classList.add('correct');
                    document.getElementById(sessionStorage.getItem('answer')).innerText += " ' Rätt svar! '";
                } else {
                    e.target.value += `, Rätt svar är ${sessionStorage.getItem('answer')}`;
                }
            }
            document.getElementById('body').childNodes.forEach(element => {
                element.disabled = true;
            });
        });
        document.getElementById('body').append(userInput);
    }, 500);
}

/**
 * This function is the base function that create a list that containing the fizzbuzz value.
 * @param {Int} num1 fist number to be divided with.
 * @param {Int} num2 secound number to be divided with.
 * @param {Int} num3 the range of number to loop over.
 * @returns {Array} return a array that showing to user.
 */
function fizzBuss (num1, num2, num3) {
    const baseList = []; // to save a list of numbers betwen 1 and 101.
    const viewList = []; // to save the list with missing last number.

    // A for loop to save result to baseList.
    for (let i = 1; i < num3; i++) {
        if (i % num1 === 0) {
            baseList.push('Fizz');
        } else if (i % num2 === 0) {
            baseList.push('Buzz');
        } else {
            baseList.push(i);
        }
    }

    // This will take a couble of values betwen a numberR and upp to 6 element.
    const numberR = Math.floor((Math.random() * baseList.length));
    for (let l = numberR; l < numberR + 6; l++) {
        viewList.push(l);
    }

    // To save the last value of the array in sesstion storage.
    sessionStorage.setItem('answer', viewList.map(x => baseList[x])[viewList.length - 1]);

    // To remove last element of the viewed array
    viewList.pop();

    // chek if viewList have an undefined value, if have one then it will run the hole program until the viewList donst have an undefined value.
    for (let j = 0; j < viewList.map(x => baseList[x]).length; j++) {
        if (viewList.map(x => baseList[x])[j] === undefined) {
            bodyHandler();
        }
    }

    return viewList.map(x => baseList[x]);
}

export { main };
