const app = document.getElementById('app');
const classArray = ['box', 'center', 'red', 'size200'];
const selectedElement = document.getElementsByClassName('selected');
let id = 0;

/**
 * function to create new starter box, true to copy selected False to generate new box
 */
function createSBox () {
    const baseElement = document.createElement('div');
    baseElement.setAttribute('id', "box" + id);
    for (let i = 0; i < classArray.length; i++) {
        baseElement.classList.add(classArray[i]);
    }
    baseElement.addEventListener("mousedown", () => {
        if (baseElement.classList.contains('selected')) {
            baseElement.classList.remove('selected');
        } else {
            baseElement.classList.add('selected');
        }
    });
    baseElement.addEventListener("dblclick", () => {
        baseElement.classList.add("removed");
        baseElement.style.width = "0px";
        baseElement.style.height = "0px";
    });
    baseElement.addEventListener("transitionend", () => {
        baseElement.remove();
    });

    app.append(baseElement);
    id += 1;
}

/**
 * functio nto get screen size
 */
function getScreenSize () {
    const bodyWidth = document.body.clientWidth - 50;
    const bodyHeight = document.body.clientHeight - 50;
    const randPosX = Math.floor((Math.random() * bodyWidth));
    const randPosY = Math.floor((Math.random() * bodyHeight));
    return [randPosX, randPosY];
}

/**
 * function to change box shape
 */
function changeShape () {
    for (let i = 0; i < selectedElement.length; i++) {
        if (selectedElement[i].classList.contains('circle')) {
            selectedElement[i].classList.remove('circle');
        } else {
            selectedElement[i].classList.add('circle');
        }
    }
}

/**
 * function to resize box
 * @param {string} value get preed key if w box will be bigger and if q box will be smaller
 */
function resizeSelected (value) {
    for (let i = 0; i < selectedElement.length; i++) {
        let sizeW = document.querySelector('.selected').offsetWidth;
        let sizeH = document.querySelector('.selected').offsetHeight;
        if (value === 'w') {
            sizeW += 10;
            sizeH += 10;
            selectedElement[i].style.width = sizeW + "px";
            selectedElement[i].style.height = sizeH + "px";
        } else {
            sizeW -= 10;
            sizeH -= 10;
            selectedElement[i].style.height = sizeH + "px";
            selectedElement[i].style.width = sizeW + "px";
            if (sizeH & sizeW <= 10) {
                document.querySelector('.selected').remove();
            }
        }
    }
}

/**
 * function to move box
 * @param {string} inputKey get the arow key
 */
function moveBox (inputKey) {
    const box = document.querySelectorAll('.selected');
    const moveBy = 10;
    box.forEach(box => {
        switch (inputKey) {
            case 'ArrowLeft':
                box.style.left = parseInt(box.getBoundingClientRect().left) - moveBy + 'px';
                break;
            case 'ArrowRight':
                box.style.left = parseInt(box.getBoundingClientRect().right) + moveBy + 'px';
                break;
            case 'ArrowUp':
                box.style.top = parseInt(box.getBoundingClientRect().top) - moveBy + 'px';
                break;
            case 'ArrowDown':
                box.style.top = parseInt(box.getBoundingClientRect().bottom) + moveBy + 'px';
                break;
        }
    });
}

/**
 * function to change color on selected
 */
function randomColor () {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    for (let i = 0; i < selectedElement.length; i++) {
        selectedElement[i].style.backgroundColor = "#" + color;
    }
}
/**
 * function to copy selected box
 */
function copySelected () {
    const boxClass = [];
    if (selectedElement.length > 0) {
        for (let i = 0; i < selectedElement.length; i++) {
            for (let l = 0; l < selectedElement[i].classList.length; l++) {
                boxClass.push(selectedElement[i].classList[l]);
            }
        }
        const boxCount = selectedElement.length;
        for (let d = 0; d < boxCount; d++) {
            const newBox = document.createElement('div');
            for (let k = 0; k < boxClass.length; k++) {
                newBox.classList.add(boxClass[k]);
            }
            newBox.style.top = getScreenSize()[1] + "px";
            newBox.style.left = getScreenSize()[0] + "px";
            newBox.style.backgroundColor = selectedElement[0].style.backgroundColor;
            newBox.addEventListener("mousedown", () => {
                if (newBox.classList.contains('selected')) {
                    newBox.classList.remove('selected');
                } else {
                    newBox.classList.add('selected');
                }
            });
            newBox.addEventListener("dblclick", () => {
                newBox.classList.add("removed");
                newBox.style.width = "0px";
                newBox.style.height = "0px";
            });
            newBox.addEventListener("transitionend", () => {
                newBox.remove();
            });

            app.append(newBox);
        }
    }
}

/**
 * function to remove all selected box
 */
function deleteSelected () {
    const boxes = document.querySelectorAll('.selected');
    boxes.forEach(box => {
        box.remove();
    });
}

/**
 * function to selecte all box
 */
function unSelectElement () {
    for (let i = 0; i < app.children.length; i++) {
        app.children[i].classList.remove('selected');
    }
}

/**
 * function to unselect all box
 */
function selectAll () {
    for (let i = 0; i < app.children.length; i++) {
        app.children[i].classList.add('selected');
    }
}

/**
 * function to create randomize box
 */
function createRandomBox () {
    const newBox = document.createElement('div');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomNumber = Math.floor(Math.random() * 3);
    for (let k = 0; k < classArray.length; k++) {
        newBox.classList.add(classArray[k]);
    }
    newBox.classList.remove('red');
    newBox.classList.remove('moving');
    newBox.style.top = getScreenSize()[1] + "px";
    newBox.style.left = getScreenSize()[0] + "px";
    newBox.style.backgroundColor = "#" + randomColor;
    if (randomNumber === 1) {
        newBox.classList.add('circle');
    }
    newBox.addEventListener("mousedown", () => {
        if (newBox.classList.contains('selected')) {
            newBox.classList.remove('selected');
        } else {
            newBox.classList.add('selected');
        }
    });
    newBox.addEventListener("dblclick", () => {
        newBox.classList.add("removed");
        newBox.style.width = "0px";
        newBox.style.height = "0px";
    });
    newBox.addEventListener("transitionend", () => {
        newBox.remove();
    });
    app.append(newBox);
}

/**
 * function to rotate selected box
 */
function rotateSelected () {
    for (let i = 0; i < selectedElement.length; i++) {
        if (selectedElement[i].classList.contains('rotate')) {
            selectedElement[i].classList.remove('rotate');
        } else {
            selectedElement[i].classList.add('rotate');
        }
    }
}

export default { createSBox, rotateSelected, changeShape, resizeSelected, moveBox, randomColor, deleteSelected, unSelectElement, selectAll, copySelected, createRandomBox };
