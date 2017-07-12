
// var vowels = ["a", "e", "i", "o", "u"];
// var inputLength = input.length;



$(document).ready(function(){
  $("#latinform").submit(function(event) {
    event.preventDefault();
    var input = $("#sentenceinput").val();
    if (input === "a") {
      alert(input + "way");
    } else {
      alert("Please enter something");
    }
  });
});
