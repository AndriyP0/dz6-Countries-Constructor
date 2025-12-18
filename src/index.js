"use strict";

// Constructor function for Country
/**JS Doc
 *
 * @param {string} title
 * @param {string} capital
 * @param {number} population
 * @param {number} area
 */

function Country(title, capital, population, area = 44130000) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  this.showCountry = function () {
    console.log(
      `Country: ${this.title}, Capital: ${this.capital}, Population: ${this.population}, Area: ${this.area} sq km`
    );
  };
}

const country1 = new Country("Ukraine", "Kyiv", 603628);
const country2 = new Country("France", "Paris", 643801);

country1.showCountry();
country2.showCountry();

/**JS Doc
 *
 * @param {object} country
 */

const showCountryInfo = function (country) {
  for (let key in country) {
    if (typeof country[key] !== "function") {
      console.log(`${key}: ${country[key]}`);
    }
  }
};

showCountryInfo(country1);
showCountryInfo(country2);
