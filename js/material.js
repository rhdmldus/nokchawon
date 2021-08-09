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

//    sub

//    bestQuality
    $('#bestQuality').prepend(
        '<img src="images/bestQuality.jpg" class="bqImg">',
        '<img src="images/leaf1.png" class="leaf1 leaf">'
    )


//    ecoFri
    $('#ecoFri').prepend(
        '<img src="images/ecoImg.jpg" class="ecoImg">',
        '<img src="images/leaf2.png" class="leaf2 leaf">'

    )



//    global
    $('#global').prepend(
        '<img src="images/globalImg.jpg" class="gloImg">',
        '<img src="images/leaf3.png" class="leaf3 leaf">'

    )


//    페이지 스크롤효과

    var section1pos = $('#bestQuality').position().top;
    var section2pos = $('#ecoFri').position().top;
    var section3pos = $('#global').position().top;

    $(window).scroll(function(){
        if($(this).scrollTop() >= section1pos){
            $('.bqImg:not(:animated)').animate({top:0,opacity:1},1000)

        }
        if($(this).scrollTop() >= section2pos){
             $('.ecoImg:not(:animated)').animate({left:0,opacity:1},1000)

        }
        if($(this).scrollTop() >= section3pos+200){
            $('.gloImg').animate({opacity:1},1000)
        }


    })




  })
