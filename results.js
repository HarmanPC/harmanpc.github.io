let data = document.getElementById("answer").value.toLowerCase();
  if (data === original.toLowerCase()) {
    document.getElementById("ok").innerHTML = "You win";
	}
  else {
    document.getElementById("ok").innerHTML = data;
  }
