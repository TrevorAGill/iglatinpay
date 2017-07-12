

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b", "c", "d",, "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",]
var firstChar = "";


$(document).ready(function() {
  $("#latinform").submit(function(event) {
    event.preventDefault();


    var input = $("#sentenceinput").val();
    var inputArray = input.split("");
    var char1 = inputArray[0];
    var firstVowelPosition = 0;
    var inputLength = input.length;
    firstChar = input.slice(0, 1);


    if( char1 === "a" || char1==="e" || char1==="i" || char1==="o" || char1==="u"){
      for (var i = 0 ; i < vowels.length; i++) {
        if(char1 === vowels[i]) {
        var output = input + "way";
        }
      }
    } else if (char1 !== "a" || char1 !=="e" || char1 !=="i" || char1 !=="o" || char1 !=="u"){
    for(i=0 ; i < inputArray.length ; i++){
      if(inputArray[i]==="q" && inputArray[i + 1] === "u") {
        var uPosition = i + 1;
        var slice = input.slice(0, uPosition + 1);
        var slice2 = input.slice(uPosition);
        var output = slice2 + slice + "ay";
        inputArray = [];

      } else if (inputArray[i]==="a" || inputArray[i]==="e" || inputArray[i]==="i" || inputArray[i]==="o" || inputArray[i]==="u") {
        firstVowelPosition = i;
        var slice = input.slice(0,firstVowelPosition);
        var slice2 = input.slice(firstVowelPosition);
        var output = slice2 + slice + "ay";
        inputArray = [];
      } else {
        var output = "Please enter a valid word.";
      }
    }
  }
      alert(output);




  });
});
