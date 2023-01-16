let custumClassList = [];

function allowDrop (ev) {
    ev.preventDefault();
}
function drag (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop (ev) {
    custumClassList = [];
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    for (let i = 0; i < document.getElementById('currentThemeDiv').children.length; i++) {
        if (!custumClassList.includes(document.getElementById('currentThemeDiv').children[i].id)) {
            if (document.getElementById('currentThemeDiv').children[i].id !== "") {
                custumClassList.push(document.getElementById('currentThemeDiv').children[i].id);
            }
        } else {
            custumClassList = [];
        }
    }
}
function saveTheme () {
    if (custumClassList.length !== 0) {
        localStorage.setItem('style', custumClassList);
    }
    location.reload();
}

function resetTheme () {
    custumClassList.push('defaultTheme');
    localStorage.setItem('style', custumClassList);
    location.reload();
}
