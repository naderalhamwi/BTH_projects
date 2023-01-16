/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./kmom04/js/app.js":
/*!**************************!*\
  !*** ./kmom04/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createSBox, rotateSelected, changeShape, resizeSelected, moveBox, randomColor, deleteSelected, unSelectElement, selectAll, copySelected, createRandomBox });


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./kmom04/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./kmom04/js/app.js");


/**
 * function that run when window load, to create base box and add event listener to document
 *
 */
function init () {
    _app__WEBPACK_IMPORTED_MODULE_0__["default"].createSBox();
    document.onkeydown = (event) => {
        if (event.isComposing || event.key === 'e') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].changeShape();
        } else if (event.isComposing || event.key === 'w' || event.key === 'q') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].resizeSelected(event.key);
        } else if (event.isComposing || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].moveBox(event.key);
        } else if (event.isComposing || event.key === 'r') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].randomColor();
        } else if (event.isComposing || event.key === 'y') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].deleteSelected();
        } else if (event.isComposing || event.key === 'u') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].unSelectElement();
        } else if (event.isComposing || event.key === 'i') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].selectAll();
        } else if (event.isComposing || event.key === 't') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].copySelected();
        } else if (event.isComposing || event.key === 'p') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].createRandomBox();
        } else if (event.isComposing || event.key === 'n') {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].rotateSelected();
        }
    };
} window.onload = init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BELDRCQUE0Qix5Q0FBeUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSwwSkFBMEosRUFBQzs7Ozs7OztVQzNPNUs7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQXNCO0FBQzFCO0FBQ0E7QUFDQSxZQUFZLHdEQUF1QjtBQUNuQyxVQUFVO0FBQ1YsWUFBWSwyREFBMEI7QUFDdEMsVUFBVTtBQUNWLFlBQVksb0RBQW1CO0FBQy9CLFVBQVU7QUFDVixZQUFZLHdEQUF1QjtBQUNuQyxVQUFVO0FBQ1YsWUFBWSwyREFBMEI7QUFDdEMsVUFBVTtBQUNWLFlBQVksNERBQTJCO0FBQ3ZDLFVBQVU7QUFDVixZQUFZLHNEQUFxQjtBQUNqQyxVQUFVO0FBQ1YsWUFBWSx5REFBd0I7QUFDcEMsVUFBVTtBQUNWLFlBQVksNERBQTJCO0FBQ3ZDLFVBQVU7QUFDVixZQUFZLDJEQUEwQjtBQUN0QztBQUNBO0FBQ0EsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbmVyYWwvLi9rbW9tMDQvanMvYXBwLmpzIiwid2VicGFjazovL2dlbmVyYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VuZXJhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2VuZXJhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbmVyYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW5lcmFsLy4va21vbTA0L2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuY29uc3QgY2xhc3NBcnJheSA9IFsnYm94JywgJ2NlbnRlcicsICdyZWQnLCAnc2l6ZTIwMCddO1xuY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKTtcbmxldCBpZCA9IDA7XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBzdGFydGVyIGJveCwgdHJ1ZSB0byBjb3B5IHNlbGVjdGVkIEZhbHNlIHRvIGdlbmVyYXRlIG5ldyBib3hcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU0JveCAoKSB7XG4gICAgY29uc3QgYmFzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYXNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJib3hcIiArIGlkKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmFzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0FycmF5W2ldKTtcbiAgICB9XG4gICAgYmFzZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChiYXNlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIGJhc2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYmFzZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYmFzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbW92ZWRcIik7XG4gICAgICAgIGJhc2VFbGVtZW50LnN0eWxlLndpZHRoID0gXCIwcHhcIjtcbiAgICAgICAgYmFzZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcbiAgICB9KTtcbiAgICBiYXNlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgIGJhc2VFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgYXBwLmFwcGVuZChiYXNlRWxlbWVudCk7XG4gICAgaWQgKz0gMTtcbn1cblxuLyoqXG4gKiBmdW5jdGlvIG50byBnZXQgc2NyZWVuIHNpemVcbiAqL1xuZnVuY3Rpb24gZ2V0U2NyZWVuU2l6ZSAoKSB7XG4gICAgY29uc3QgYm9keVdpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIDUwO1xuICAgIGNvbnN0IGJvZHlIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDUwO1xuICAgIGNvbnN0IHJhbmRQb3NYID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIGJvZHlXaWR0aCkpO1xuICAgIGNvbnN0IHJhbmRQb3NZID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIGJvZHlIZWlnaHQpKTtcbiAgICByZXR1cm4gW3JhbmRQb3NYLCByYW5kUG9zWV07XG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gY2hhbmdlIGJveCBzaGFwZVxuICovXG5mdW5jdGlvbiBjaGFuZ2VTaGFwZSAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZEVsZW1lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEVsZW1lbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY2lyY2xlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZEVsZW1lbnRbaV0uY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gcmVzaXplIGJveFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIGdldCBwcmVlZCBrZXkgaWYgdyBib3ggd2lsbCBiZSBiaWdnZXIgYW5kIGlmIHEgYm94IHdpbGwgYmUgc21hbGxlclxuICovXG5mdW5jdGlvbiByZXNpemVTZWxlY3RlZCAodmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkRWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2l6ZVcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHNpemVIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBpZiAodmFsdWUgPT09ICd3Jykge1xuICAgICAgICAgICAgc2l6ZVcgKz0gMTA7XG4gICAgICAgICAgICBzaXplSCArPSAxMDtcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudFtpXS5zdHlsZS53aWR0aCA9IHNpemVXICsgXCJweFwiO1xuICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50W2ldLnN0eWxlLmhlaWdodCA9IHNpemVIICsgXCJweFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZVcgLT0gMTA7XG4gICAgICAgICAgICBzaXplSCAtPSAxMDtcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudFtpXS5zdHlsZS5oZWlnaHQgPSBzaXplSCArIFwicHhcIjtcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudFtpXS5zdHlsZS53aWR0aCA9IHNpemVXICsgXCJweFwiO1xuICAgICAgICAgICAgaWYgKHNpemVIICYgc2l6ZVcgPD0gMTApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBmdW5jdGlvbiB0byBtb3ZlIGJveFxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0S2V5IGdldCB0aGUgYXJvdyBrZXlcbiAqL1xuZnVuY3Rpb24gbW92ZUJveCAoaW5wdXRLZXkpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKTtcbiAgICBjb25zdCBtb3ZlQnkgPSAxMDtcbiAgICBib3guZm9yRWFjaChib3ggPT4ge1xuICAgICAgICBzd2l0Y2ggKGlucHV0S2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQoYm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpIC0gbW92ZUJ5ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQoYm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0KSArIG1vdmVCeSArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICBib3guc3R5bGUudG9wID0gcGFyc2VJbnQoYm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkgLSBtb3ZlQnkgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICBib3guc3R5bGUudG9wID0gcGFyc2VJbnQoYm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSkgKyBtb3ZlQnkgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gY2hhbmdlIGNvbG9yIG9uIHNlbGVjdGVkXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yICgpIHtcbiAgICBjb25zdCBjb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZEVsZW1lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50W2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI1wiICsgY29sb3I7XG4gICAgfVxufVxuLyoqXG4gKiBmdW5jdGlvbiB0byBjb3B5IHNlbGVjdGVkIGJveFxuICovXG5mdW5jdGlvbiBjb3B5U2VsZWN0ZWQgKCkge1xuICAgIGNvbnN0IGJveENsYXNzID0gW107XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRFbGVtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHNlbGVjdGVkRWxlbWVudFtpXS5jbGFzc0xpc3QubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICBib3hDbGFzcy5wdXNoKHNlbGVjdGVkRWxlbWVudFtpXS5jbGFzc0xpc3RbbF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJveENvdW50ID0gc2VsZWN0ZWRFbGVtZW50Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCBib3hDb3VudDsgZCsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYm94Q2xhc3MubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBuZXdCb3guY2xhc3NMaXN0LmFkZChib3hDbGFzc1trXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdCb3guc3R5bGUudG9wID0gZ2V0U2NyZWVuU2l6ZSgpWzFdICsgXCJweFwiO1xuICAgICAgICAgICAgbmV3Qm94LnN0eWxlLmxlZnQgPSBnZXRTY3JlZW5TaXplKClbMF0gKyBcInB4XCI7XG4gICAgICAgICAgICBuZXdCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2VsZWN0ZWRFbGVtZW50WzBdLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIG5ld0JveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV3Qm94LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdCb3guY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdCb3guY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld0JveC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld0JveC5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlZFwiKTtcbiAgICAgICAgICAgICAgICBuZXdCb3guc3R5bGUud2lkdGggPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgIG5ld0JveC5zdHlsZS5oZWlnaHQgPSBcIjBweFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdCb3guYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld0JveC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhcHAuYXBwZW5kKG5ld0JveCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCBzZWxlY3RlZCBib3hcbiAqL1xuZnVuY3Rpb24gZGVsZXRlU2VsZWN0ZWQgKCkge1xuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XG4gICAgYm94ZXMuZm9yRWFjaChib3ggPT4ge1xuICAgICAgICBib3gucmVtb3ZlKCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gc2VsZWN0ZSBhbGwgYm94XG4gKi9cbmZ1bmN0aW9uIHVuU2VsZWN0RWxlbWVudCAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXBwLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIGZ1bmN0aW9uIHRvIHVuc2VsZWN0IGFsbCBib3hcbiAqL1xuZnVuY3Rpb24gc2VsZWN0QWxsICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcHAuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9XG59XG5cbi8qKlxuICogZnVuY3Rpb24gdG8gY3JlYXRlIHJhbmRvbWl6ZSBib3hcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmFuZG9tQm94ICgpIHtcbiAgICBjb25zdCBuZXdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByYW5kb21Db2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBjbGFzc0FycmF5Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgIG5ld0JveC5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlba10pO1xuICAgIH1cbiAgICBuZXdCb3guY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgbmV3Qm94LmNsYXNzTGlzdC5yZW1vdmUoJ21vdmluZycpO1xuICAgIG5ld0JveC5zdHlsZS50b3AgPSBnZXRTY3JlZW5TaXplKClbMV0gKyBcInB4XCI7XG4gICAgbmV3Qm94LnN0eWxlLmxlZnQgPSBnZXRTY3JlZW5TaXplKClbMF0gKyBcInB4XCI7XG4gICAgbmV3Qm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI1wiICsgcmFuZG9tQ29sb3I7XG4gICAgaWYgKHJhbmRvbU51bWJlciA9PT0gMSkge1xuICAgICAgICBuZXdCb3guY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgfVxuICAgIG5ld0JveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICAgICAgaWYgKG5ld0JveC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIG5ld0JveC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Qm94LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBuZXdCb3guYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbmV3Qm94LmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICAgICAgICBuZXdCb3guc3R5bGUud2lkdGggPSBcIjBweFwiO1xuICAgICAgICBuZXdCb3guc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcbiAgICB9KTtcbiAgICBuZXdCb3guYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICBuZXdCb3gucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgYXBwLmFwcGVuZChuZXdCb3gpO1xufVxuXG4vKipcbiAqIGZ1bmN0aW9uIHRvIHJvdGF0ZSBzZWxlY3RlZCBib3hcbiAqL1xuZnVuY3Rpb24gcm90YXRlU2VsZWN0ZWQgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRFbGVtZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50W2ldLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGNyZWF0ZVNCb3gsIHJvdGF0ZVNlbGVjdGVkLCBjaGFuZ2VTaGFwZSwgcmVzaXplU2VsZWN0ZWQsIG1vdmVCb3gsIHJhbmRvbUNvbG9yLCBkZWxldGVTZWxlY3RlZCwgdW5TZWxlY3RFbGVtZW50LCBzZWxlY3RBbGwsIGNvcHlTZWxlY3RlZCwgY3JlYXRlUmFuZG9tQm94IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGFwcCBmcm9tIFwiLi9hcHBcIjtcblxuLyoqXG4gKiBmdW5jdGlvbiB0aGF0IHJ1biB3aGVuIHdpbmRvdyBsb2FkLCB0byBjcmVhdGUgYmFzZSBib3ggYW5kIGFkZCBldmVudCBsaXN0ZW5lciB0byBkb2N1bWVudFxuICpcbiAqL1xuZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgYXBwLmRlZmF1bHQuY3JlYXRlU0JveCgpO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5ID09PSAnZScpIHtcbiAgICAgICAgICAgIGFwcC5kZWZhdWx0LmNoYW5nZVNoYXBlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5ID09PSAndycgfHwgZXZlbnQua2V5ID09PSAncScpIHtcbiAgICAgICAgICAgIGFwcC5kZWZhdWx0LnJlc2l6ZVNlbGVjdGVkKGV2ZW50LmtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBhcHAuZGVmYXVsdC5tb3ZlQm94KGV2ZW50LmtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5ID09PSAncicpIHtcbiAgICAgICAgICAgIGFwcC5kZWZhdWx0LnJhbmRvbUNvbG9yKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5ID09PSAneScpIHtcbiAgICAgICAgICAgIGFwcC5kZWZhdWx0LmRlbGV0ZVNlbGVjdGVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5ID09PSAndScpIHtcbiAgICAgICAgICAgIGFwcC5kZWZhdWx0LnVuU2VsZWN0RWxlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleSA9PT0gJ2knKSB7XG4gICAgICAgICAgICBhcHAuZGVmYXVsdC5zZWxlY3RBbGwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5pc0NvbXBvc2luZyB8fCBldmVudC5rZXkgPT09ICd0Jykge1xuICAgICAgICAgICAgYXBwLmRlZmF1bHQuY29weVNlbGVjdGVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5ID09PSAncCcpIHtcbiAgICAgICAgICAgIGFwcC5kZWZhdWx0LmNyZWF0ZVJhbmRvbUJveCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleSA9PT0gJ24nKSB7XG4gICAgICAgICAgICBhcHAuZGVmYXVsdC5yb3RhdGVTZWxlY3RlZCgpO1xuICAgICAgICB9XG4gICAgfTtcbn0gd2luZG93Lm9ubG9hZCA9IGluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==