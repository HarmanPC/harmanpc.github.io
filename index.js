const loc = document.location;
function onId(id) {
  return document.getElementById(id);
}
function write(id, message) {
  if (!id || !message) return;
  onId(id).innerHTML = message;
}
function style(id) {
  if (!id) return;
  return onId(id).style;
}
style("title").color = "cyan";
style("title").background = "#000000";
style("h1").color = "red";
style("button").background = "cyan";

function shuffle(array) {
	if (!Array.isArray(array)) return;
 	let currentIndex = array.length; 
	let temporaryValue; 
	let randomIndex;

	while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
 		array[randomIndex] = temporaryValue;
	}
	return array;
}
const original = words[Math.floor(Math.random() * words.length)];
var word = original.split('');
var output = shuffle(word).join(', ');

write("jumble", output);
var answer;
function onLoad() {
  answer = onId("answer");
}
function checkAnswer() {
	if (answer.value.toLowerCase() === original.toLowerCase()) {
		style("result").color = "green";
		write("result", "You win!");
	} else {
    		style("result").color = "red";
		write("result", "Wrong.");
	}
}
