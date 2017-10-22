$(document).ready(function(){
var ondrive;
var engine = new Audio();
engine.src = "../audio/Engine_04.mp3";

$(window).on('scroll',function(){
  engine.play();
  engine.loop = true;

});
$(window).on('scrollstop',function(){
  engine.pause();
});

var start = new Audio();
start.src = "../audio/start2.mp3";

$('#pushButton').on('click',function(){
  start.play();
  $('.stop-scrolling').removeClass('stop-scrolling');
  ondrive = setTimeout(function(){
  $('body').addClass('stop-scrolling');
},20000);
});
$(window).on('scrollstart',function(){
  start.pause();
  start.currentTime = 0;
  clearTimeout(ondrive);
});
});
