var original = words[Math.floor(Math.random() * words.length)];
var word = original.split('').join(', ');

var output = word;

document.getElementById("jumble").innerHTML = original;
document.getElementById("jumble2").innerHTML = output;
