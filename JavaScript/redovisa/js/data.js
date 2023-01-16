const carDiv = document.getElementById("carDiv");
const celebritiesDiv = document.getElementById("celebritiesDiv");
const countryDiv = document.getElementById("countryDiv");

const celebrities = {
    celebritiesName: ["Johnny Depp", "Will Smith", "Tom Hanks"],
    celebritiesAge: ["59", "54", "66"],
    celebritiesImg: ["celebrities0.jpg", "celebrities1.jpg", "celebrities2.jpg"],

    draw: function () {
        const randomNumber = Math.round(Math.random() * 2);
        const name = document.createElement('p');
        const age = document.createElement('p');
        const img = document.createElement('img');

        name.innerText = "Name: " + this.celebritiesName[randomNumber];
        age.innerText = "Age: " + this.celebritiesAge[randomNumber];
        img.setAttribute('src', `img/dataImg/${this.celebritiesImg[randomNumber]}`);

        celebritiesDiv.append(name, age, img);
    }
};

const car = {
    carBrand: ["Toyota", "Mercedes", "Ford"],
    carCountry: ["Japan", "Germany", "USA"],
    carLogo: ["car0.jpg", "car1.jpg", "car2.png"],

    draw: function () {
        const randomNumber = Math.round(Math.random() * 2);
        const brand = document.createElement('p');
        const country = document.createElement('p');
        const img = document.createElement('img');

        brand.innerText = "Brand: " + this.carBrand[randomNumber];
        country.innerText = "Home Country: " + this.carCountry[randomNumber];
        img.setAttribute('src', `img/dataImg/${this.carLogo[randomNumber]}`);

        carDiv.append(brand, country, img);
    }
};

const country = {
    countryName: ["sweden", "USA", "Mexico"],
    countrySize: ["447,430 km²", "9.834 million km²", "1.964 million km²"],
    countryFlag: ["country0.png", "country1.png", "country2.png"],

    draw: function () {
        const randomNumber = Math.round(Math.random() * 2);
        const name = document.createElement('p');
        const size = document.createElement('p');
        const flag = document.createElement('img');

        name.innerText = "Country name: " + this.countryName[randomNumber];
        size.innerText = "Country size: " + this.countrySize[randomNumber];
        flag.setAttribute('src', `img/dataImg/${this.countryFlag[randomNumber]}`);

        countryDiv.append(name, size, flag);
    }
};

export { celebrities, car, country };
