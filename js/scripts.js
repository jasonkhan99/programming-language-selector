$(document).ready(function() {
  $("form#codeSelector").submit(function() {
    event.preventDefault();
    const age = parseInt($("#input1").val());
    const gender = $("#gender").val();

  });
});