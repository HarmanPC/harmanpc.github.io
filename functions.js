	function shuffle(array) {
 		var currentIndex = array.length; 
		var temporaryValue; 
		var randomIndex;

		while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
	var original = words[Math.floor(Math.random() * words.length)];
	var word = original.split('');

	var output = shuffle(word).join(', ');

	document.getElementById("jumble").innerHTML = output;
  var answer;
  function onLoad() {
  answer = document.getElementById("answer");
  }
  function checkAnswer() {
	  var result = document.getElementById("ok");
	if (answer.value.toLowerCase() === original.toLowerCase()) {
		result.style.color = "green";
		result.innerHTML = "You win!";
	} else {
    		result.style.color = "red";
		result.innerHTML = "Wrong.";
    }
  }
