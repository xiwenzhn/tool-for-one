// add more letters here
var letters = [
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "G",
    "g", // Added comma here
    "H", // Added comma here
    "i", // Added comma here
    "J", // Added comma here
    "j",
    "K",
    "k",
    "L",
    "l",
    "M",
    "m",
    "N",
    "n",
    "O",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "s",
    "T",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z"

];


// choose a letter from the list, and put that letter into the HTML element with an ID of random_letter.
function random_letter() {
  console.log("random_letter");
  var chosen_letter = letters[Math.floor(Math.random() * letters.length)];
  document.getElementById("random_letter").innerHTML = chosen_letter;
}

// run the function on page load.
random_letter();
