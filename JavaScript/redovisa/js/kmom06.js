import { celebrities, car, country } from "./data.js";

function init () {
    celebrities.draw();
    car.draw();
    country.draw();
}window.onload = init();
