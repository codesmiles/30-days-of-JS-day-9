const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Explain the difference between forEach, map, filter, and reduce.
// Define a call function before you them in forEach, map, filter or reduce.
// Use forEach to console.log each country in the countries array.
const eachCountries = () => {
  countries.forEach((country) => {
    console.log(country);
  });
};
// eachCountries();

// Use forEach to console.log each name in the names array.
const eachName = () => {
  names.forEach((name) => {
    return name;
  });
};
// console.log(eachName());

// Use forEach to console.log each number in the numbers array.
const memberslog = numbers.forEach((number) => {
  return number;
});
// console.log(memberslog);

// Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country) => {
  return country.toUpperCase();
});
// console.log(uppercaseCountries);

// Use map to create an array of countries length from countries array.
const mapCountriesLength = countries.map((country) => {
  return country.length;
});
// console.log(mapCountriesLength);

// Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map((number) => {
  return Math.pow(number, 2);
});

// Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map((name) => {
  return name.toUpperCase();
});
// console.log(uppercaseNames);

// Use map to map the products array to its corresponding prices.
const productsarr = products.map((produce) => {
  return `product:${produce.product}, price:${produce.price}`;
});
// console.log(productsarr);

// Use filter to filter out countries containing land.
const landCountries = countries.filter((country) => {
  return country.includes("land");
});
// console.log(landCountries);

// Use filter to filter out countries having six character.
const filterCountriesLengthOf6 = countries.filter((country) => {
  return country.length === 6;
});

// Use filter to filter out countries containing six letters and more in the country array.
const filtercountriesgreaterthan6 = countries.filter((country) => {
  return country.length > 6;
});

// Use filter to filter out country start with 'E';
const filterCountriesStartWithE = countries.filter((country) => {
  return country.startsWith("E");
});
// console.log(filterCountriesStartWithE);

// Use filter to filter out only prices with values.
const product = products.filter((produce) => {
  if (produce.price === "" || produce.price === " ") {
    return produce;
  }
});
// console.log(product);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => {
  const newarr = [];
  arr.filter((item) => {
    if (typeof item.price === "number") {
      newarr.push(item.price);
    }
  });
  return newarr;
};
// console.log(getStringLists(products));

// Use reduce to sum all the numbers in the numbers array.
const numberReduce = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// console.log(numberReduce);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// const countriesReduce = () => {
//   let country = countries.reduce(
//     (accumulator, currentValue) => {
//      if(currentValue){
//        return currentValue;
//       }
//      else {
//        return `and ` + accumulator;
//       }
//     });
//   return country;
// }
// console.log(countriesReduce());//INCOMPLETE

// Explain the difference between some and every
// every returns boolean value if ever element in the array meet the condition while some does the same but for if some values meet the conditions

// Use some to check if some names' length greater than seven in names array
const someNamesGreaterThan7 = names.some((name) => {
  return name.length > 7;
});
// console.log(someNamesGreaterThan7);

// Use every to check if all the countries contain the word land
const landinCountries = countries.every((country) => {
  return country.includes(`land`);
});
// console.log(landinCountries);

// Explain the difference between find and findIndex.
/*find just find: Return the first element which satisfies the condition 
while findIndex Return the position(in index form) of the first element which satisfies the condition*/

// Use find to find the first country containing only six letters in the countries array
const findFirstCountry = countries.find((country) => {
  return country.length === 6;
});
// console.log(findFirstCountry);

// Use findIndex to find the position of the first country containing only six letters in the countries array
const findPositionOfFirstCountry = countries.findIndex((country) => {
  return country.length === 6;
});
// console.log(findPositionOfFirstCountry);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findPositionOfNorway = countries.findIndex((country) => {
  return country.includes(`Norway`);
});
// console.log(findPositionOfNorway)

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findPositionOfRussia = countries.findIndex((country) => {
  return country.includes(`Russia`);
});
// console.log(findPositionOfRussia);

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalprice = products
  .map((product) => {
    return product.price;
  })
  .filter((price) => {
    return typeof price === `number`;
  })
  .reduce((prev, curr) => {
    return prev + curr;
  }, 0);
// console.log(totalprice);

// Find the sum of price of products using only reduce reduce(callback))
const priceSum = products.reduce((previousValue, currentValue) => {
  if ( typeof currentValue.price === `number` ) {
    return previousValue + currentValue.price;
  }
},0);
console.log(priceSum);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
