const table = document.getElementById('table');
const selectYear = document.getElementById('select');
const years = [
    "Select year", 1900, 1901, 1902, 1903,
    1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912,
    1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921,
    1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930,
    1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939,
    1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948,
    1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957,
    1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966,
    1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
    1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984,
    1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
    1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
const countryName = ['denmark', 'norway', 'sweden'];

/**
 * function that run when window load, to create base box and add event listener to document
 *
 */
function init () {
    fetchData();

    selectYear.setAttribute('id', 'countrySelect');
    selectYear.addEventListener('change', () => {
        const countrySelect = document.getElementById('countrySelect');
        if (countrySelect.value !== "Select Country") {
            getData(countrySelect.value);
        }
    });

    for (let i = 0; i < years.length; i++) {
        const option = document.createElement('option');
        option.innerText = years[i];
        option.setAttribute('value', years[i]);
        selectYear.append(option);
    }
} window.onload = init;

/**
 * Function to get data from link, this function fetch data from a link and store it in localStorage.
 */
function fetchData () {
    for (let i = 0; i < countryName.length; i++) {
        fetch(`https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/co2-json/${countryName[i]}.json`)
            .then(response => response.json())
            .then(function (json) {
                localStorage.setItem(countryName[i], JSON.stringify(json));
            }).catch(console.error);
    }
}

/**
 * Function that read data from localStorage, and store in Array to sendet to displayData function.
 * @param {String} selected
 */
function getData (selected) {
    const newList = [];
    if (selected !== "Select year") {
        countryName.forEach(element => {
            for (let i = 0; i < JSON.parse(localStorage.getItem(element)).data.length; i++) {
                if (JSON.parse(localStorage.getItem(element)).data[i].year === Number(selected)) {
                    newList.push(JSON.parse(localStorage.getItem(element)).data[i]);
                }
            }
        });
    }
    displayData(newList);
}

/**
 * Function to display data in a table.
 * @param {Array} data
 */
function displayData (data) {
    if (data.length !== 0) {
        for (let i = 0; i < 3; i++) {
            if (document.getElementById('remove' + i)) {
                table.removeChild(document.getElementById('remove' + i));
                const tr = document.createElement('tr');
                tr.setAttribute('id', 'remove' + i);
                const list = [countryName[i], data[i].year, data[i].co2, data[i].co2_growth_prct, data[i].co2_per_capita, data[i].population];
                for (let l = 0; l < 6; l++) {
                    const td = document.createElement('td');
                    td.innerText = list[l];
                    td.setAttribute('id', list[l]);
                    tr.append(td);
                }
                table.append(tr);
            } else {
                const tr = document.createElement('tr');
                tr.setAttribute('id', 'remove' + i);
                const list = [countryName[i], data[i].year, data[i].co2, data[i].co2_growth_prct, data[i].co2_per_capita, data[i].population];
                for (let l = 0; l < 6; l++) {
                    const td = document.createElement('td');
                    td.innerText = list[l];
                    td.setAttribute('id', list[l]);
                    tr.append(td);
                }
                table.append(tr);
            }
        }
        compair();
    }
}

/**
 * Function to compair three values and present the lowest.
 */
function compair () {
    const firstList = [
        document.getElementById('remove0').childNodes[2].innerText,
        document.getElementById('remove1').childNodes[2].innerText,
        document.getElementById('remove2').childNodes[2].innerText];
    const secoundList = [
        document.getElementById('remove0').childNodes[3].innerText,
        document.getElementById('remove1').childNodes[3].innerText,
        document.getElementById('remove2').childNodes[3].innerText];
    const thirdList = [
        document.getElementById('remove0').childNodes[4].innerText,
        document.getElementById('remove1').childNodes[4].innerText,
        document.getElementById('remove2').childNodes[4].innerText];
    document.getElementById(Math.min(...firstList)).classList.add('leastValues');
    document.getElementById(Math.min(...secoundList)).classList.add('leastValues');
    document.getElementById(Math.min(...thirdList)).classList.add('leastValues');
}
