import * as app from "./app";

/**
 * function that run when window load, to create base box and add event listener to document
 *
 */
function init () {
    app.default.createSBox();
    document.onkeydown = (event) => {
        if (event.isComposing || event.key === 'e') {
            app.default.changeShape();
        } else if (event.isComposing || event.key === 'w' || event.key === 'q') {
            app.default.resizeSelected(event.key);
        } else if (event.isComposing || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            app.default.moveBox(event.key);
        } else if (event.isComposing || event.key === 'r') {
            app.default.randomColor();
        } else if (event.isComposing || event.key === 'y') {
            app.default.deleteSelected();
        } else if (event.isComposing || event.key === 'u') {
            app.default.unSelectElement();
        } else if (event.isComposing || event.key === 'i') {
            app.default.selectAll();
        } else if (event.isComposing || event.key === 't') {
            app.default.copySelected();
        } else if (event.isComposing || event.key === 'p') {
            app.default.createRandomBox();
        } else if (event.isComposing || event.key === 'n') {
            app.default.rotateSelected();
        }
    };
} window.onload = init();
