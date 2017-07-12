

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b", "c", "d",, "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",]
var firstChar = "";


$(document).ready(function() {
  $("#latinform").submit(function(event) {
    event.preventDefault();


    var input = $("#sentenceinput").val();
    var inputArray = input.split("");
    var firstVowelPosition = 0;
    var inputLength = input.length;
    firstChar = input.slice(0, 1);

    for(i=0 ; i < inputArray.length ; i++){
      if(inputArray[i]==="q" && inputArray[i + 1] === "u") {
        var uPosition = i + 2;
        var slice = input.slice(0, uPosition);
        var slice2 = input.slice(uPosition);
        var output = slice2 + slice + "ay";
        inputArray = [];

      } else if (inputArray[i]==="a" || inputArray[i]==="e" || inputArray[i]==="i" || inputArray[i]==="o" || inputArray[i]==="u") {
        firstVowelPosition = i;
        var slice = input.slice(0,firstVowelPosition);
        var slice2 = input.slice(firstVowelPosition);
        var output = slice2 + slice + "ay";
        inputArray = [];
      }
    }
      alert(output);


    for (var i = 0 ; i < vowels.length; i++) {
      if(char1 === vowels[i]) {
      input = input + "way";
      }
    }

  });
});
