const fs = require('fs');
// read app.js
const code = fs.readFileSync('app.js', 'utf8');

// The logic runs listEl.innerHTML = remaining.map((b, idx) => { ... })
// which generates buttons. 
// If it generated EXACTLY 1 button, then remaining.length MUST be 1.
// If remaining.length was 1, why didn't `if (remaining.length === 1)` catch it?
console.log("If remaining.length is 1, Array.map will generate exactly 1 element. If it generated 1 element, remaining.length MUST have been 1.");
