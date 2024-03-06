// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets);
// console.log(yearNeptuneDiscovered);

// // Prints 8 and prints 1846

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears);
// // Prints 8 and then {yearNeptureDiscovered: 1846, yearMarsDiscovered: 1659}

// function getUserData({ firstName, favoriteColor = "green" }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: "Alejandro", favoriteColor: "purple" });
// //Prints "Your name is Alejandos and you like purple"
// getUserData({ firstName: "Melissa" });
// //Prints "Your name is Melissa and you like green"
// getUserData({});
// //Prints "Your name is undefined and you like green"

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first);
// //Prints "Maya"
// console.log(second);
// //Prints "Marisa"
// console.log(third);
// //Prints "Chi"

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops);
//Prints "Raindrops on roses"
console.log(whiskers);
//Prints "whiskers on kittens"
console.log(aFewOfMyFavoriteThings);
//   Prints ["Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers);
//Prints [10, 30, 20]

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => {
  return {
    first,
    second,
    third,
    rest,
  };
};
