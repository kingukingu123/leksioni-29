const words = [
  "sun",
  "mountain",
  "extraordinary",
  "tea",
  "constellation"
];

// 1. Generate a random index within the array's length
const randomIndex = Math.floor(Math.random() * words.length);

// 2. Extract the string at that index using destructuring
const [picked = "No value found"] = words.slice(randomIndex, randomIndex + 1);

// 3. Display it
console.log(`Index ${randomIndex}:`, picked);





const shortArray = ["sun", "tea"];

const [first = "none", second = "none", third = "none", fourth = "none"] = shortArray;

console.log(first, second, third, fourth);
// sun tea none none




const empty = [];
const index = Math.floor(Math.random() * empty.length);
const [item = "No value found"] = empty.slice(index, index + 1);

console.log(item); // No value found