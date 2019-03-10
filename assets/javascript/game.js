var wins=0, losses=0, guesses=10;

function newGame() {
  function clear(id){
    document.getElementById(id).innerHTML = "";
  }
  clear("display");
  var computerChoices = ["accio", "alohomora", "apparate", "azkaban", "basilisk", "the burrow", "butterbeer", "centaur", "cleansweep", "daily prophet", "death eater", "dementor", "diagon alley", "diviniation", "dumbledore", "expecto patronum", "expelliarmus", "firebolt", "floo powder", "galleon", "golden snitch", "gringotts", "gryffindor", "harry potter", "herbology", "hermione granger", "hippogriff", "hogsmeade", "hogwarts", "honeydukes", "house elf", "hufflepuff", "invisibility cloak", "kings cross", "knockturn alley", "the leaky cauldron", "lumos", "ministry of magic", "mirror of erised", "mudblood", "muggle", "ollivander", "order of the pheonix", "parseltongue", "pensieve", "polyjuice potion", "portkey", "pumpkin juice", "quaffle", "quidditch", "ravenclaw", "remembrall", "ron weasley", "room of requirement", "seeker", "shrieking shack", "slytherin", "sorting hat", "squib", "stupefy", "the three broomsticks", "tom riddle", "transfiguration", "unforgivable curse", "veritaserum", "voldemort", "wand", "wingardium leviosa", "witch", "wizard"];

  guesses=10;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var display="", emptyLetter="_";
  for(var i=0; i<computerGuess.length; i++) {
    if(computerGuess[i]==" "){
      display+=" ";
    } else {
      display+=emptyLetter;
    }
  }
  var displayDiv = document.getElementById("display");
  var word = document.createElement("h4");
  word.textContent = display;
  displayDiv.appendChild(word);
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("wins").innerHTML = wins;

  document.onkeyup = function(event) {
    var userGuess = event.key;
    function clear(id){
      document.getElementById(id).innerHTML = "";
    }
    var before=display, badGuess="";
      for(var i=0; i<display.length; i++) {
        if(userGuess==computerGuess[i]) {
          var newDisplay = display.substring(0,i)+userGuess+display.substring(i+1);
          clear("display");
          word.textContent = newDisplay;
          displayDiv.appendChild(word);
          display=newDisplay;
        }
      }
      if(before==display && display!==computerGuess) {
        badGuess = userGuess.toUpperCase();
        var entrySpan = document.getElementById("entries");
        var badEntry = document.createElement("span");
        badEntry.textContent = badGuess;
        entrySpan.appendChild(badEntry);
        var space = document.createElement("span");
        space.textContent = " ";
        entrySpan.appendChild(space);
        guesses--;
      }

      if(display==computerGuess) {
        wins++;
        alert("You won! The word was "+computerGuess+".");
        guesses=10;
        clear("entries");
        newGame();
      } else {
        if(guesses==0) {
          losses++;
          alert("You lost! The word was "+computerGuess+".");
          guesses=10;
          clear("entries");
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          display="";
          for(var i=0; i<computerGuess.length; i++) {
            if(computerGuess[i]==" "){
              display+=" ";
            } else {
              display+=emptyLetter;
            }
          }
          word.textContent = display;
          displayDiv.appendChild(word);
        }
      }
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("wins").innerHTML = wins;
  }
}

function defaultTheme() {
  var body = document.getElementById("body");
  body.classList.remove("gryffindor");
  body.classList.remove("hufflepuff");
  body.classList.remove("ravenclaw");
  body.classList.remove("slytherin");
  body.classList.add("default");

  document.getElementsByClassName("crest")[0].src = "assets/images/hogwarts crest.png";
}

function gryffindorTheme() {
  var body = document.getElementById("body");
  body.classList.remove("default");
  body.classList.remove("hufflepuff");
  body.classList.remove("ravenclaw");
  body.classList.remove("slytherin");
  body.classList.add("gryffindor");

  document.getElementsByClassName("crest")[0].src = "assets/images/gryffindor crest.jpg";
}

function hufflepuffTheme() {
  var body = document.getElementById("body");
  body.classList.remove("default");
  body.classList.remove("gryffindor");
  body.classList.remove("ravenclaw");
  body.classList.remove("slytherin");
  body.classList.add("hufflepuff");

  document.getElementsByClassName("crest")[0].src = "assets/images/hufflepuff crest.jpg";
}

function ravenclawTheme() {
  var body = document.getElementById("body");
  body.classList.remove("default");
  body.classList.remove("gryffindor");
  body.classList.remove("hufflepuff");
  body.classList.remove("slytherin");
  body.classList.add("ravenclaw");

  document.getElementsByClassName("crest")[0].src = "assets/images/ravenclaw crest.jpg";
}

function slytherinTheme() {
  var body = document.getElementById("body");
  body.classList.remove("default");
  body.classList.remove("gryffindor");
  body.classList.remove("hufflepuff");
  body.classList.remove("ravenclaw");
  body.classList.add("slytherin");

  document.getElementsByClassName("crest")[0].src = "assets/images/slytherin crest.jpg";
}
