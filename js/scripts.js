$(document).ready(function() {
  $("form#codeSelector").submit(function() {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const gender = parseInt($("#gender").val());
    const math = parseInt($("#math").val());
    const media = parseInt($("input:radio[name=prefer]:checked").val());
    const language = parseInt($("#language").val());

  });
});