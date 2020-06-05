$(document).ready(function() {
  $("form#codeSelector").submit(function() {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const gender = parseInt($("#gender").val());
    const math = parseInt($("#math").val());
    const media = parseInt($("input:radio[name=prefer]:checked").val());
    const language = parseInt($("#language").val());
    const result1
    if (age > 18) {
      result1 = 1
    } else if (age === NaN) { 
      alert("Please enter a number");
    } else if (18 <= age <= 30) {
      result1 = 2
    } else if (age > 30) {
      result1 = 3
    }

  });
});