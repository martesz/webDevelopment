$("h1").toggleClass("big-title margin-50");

$(document).keypress(function(event){
  $("h1").text(event.key);
});
