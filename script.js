var adj = document.querySelector("#adj");
var adj2 = document.querySelector("#adj2");
var bird = document.querySelector("#bird");
var room= document.querySelector("#room");
var verb = document.querySelector("#verb");
var verb2 = document.querySelector("#verb2");
var name = document.querySelector("#name");
var noun = document.querySelector("#noun");
var liquid = document.querySelector("#liquid");
var verb3 = document.querySelector("#verb3");
var body = document.querySelector("#body");
var noun2 = document.querySelector("#noun2");
var verb4 = document.querySelector("#verb4");
var noun3 = document.querySelector("#noun3");
launch.addEventListener("click", writeStory, false);


function writeStory(){
  var sentence = "<p>It was a " + adj.value;
  sentence += ', cold November day. I woke up to the ' + adj2.value;
  sentence += ' smell of ' + bird.value;
  sentence += ' roasting in the ' + room.value;
  sentence += ' downstairs. I ' + verb.value ;
  sentence += ' down the stairs to see if I could help ' + verb2.value;
  sentence += ' the dinner. My mom said, "See if  ' + name.value;
  sentence += ' needs a fresh ' + noun.value;
  sentence += '  ." So I carried a tray of glasses full of ' + liquid.value;
  sentence += ' into the ' + verb3.value;
  sentence += '  room. When I got there, I could not believe my ' + body.value;
  sentence += ' ! There were ' + noun2.value + ' ' + verb4.value ;
  sentence += ' on the ' + noun3.value + '!</p>';
  story.innerHTML = sentence;
}



