/**
 * @module report
 */
import * as animals from './animals.mjs';

/**
 * Filter animal names on a specified amount of characters (not letters)
 * @param {number} amount The amount to filter on
 * @param {string} continent (america | africa | europe) Specifies continent to use - or all
 * @returns {array} An array containing the result
 */
function filterAnimals (amount, continent) {
    const result = [];
    if (continent == null || continent === "") {
        Object.keys(animals).forEach(e => {
            for (let i = 0; i < animals[e].length; i++) {
                if (animals[e][i].length === amount) {
                    result.push(animals[e][i]);
                }
            }
        });
    } else {
        Object.keys(animals).forEach(e => {
            if (e.startsWith(continent)) {
                for (let i = 0; i < animals[e].length; i++) {
                    if (animals[e][i].length === amount) {
                        result.push(animals[e][i]);
                    }
                }
            }
        });
    }
    return result.sort();
}

/**
 * @param {string} continent (america | africa | europe) The continent to print - or all
 * @returns {string} The formatted report
 */
function prettyPrint (continent) {
    let header = "";
    let result = "No animals found";
    if (continent == null || continent === "") {
        header = "--- REPORT ---" + "\n" + "Animals in all continent" + "\n" + "\n";
        result = "";
        Object.keys(animals).forEach(e => {
            for (let i = 0; i < animals[e].length; i++) {
                result += "* " + animals[e][i] + "\n";
            }
        });
    } else {
        header = "--- REPORT ---" + "\n" + "Animals in " + continent + "\n" + "\n";
        Object.keys(animals).forEach(e => {
            if (e.startsWith(continent)) {
                result = "";
                for (let i = 0; i < animals[e].length; i++) {
                    result += "* " + animals[e][i] + "\n";
                }
            }
        });
    }
    return header + result;
}

/**
 * Sort the animals alphabetically and ascending order
 * @param {string} continent (america | africa | europe) Specifies continent to use - or all
 * @returns {array} An array containing the sorted result
 */
function sortAnimals (continent) {
    const result = [];
    if (continent == null || continent === "") {
        Object.keys(animals).forEach(e => {
            for (let i = 0; i < animals[e].length; i++) {
                result.push(animals[e][i]);
            }
        });
    } else {
        Object.keys(animals).forEach(e => {
            if (e.startsWith(continent)) {
                for (let i = 0; i < animals[e].length; i++) {
                    result.push(animals[e][i]);
                }
            }
        });
    }
    return result.sort();
}

export { filterAnimals, prettyPrint, sortAnimals };
