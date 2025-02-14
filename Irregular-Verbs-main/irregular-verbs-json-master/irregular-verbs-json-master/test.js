const fs = require('fs');

// Step 1: Read the JSON file
const data = fs.readFileSync('VERBS.json', 'utf-8');

// Step 2: Parse JSON string into an object (array)
const verbs = JSON.parse(data);

// Step 3: Generate a random index
const randomIndex = Math.floor(Math.random() * verbs.length);

// Step 4: Get the random verb's base form
const randomVerb = verbs[randomIndex]["base form"];

// Step 5: Display the random verb
console.log("Random verb:", randomVerb);
