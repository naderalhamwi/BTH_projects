/**
 * @module Tipsfrågor
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
    footerHandler();
    headerHandler(score);
    qustionDataHandler(score);
    document.getElementById("body").innerHTML = "";
    document.getElementById("body").classList.remove('index');
    document.getElementById("app").classList.add('testContainer');
    document.getElementById("infoText").innerText = "Testen handlar om att en frågan visas upp i webbsidan. Testpersonen svarar på frågan och får därefter direkt se det rätta svaret. Sedan kan testpersonen välja att gå vidare till nästa fråga.Testpersonen samlar poäng i varje deltest.";
    document.getElementById("info").style.display = "block";
}

/**
 * This function fetch quitions from a GitHub repository. 
 * [Chek i out here]{@link https://raw.githubusercontent.com/naderalhamwi/API_DATA/main/data.json}
 * @returns {JSON} A json objekt that containing quations for the test.
 */
async function fetchQustionJson () {
    try {
        const res = await fetch('https://raw.githubusercontent.com/naderalhamwi/API_DATA/main/data.json');
        if (!res.ok) {
            throw new Error('Bad response', {
                cause: {
                    res
                }
            });
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

/**
 * This function take over updaiting and creaiting the header.
 * @param {Int} score
 */
function headerHandler (score) {
    const documentHeader = document.getElementById("header");
    const headerText = document.createElement('p');
    const testInfo = document.createElement('p');

    testInfo.innerText = "About";
    testInfo.addEventListener('click', () => {
        document.getElementById("info").style.display = "block";
    });

    documentHeader.innerHTML = "";
    headerText.innerText = "poäng: " + score;
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
        sessionStorage.removeItem('rätt svar');
        window.location.reload();
    });

    nextButoon.innerText = "Nästa fråga";
    nextButoon.addEventListener('click', () => {
        nextQuition();
    });

    documentFooter.append(nextButoon, quitButoon);
}

/**
 * This funtion take care to show the next quition to user.
 */
function nextQuition () {
    document.getElementById('body').innerHTML = "";
    document.getElementById('footer').innerHTML = "";
    const score = Number(sessionStorage.getItem('score'));
    headerHandler(score);
    qustionDataHandler(score);
    footerHandler();
}

/**
 * This function is where alla the magic hapend.
 * @param {Int} score Represent the currnet score.
 */
function qustionDataHandler (score) {
    fetchQustionJson().then((data) => {
        const p = document.createElement('p');
        p.innerText = "loading...";
        p.setAttribute("id", "loader");
        document.getElementById('body').append(p);
        setTimeout(() => {
            if (document.getElementById("loader")) {
                document.getElementById("loader").remove();
            }
            const radnomNumber = Math.round(Math.random() * 9);
            const array1 = data.Tipsfrågor[radnomNumber].svar.fel;
            const array2 = data.Tipsfrågor[radnomNumber].svar.rätt;

            const p = document.createElement('p');
            p.innerText = data.Tipsfrågor[radnomNumber].title;

            sessionStorage.setItem("rätt svar", array2[0]);

            const number = [Math.round(Math.random() * array1.length) + 1, Math.floor(Math.random() * array1.length) - 1];

            array1.splice(number[Math.round(Math.random() * number.length)], 0, array2[0]);

            document.getElementById('body').append(p);

            for (let i = 0; i < array1.length; i++) {
                const button = document.createElement('button');
                button.innerText = i + 1 + ") " + array1[i];
                button.setAttribute('value', array1[i]);
                button.setAttribute('id', array1[i]);
                button.addEventListener('click', (e) => {
                    if (e.target.value === sessionStorage.getItem('rätt svar')) {
                        score += 1;
                        e.target.classList.add('correct');
                        e.target.innerText += " ' Du valde rätt svar! '";
                        document.getElementById('body').childNodes.forEach(element => {
                            element.disabled = true;
                        });
                        if (sessionStorage.getItem('score')) {
                            sessionStorage.setItem('score', score);
                            headerHandler(score);
                        } else {
                            sessionStorage.setItem('score', score);
                            headerHandler(score);
                        }
                    } else {
                        document.getElementById('body').childNodes.forEach(element => {
                            element.disabled = true;
                        });
                        if (score !== 0) {
                            score -= 1;
                        }
                        e.target.classList.add('inCorrect');
                        e.target.innerText += " ' Du valde fel svar! '";
                        document.getElementById(sessionStorage.getItem('rätt svar')).classList.add('correct');
                        document.getElementById(sessionStorage.getItem('rätt svar')).innerText += " ' Rätt svar! '";
                        if (sessionStorage.getItem('score')) {
                            sessionStorage.setItem('score', score);
                            headerHandler(score);
                        } else {
                            sessionStorage.setItem('score', score);
                            headerHandler(score);
                        }
                    }
                });
                document.getElementById('body').append(button);
            }
        }, 500);
    });
}

export { main };
