$(document).ready(function() {
  $("form#codeSelector").submit(function() {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const gender = parseInt($("#gender").val());
    const math = parseInt($("#math").val());
    const media = parseInt($("input:radio[name=prefer]:checked").val());
    const language = parseInt($("#language").val());
    let result1; 
    if (age < 18) {
      result1 = 1
    } else if (18 <= age && age <= 30) {
      result1 = 2
    } else if (30 < age) {  
      result1 = 3
    } else { 
      alert("Please enter a number");
    }
    $("#output").text(result1);
  });
});