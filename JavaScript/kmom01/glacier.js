let meltRate = 0.36;
let year = 2000;
let seaLevel = 0;

console.log("Year" + " | " + "Melt rate (m)" + " | " + "Sea level (mm)");
console.log("--------------------------------------");

for (let i = 0; i < 20; i++) {
    console.log(year + "   " + meltRate.toFixed(2) + "            " + seaLevel.toFixed(3));
    year++;
    seaLevel += 3.6 * 0.21;
    meltRate += ((0.69 - 0.36) / 19);
}
