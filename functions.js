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
  answer = id("answer");
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
