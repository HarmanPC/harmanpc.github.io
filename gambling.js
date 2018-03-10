  var thing = ['<div class="fa fa-book" style="color:blue"></div>','<div class="fa fa-heart" style="color:red"></div>','<div class="fa fa-pencil" style="color:gray"></div>'];
  
  var rand1 = thing[Math.floor(Math.random() * thing.length)];
  var rand2 = thing[Math.floor(Math.random() * thing.length)];
  var rand3 = thing[Math.floor(Math.random() * thing.length)];
  
  var result = `<center><h1>${rand1} | ${rand2} | ${rand3}</h1></center>`;
  
  let text = '';
  if (rand1 === rand2 && rand2 === rand3 && rand3 === rand1) {
      text ='<div style="font-size:30px; color:green">You win!</div>';
  }
  
  var output = result + text;
  document.getElementById("game").innerHTML = output;
