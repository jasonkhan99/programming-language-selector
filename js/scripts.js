$(document).ready(function() {
  $("form#codeSelector").submit(function() {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const gender = parseInt($("#gender").val());
    const math = parseInt($("#math").val());
    const media = parseInt($("input:radio[name=prefer]:checked").val());
    const language = parseInt($("#language").val());

    let resultAge;
    let resultMath;
    let result4;
    let result5;

    if (age < 18) {
      resultAge = 1
    } else if (18 <= age && age <= 30) {
      resultAge = 4
    } else if (30 < age) {  
      resultAge = 7
    } else { 
      alert("Please enter a numerical value");
    }

    if (math === 4) {
      resultMath = 7
    } else if (math < 4 || math > 4) {
      resultMath = 1
    } else {
      alert("Please enter a numerical value");
    }

    $("#output").text(resultMath);
  });
});