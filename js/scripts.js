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

    if (age < 18) {
      resultAge = 1
    } else if (18 <= age && age <= 30) {
      resultAge = 3
    } else if (30 < age) {  
      resultAge = 5
    } else { 
      alert("Please enter a numerical value");
    }

    if (math === 4) {
      resultMath = 5
    } else if (math < 4 || math > 4) {
      resultMath = 1
    } else {
      alert("Please enter a numerical value");
    }

    let finalResult = resultAge + gender + resultMath + media + language;

    if (finalResult <= 9) {
      $('#python').show();
      $('#c').hide();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#rust').hide();
    } else if (10 <= finalResult && finalResult <= 14) {
      $('#ruby').show();
      $('#c').hide();
      $('#python').hide();
      $('#javascript').hide();
      $('#rust').hide();
    } else if (15 <= finalResult && finalResult <= 19) {
      $('#javascript').show();
      $('#c').hide();
      $('#ruby').hide();
      $('#python').hide();
      $('#rust').hide();
    } else if (20 <= finalResult && finalResult <= 22) {
      $('#rust').show();
      $('#c').hide();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#python').hide();
    } else if (23 <= finalResult && finalResult <= 25) {
      $('#c').show();
      $('#python').hide();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#rust').hide();
    }
  });
});