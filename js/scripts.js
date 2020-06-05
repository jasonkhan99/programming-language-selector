$(document).ready(function() {
  $("form#codeSelector").submit(function() {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const gender = $("#gender").val();
    const math = parseInt($("math").val());

  });
});