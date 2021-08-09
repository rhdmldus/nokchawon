$(document).ready(function(){
    // 네비
    //
    $('.snb').hide()
    $('#gnb > ul > li > a').append('<div class="line">')
    $('#gnb > ul > li a').children('.line').css({width:0,margin:'0 100px'})
    $('#gnb > ul > li').hover(function(){
         $(this).children('.snb').stop().fadeIn()
         $('#gnb > ul > li').find('.line').stop().animate({width:0,margin:'0 100px'})

         $(this).find('.line').stop().animate({width:100,margin:'0 50px'})

        },function(){
         $('.snb').stop().fadeOut()
         $(this).find('.line').stop().animate({width:0,margin:'0 100px'})

    })

$('#story li dl').each(function(){
  var imgPath = $(this).attr('id')
  console.log(imgPath)

  $(this).css({backgroundImage:'url(images/'+ imgPath +'.jpg)'})

})
var time = 1;
var num = 0;

 function moveRight(){
//        sliderList 왼쪽으로이동
//        첫번째 리스트 크기 위치변환
//        두번째 리스트 크기 위치변환

     if(num == 4){
         num=0

         $('#story').animate({marginLeft:0})
         // $('#story li:eq(0)').animate({marginTop:0,width:350,height:300})
         // $('#story li:last').animate({marginTop:50,width:350,height:300})

     }
     else {

     $('#story').animate({marginLeft:"-=450px"})
     // $('#story li:eq('+num+')').animate({marginTop:50,width:350,height:300})
     // $('#story li:eq('+(num+1)+')').animate({marginTop:0,width:350,height:300})
     num++
     }
     $('#btnNum span').removeClass('on')
     $('#btnNum span:eq('+num+')').addClass('on')

     console.log(num)
     console.log($('#story').css('margin-left'))

 time=0;
 }
 function moveLeft(){
     if(num <= 1){
         num=4;
         $('#story').animate({marginLeft:-1350})
         // $('#story li:eq(5)').animate({width:350,height:300, marginTop:0})
         // $('#story li:eq(0)').animate({width:350,height:300, marginTop:50})
         console.log(num)
         console.log($('#story').css('margin-left'))

     }
     else{
   $('#story').animate({marginLeft:'+=450px'})
   // $('#story li:eq('+num+')').animate({marginTop:50,width:350,height:300})
   // $('#story li:eq('+(num-1)+')').animate({marginTop:0,width:350,height:350})
         num--;
         console.log(num)
         console.log($('#story').css('margin-left'))

     }
  time=0;

 }

 $('#next').on('click',function(){
     if(time==1) {moveRight()
     setTimeout(function(){time=1;},400)
 }
     })

 $('#prev').on('click',function(){
     if(time==1) {moveLeft()
     setTimeout(function(){time=1;},400)
                 }
 })
})
