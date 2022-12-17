/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

const nestedArr = [
  [39, 99, 76],
  89,
  98,
  [87, 56, [56, 67, [9]], 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

function flatten(arr) {
  return arr.flat(Infinity);
}

function flattenReduce(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flattenReduce(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

function flattenManual(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr.push(...flattenManual(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
console.log(flatten(nestedArr));

console.log(flattenReduce(kittyPrizes));
console.log(flattenReduce(kittyScores));
console.log(flattenReduce(nestedArr));

console.log(flattenManual(kittyPrizes));
console.log(flattenManual(kittyScores));
console.log(flattenManual(nestedArr));
