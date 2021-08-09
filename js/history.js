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

    

//    중간에 선
    $('#history').append('<div id="line">').children('li').append('<div class="circle">')
    $(window).on('scroll',function(){
       $('#fill').stop().animate({height:$(this).scrollTop()-400})
    })


    $('#line').append('<div id="fill">')
//    organic
    $('#organic').append(
        '<img src="images/organic.jpg" class="organic">',
        '<img src="images/leaf1.png" class="leaf1 leaf">'
    )


//    award
    $('#award').append(
        '<img src="images/award.jpg" class="award">'


    )



//    imSS
    $('#imSS').append(
        '<img src="images/imSS.jpg" class="imSS">',
        '<img src="images/leaf2.png" class="leaf2 leaf">'

    )

//       honeyS
    $('#honeyS').append(
        '<img src="images/honeyS.png" class="honeyS">'

    )
//       factory
    $('#factory').append(
        '<img src="images/factory.jpg" class="factory">',
        '<img src="images/leaf3.png" class="leaf3 leaf">'

    )
//       machine
    $('#machine').append(
        '<img src="images/machine.jpg" class="machine">'

    )
//       filed
    $('#filed').append(
        '<img src="images/filed.jpg" class="filed">',
        '<img src="images/leaf1.png" class="leaf4 leaf">'


    )

//    페이지 스크롤효과

    var section1pos = $('#organic').position().top;
    var section2pos = $('#imSS').position().top;
    var section3pos = $('#factory').position().top;

    $(window).scroll(function(){
        // console.log(section1pos,section2pos,section3pos)
        console.log($(this).scrollTop())
        if($(this).scrollTop() >= 400){
            $('.organic:not(:animated)').animate({opacity:1},1000)

        }
        if($(this).scrollTop() >= 800) {
          $('.award:not(:animated)').animate({opacity:1},1000)

        }
        if($(this).scrollTop() >= 1540){
             $('.imSS:not(:animated)').animate({opacity:1},1000)

        }
        if($(this).scrollTop() >= 1860){
             $('.honeyS:not(:animated)').animate({opacity:1},1000)

        }
        if($(this).scrollTop() >= 2790){
            $('.factory').animate({opacity:1},1000)


        }
        if($(this).scrollTop() >= 3500){
          $('.machine').animate({opacity:1},1000)

        }
        if($(this).scrollTop() >= 3600){
            $('.filed').animate({opacity:1},1000)
        }


    })




  })
