/**
 * @module Main
 */
import * as Tipsfrågor from "./Tipsfrågor.js";
import * as Fizzbuzz from "./Fizzbuzz.js";

/**
 * This function is the base function for this application. 
 */
function indexPage () {
    const appBody = document.getElementById('body');
    const appFooter = document.getElementById('footer');
    const testList = ['Tipsfrågor', 'Fizzbuzz'];

    const infoHeaderText = document.createElement('h1');
    infoHeaderText.innerText = "Välkommen till min testverktyg";

    const infoBodyText = document.createElement('p');
    infoBodyText.innerText = "Testverktyget handlar om några intelligent tester som man kan utföra för och se hur intelligent  är man. \n\n Det är två tester som du kan välja på, den första är Tipsfrågor där du får en fråga och några svar och du ska välja den rätta svaret beroande på din svar så kan du få en poäng för rätt svar och -1 poäng för fel svar. \n\n Den andra testen är en sekvens av spelet FizzBuzz, där får du en lista av slumpade värde och du ska gissa den sista värde och beroande på din svar så kan du få en poäng för rätt svar och -1 poäng för fel svar.";

    appBody.classList.add('index');
    appBody.append(infoHeaderText, infoBodyText);

    for (let i = 0; i < testList.length; i++) {
        const button = document.createElement('button');
        button.innerText = testList[i];
        if (testList[i] === "Tipsfrågor") {
            button.addEventListener('click', () => {
                Tipsfrågor.main();
            });
        } else {
            button.addEventListener('click', () => {
                Fizzbuzz.main();
            });
        }
        appBody.append(button);
    }

    if (Number(sessionStorage.getItem('score')) > 0) {
        const p = document.createElement('p');
        p.innerText = "Din totala poäng är: " + sessionStorage.getItem('score');
        const button = document.createElement('button');
        button.innerText = "Rensa poäng";
        button.addEventListener('click', () => {
            sessionStorage.setItem('score', 0);
            appFooter.innerHTML = "";
        });
        appFooter.append(p, button);
    }
} window.onload = indexPage();
