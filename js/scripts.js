var translatedString = "";

$(document).ready(function() {
  $("#latinform").submit(function(event) {
    event.preventDefault();

    var userInput = $("#sentenceinput").val();
    var userArray = userInput.split(" ");

    for( t=0 ; t < userArray.length ; t++ ) {

      var input = userArray[t];
      var inputArray = input.split("");
      var char1 = inputArray[0];
      var firstVowelPosition = 0;
      var inputLength = input.length;

      if( char1 === "a" || char1==="e" || char1==="i" || char1==="o" || char1==="u"){
        var output = input + "way";
        translatedString = translatedString + " " + output;

      } else if (input.indexOf('qu') >= 0){
          for(i=0 ; i < inputArray.length ; i++){
            var uPosition = i + 1;
            var slice = input.slice(0, uPosition + 1);
            var slice2 = input.slice(uPosition);
            var output = slice2 + slice + "ay";
            inputArray = [];
          }
          translatedString = translatedString + " " + output;

      } else if (input.indexOf('qu') < 0) {
        for(i=0 ; i < inputArray.length ; i++){
          if(inputArray[i] === "a" || inputArray[i] ==="e" || inputArray[i] ==="i" || inputArray[i] ==="o" || inputArray[i] ==="u") {
            firstVowelPosition = i;
            var slice = input.slice(0,firstVowelPosition);
            var slice2 = input.slice(firstVowelPosition);
            var output = slice2 + slice + "ay";
            inputArray = [];
          }
        }
        translatedString = translatedString + " " + output;
      }
      }
      alert(translatedString);
      translatedString = "";
  });
});
