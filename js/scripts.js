

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var firstChar = "";


$(document).ready(function() {
  $("#latinform").submit(function(event) {
    event.preventDefault();


    var input = $("#sentenceinput").val();
    var inputLength = input.length;
    firstChar = input.slice(0, 1);


    for (var i = 0 ; i < vowels.length; i++) {
      if(firstChar === vowels[i]) {
      input = input + "way";
      alert(input);
    }
    }


    // vowels.forEach(function(vowel) {
    //   if (input === vowel) {
    //     alert(input + "way");
    //   } else {
    //     alert("Please enter something");
    //   }
  });
});
