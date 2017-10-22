$(document).ready(function(){
$(".logo").find('path').addClass('hello');
$('.bigheading').animate({'top':'0','opacity':'1'},500);
$('h2').animate({'top':'0','opacity':'1'},1000);
$('.smallheading').animate({'top':'0','opacity':'1'},1500);
var info = function(){
  $('.scrollnotice').animate({'top': '25px', 'opacity':'1'},500).animate({'top': '-10px', 'opacity':'.5'},500);
}

setInterval(info,1000);
$(document).on('scroll',function() {
  var y = $(this).scrollTop();
  if (y > 50)
  {
    console.log(y);
    $('.cls-1').addClass('cls-2');
    $(".car").fadeIn(2000);
    $(".car").animate({'left':'0'},1000);
  }
  if (y>406){
    $('.container').css('top',(y-406)+'px');
  }
  if (y>800){
    $('.container').css('top','394px');
  }
  if(y>1100)
  {
    $('.img1').animate({'left':'50px'},800);
    $('.img3').animate({'right':'50px'},800);
    $('.img2').animate({'bottom':'100px'},800);

  }
});

});
