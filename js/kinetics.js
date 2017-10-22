$(document).ready(function(){
 var distance1 = 0;
 var time=0;
 var distance;
 var speed;
 var acceleration;
 var l;
 var arr=[];
 var fulltime=0;




 function getspeed(){
 time=time+1;
 speed = Math.abs((distance)/(time));
 $('.speed-show').text((speed*10).toFixed(0));
 var actualspeed=Math.abs(speed*10);
 var SpeedmeterAngle = (speed*10)-139;
 $('.speed-needle').css("transform","rotateZ("+SpeedmeterAngle+"deg)");
 return speed
}
 $(window).on('scroll',function(){
  var distance2 = $(window).scrollTop();
   distance=distance2-distance1;
 setTimeout(function () {
   var instant = getspeed();
   arr.push(instant);
   if (arr.length > 2)
   {
     arr.splice(0,1);
   }
   acceleration = (Math.pow(arr[0], 2)-Math.pow(arr[1], 2))/(2*distance);
   $('.distance-show').text((distance2/100).toFixed(1));
   $('.acceleration-show').text((acceleration*2).toFixed(2));
 },100);
 if(distance2 > 11327)
 {
   $('.road,.speed-meter,.speed-needle,.speed-show,.distance-show,.acceleration-show,.car-start').fadeOut(200);
   $('body').css({'background-color': '#000'});
   $('.top-tesla').css({'transform': 'rotate(1000deg)'});
   setTimeout(function(){
     $('.top-tesla').css({'transform': 'translateX(1000px) rotate(500deg)'});
   },20000);
   clearTimeout();

 }
 });
 $('#pushButton').on('click',function(){
   var clock = setInterval(function(){
     fulltime= fulltime+1;
     console.log(fulltime);
   },1000);
   $(window).on('scroll',function(){
     if($(window).scrollTop() >= 11327){
       $('.afterfinish').text("Congratulation!! You completed your race in "+fulltime+" Seconds").animate({"bottom": "500px"},1000);
       console.log('hello');
       clearInterval(clock);
     }
   });

 });
 $(window).on('scrollstop',function(){
   time = 0;
   distance1 = $(window).scrollTop();
   distance = 0;
   speed = 0;
   $('.speed-show').text(0);
   $('.speed-needle').css("transform","rotateZ(-139deg)");
   $('.acceleration-show').text(0);
 });

 $('body').keydown(function(e) {
 if(e.keyCode == 37) { // left
  $(".moving-car").animate({
    left: "-=50"
  });
 }
 else if(e.keyCode == 39) { // right
  $(".moving-car").animate({
    left: "+=50"
  });
}

 });

});
