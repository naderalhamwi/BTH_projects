const dayTime = document.getElementById("dayTime");
const todayDate = new Date().toISOString().slice(0, 10);
const hours = new Date();
const showScore = document.createElement('p');
const p = document.createElement('p');

if (hours.getHours() > 12) {
    dayTime.innerText = todayDate + " / God eftermiddag";
} else {
    dayTime.innerText = todayDate + " / God förmiddag";
}

function init () {
    if (localStorage.getItem('style')) {
        localStorage.getItem('style').split(',').forEach(element => {
            document.getElementById('app').classList.add(element);
            if (document.getElementById(element)) {
                const elementText = document.createElement('p');
                elementText.innerText = document.getElementById(element).textContent;
                document.getElementById('currentThemeDiv').append(elementText);
            } else {
                const elementText = document.createElement('p');
                elementText.innerText = "default Theme";
                if (document.getElementById('currentThemeDiv')) {
                    document.getElementById('currentThemeDiv').append(elementText);
                }
            }
        });
    } else {
        localStorage.setItem('style', 'defaultTheme');
        location.reload();
    }
} window.onload = init();

function myflaoatingDiv () {
    if (!document.querySelector('.floatingDiv')) {
        const div = document.createElement('div');
        div.classList.add('floatingDiv');
        const moveBy = 150;
        document.addEventListener('keydown', () => {
            if (event.key === 'ArrowUp') {
                div.style.top = parseInt(div.getBoundingClientRect().top) - moveBy + 'px';
                const color = Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = "#" + color;
            } else if (event.key === 'ArrowDown') {
                div.style.top = parseInt(div.getBoundingClientRect().top) + moveBy + 'px';
                const color = Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = "#" + color;
            } else if (event.key === 'ArrowLeft') {
                div.style.left = parseInt(div.getBoundingClientRect().left) - moveBy + 'px';
                const color = Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = "#" + color;
            } else if (event.key === 'ArrowRight') {
                div.style.left = parseInt(div.getBoundingClientRect().left) + moveBy + 'px';
                const color = Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = "#" + color;
            }
        });
        document.body.append(div);
    }
}

function newGame () {
    sessionStorage.setItem("kmom05", 0);

    while (document.getElementById('displayer').firstChild) {
        document.getElementById('displayer').removeChild(document.getElementById('displayer').firstChild);
    }

    document.getElementById('throwingButn').disabled = false;
    p.innerText = "";
}

function throwing () {
    let score = "";
    if (sessionStorage.getItem("kmom05")) {
        score = parseInt(sessionStorage.getItem("kmom05"));
    } else {
        sessionStorage.setItem("kmom05", 0);
        score = parseInt(sessionStorage.getItem("kmom05"));
    }
    const randomNumber = Math.round(Math.random() * (6 - 1) + 1);

    if (randomNumber === 1) {
        score += randomNumber;
        sessionStorage.setItem("kmom05", score);
        p.innerText += " " + randomNumber + " / Game ends!";
        document.getElementById('throwingButn').disabled = true;
    } else {
        score += randomNumber;
        sessionStorage.setItem("kmom05", score);
        p.innerText += " " + randomNumber + " , ";
    }

    showScore.innerText = "Score: " + score;
    document.getElementById('displayer').append(p, showScore);
}
