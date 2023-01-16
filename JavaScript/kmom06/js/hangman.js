const hangman = {

    // Get all elements as their id
    partAsElement: {
        hill: document.getElementById('hang_hill'),
        gallow: document.getElementById('hang_construction'),
        body: document.getElementById('hang_body'),
        rightarm: document.getElementById('hang_rightarm'),
        leftarm: document.getElementById('hang_leftarm'),
        rightleg: document.getElementById('hang_rightleg'),
        leftleg: document.getElementById('hang_leftleg'),
        rope: document.getElementById('hang_rope'),
        head: document.getElementById('hang_head')
    },

    // Create an array with all valid parts
    validParts: [
        "hill",
        "gallow",
        "body",
        "rightarm",
        "leftarm",
        "rightleg",
        "leftleg",
        "rope",
        "head"
    ],

    /**
     * Check if part a valid part, writes error message to console if the part is invalid.
     *
     * @param string part Name of the part to check.
     *
     * @returns boolean true if valid part, else false.
     */
    isValid: function (part) {
        if (this.validParts.indexOf(part) === -1) {
            // window.console.log("The part is not valid: " + part);
            return false;
        }
        // window.console.log("The part is valid: " + part);
        return true;
    },

    /**
     * Hide a part.
     *
     * @param string part Name of the part to hide.
     *
     * @returns void.
     */
    hide: function (part) {
        if (this.isValid(part)) {
            window.console.log("Hiding part: " + part);
            this.partAsElement[part].style.display = "none";
        }
    },

    /**
     * Hide a part.
     *
     * @param string part Name of the part to hide.
     *
     * @returns void.
     */
    hideAll: function (validParts) {
        for (let i = 0; i < validParts.length; i++) {
            this.partAsElement[validParts[i]].style.display = "none";
        }
    },

    /**
     * Show a part.
     *
     * @param string part Name of the part to show.
     *
     * @returns void.
     */
    show: function (part) {
        if (this.isValid(part)) {
            // window.console.log("Showing part: " + part);
            this.partAsElement[part].style.display = "inline";
        }
    },

    /**
     * Set a list of word
     * @returns array
     */
    wordList: function () {
        return ["GALEJ", "VULGÄR", "VERSFOT", "STÄMPLING", "BUDGIVARE"];
    },

    /**
     * Get the chosen word
     * @returns string
     */
    peek: function () {
        return sessionStorage.getItem("chosenWord");
    }
};

export { hangman };
