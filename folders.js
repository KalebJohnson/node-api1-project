// another way to "import" a dependency
const fs = require("fs")

// creates a new folder called `data`
fs.mkdirSync("data")

// run a callback function for each lettere of the alphabet
"abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => {
	// creates a new folder for the current letter
	fs.mkdirSync(`data/${letter}`)
})