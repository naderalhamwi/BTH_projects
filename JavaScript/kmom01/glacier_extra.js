let meltRate = 0.36;
let year = 2000;
let seaLevel = 0;

console.log("Year" + " | " + "Melt rate (m)" + " | " + "Sea level (mm)");
console.log("--------------------------------------");

function calculate (endYear, logRate) {
    while (year < endYear + logRate) {
        console.log(year + "   " + meltRate.toFixed(2) + "            " + seaLevel.toFixed(3));
        year += logRate;
        seaLevel += 3.6 * 0.21 * logRate;
        meltRate += ((0.69 - 0.36) / 19) * logRate;
    }
}

calculate(2050, 5);
