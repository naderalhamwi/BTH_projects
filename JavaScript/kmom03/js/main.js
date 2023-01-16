/**
 * En function som retunerar det sparade data i den
 * (colors, persons, years)
 * @returns {List}
 */
function data () {
    'use strict';

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const persons = [
        "Nelson Mandela",
        "John F. Kennedy",
        "Ifti Nasim",
        "Malcolm X",
        "Sojourner Truth",
        "Eleanor Roosevelt",
        "Rosa Parks"
    ];
    const years = [
        "1918 - 2013",
        "1917 - 1963",
        "1946 - 2011",
        "1925 - 1965",
        "1797 - 1883",
        "1884 - 1962",
        "1913 - 2005"
    ];

    return [colors, persons, years];
}