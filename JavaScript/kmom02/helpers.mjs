/**
 * @module helpers
 */
import * as animals from './animals.mjs';

/**
 * Add an animal to a specific array
 * @param {string} continent (american|african|european) - Represents the array to add to
 * @param {string} animal The new animal to add
 * @returns {string} <animal> added | <animal> not added
 */
function addAnimal (continent, animal) {
    let result = animal + " not added";
    Object.keys(animals).forEach(e => {
        if (e.startsWith(continent)) {
            result = animal + " added";
            animals[e].push(animal);
        }
    });
    return result;
}

/**
 * Get all animals concatinated to one array
 * @returns {array} One dimensional array with all animals
 */
function allAnimals () {
    const result = [];
    Object.keys(animals).forEach(e => {
        for (let i = 0; i < animals[e].length; i++) {
            result.push(animals[e][i]);
        }
    });
    return result;
}

/**
 * Get all animals from specific continent
 * @param {string} continent The continent to return
 * @returns {string} A comma separated string with all animals from continent | Error
 */
function getAnimalsByContinent (continent) {
    let result = "Error";
    if (continent == null || continent === "") {
        result = "Error";
    } else {
        Object.keys(animals).forEach(e => {
            if (e.startsWith(continent)) {
                result = "";
                for (let i = 0; i < animals[e].length; i++) {
                    result += animals[e][i] + ", ";
                }
            }
        });
    }
    return result;
}

/**
 * Get a randomized animal from any of the three animal arrays
 * @returns {string} The randomized animal
 */
function getRandomAnimal () {
    const keys = Object.keys(animals);
    const randomContinent = animals[keys[keys.length * Math.random() << 0]];
    const result = randomContinent[Math.floor(Math.random() * randomContinent.length)];
    return result;
}

/**
 * Removes an animal from an array
 * @param {string} animal The animal to remove
 * @returns {string} <animal> removed | <animal> not removed
 */
function removeAnimal (animal) {
    const allAnimals = [];
    let result = "";
    Object.keys(animals).forEach(e => {
        for (let i = 0; i < animals[e].length; i++) {
            allAnimals.push(animals[e][i]);
        }
    });
    if (allAnimals.indexOf(animal) === -1) {
        result = animal + " Not removed";
    } else {
        result = animal + " removed";
    }
    return result;
}

export { addAnimal, allAnimals, getAnimalsByContinent, getRandomAnimal, removeAnimal };
