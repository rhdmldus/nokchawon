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
    //// 배경효과
    //// 스모그

    $('#bgWrap').prepend('<div class="smoke1"><img src="images/smokeEffect.png" alt="연기"></div>')
                .prepend('<div class="smoke2"><img src="images/smokeEffect.png" alt="연기"></div>')
                .prepend('<div class="smoke3"><img src="images/smokeEffect.png" alt="연기"></div>')
    function up(){
        $('div.smoke1').animate({top:0},6000)
        $('div.smoke2').delay(3000).animate({top:-50},6000)
        $('div.smoke3').delay(1000).animate({top:-30},6000)
    }
    function down(){
        $('div.smoke1').animate({top:300},6000)
        $('div.smoke2').animate({top:350},6000)
        $('div.smoke3').animate({top:350},6000)

    }
    setInterval(up)
    setInterval(down)



    // 주전자
    $('#main')
    .prepend('<div class="teaLeaves"><img src="images/teaLeaves.png" alt="잎사귀"></div>')
    .prepend('<div class="teapot"><img src="images/teapot.png" alt="주전자"></div>')
    .prepend('<div class="teacup"><img src="images/teaCup2.png" alt="컵"></div>')
    $('.teapot').animate({opacity:1},3000)
    $('.teacup').delay(200).animate({opacity:1},3000)
    $('.teaLeaves').delay(400).animate({opacity:1},3000)


    // 랜딩페이지 카피이펙트
    $('#teaNature h4').css({opacity:0})
    $('#teaNature h4').animate({top:0,opacity:1},1000)
    $('#teaNature p').css({opacity:0})
    $('#teaNature p').delay(500).animate({top:-10,opacity:1},1000)
    $('#teaNature a').css({opacity:0})
    $('#teaNature a').delay(800).animate({top:-10,opacity:1},1000)


    // 페이지 효과
    $('#teaTime').prepend('<div class="teatime"><img src="images/bgTeatime.png">')
    $('#bestSeller').css({opacity:0})
    $('#brandIntro').css({opacity:0})
    $('#moreAbout').css({opacity:0})
    $('#story').css({left:-400})
    $('#certi').css({top:-200})
    $('#history').css({top:200})
    $('#ci').css({top:300})


     var section1pos = $('#gomallWrap').position().top
     var section2pos = $('#bestSeller').position().top
     var section3pos = $('#brandIntro').position().top
     var section4pos = $('#moreAbout').position().top


    //      console.log(section1pos)
    //            console.log(section2pos)
    //            console.log(section3pos)
    //            console.log(section4pos)

       $(window).scroll(function(){
    //      console.log($(this).scrollTop())

         if ($(this).scrollTop()>=section1pos-400){
           $('.teatime').animate({opacity:1},2000)
           $('#teaTime h3').animate({top:0,opacity:1},1000)
           $('#teaTime p').delay(500).animate({top:0,opacity:1},800)
           $('#teaTime a').delay(800).animate({top:0,opacity:1},800)

         }
         if($(this).scrollTop()>=section2pos-400){
                $('#bestSeller').animate({opacity:1},1000)

                }
         if($(this).scrollTop()>=section3pos-800){
                $('#brandIntro').animate({opacity:1},1000)

                }
        if($(this).scrollTop()>=section4pos-400){
                $('#moreAbout:not(:animated)').animate({opacity:1},2000)
                $('#story:not(:animated)').animate({left:0},1000)
                $('#certi:not(:animated)').animate({top:0},1000)
                $('#history:not(:animated)').animate({top:0},1000)
                $('#ci:not(:animated)').animate({top:0},1000)
                }
       })




    // 제품소개 카테고리 밑줄
    $('#bsCategori > li> a').append('<div class="lineOn">')
    $('#bsCategori > li> a').find('.lineOn').not('#bsCategori > li> a> div:first').removeClass('lineOn')
    $('#bsCategori > li> a').on('click',function(e){
        $('#bsCategori > li> a> div').removeClass('lineOn')
        var color = $(this).data('color')
        $(this).css({color:color})
        $('#bsCategori > li> a').not($(this)).css({color:'#000'})
        $(this).children('div').addClass('lineOn').css({borderColor:color})

        e.preventDefault();
    })
    // 제품소개 카테고리 장면전환
    $('#bsCategori > li > a:eq(0)').siblings('p').show()
        $('#bsCategori > li > a').click(function(e){

          $('.sliderWrap').not($(this).siblings('div').find('.sliderWrap')).fadeOut()
          $(this).siblings('div').find('ul').fadeIn()

          $(this).siblings('p').fadeIn()
          $('.copy').not($(this).siblings('.copy')).fadeOut()


          e.preventDefault();
        })
    // 제품소개 제품슬라이더
        $('.nBtn').click(function(e){
          $('#bsCategori > li > div').animate({scrollLeft:'+=220'})

          e.preventDefault();

        })
        $('.pBtn').click(function(e){
          $('#bsCategori > li > div').animate({scrollLeft:'-=220'})
          e.preventDefault()
        })

    // 브랜드소개
    // $('.brandWrap a dt').hide()
    $('.brandWrap a dd').css({opacity:0})

      $('.brandWrap a').hover(function(){

        $(this).find('dt').stop().fadeOut(500)
        $(this).find('dd').stop().animate({top:85,opacity:1})

      },function(){
        $(this).find('dt').stop().fadeIn()
        $(this).find('dd').stop().animate({top:120,opacity:0})


      })
    // 녹차원 더알기
    $('#articleWrap article').mouseenter(function(){
        $(this).stop().animate({top:-10})
    }).mouseleave(function(){
        $(this).stop().animate({top:0})

    })

    //$('#story').hover(function(){
    //    $(this).stop().animate({left:-10,top:-10})
    //
    //},function(){
    //    $(this).stop().animate({left:0,top:0})
    //
    //})
    //$('#certi').hover(function(){
    //    $(this).stop().animate({left:10,top:-10})
    //
    //},function(){
    //    $(this).stop().animate({left:0,top:0})
    //
    //})
    //$('#history').hover(function(){
    //    $(this).stop().animate({top:10})
    //
    //},function(){
    //    $(this).stop().animate({top:0})
    //
    //})
    //$('#ci').hover(function(){
    //    $(this).stop().animate({top:10})
    //
    //},function(){
    //    $(this).stop().animate({top:0})
    //
    //})

    //푸터구름
    $('#moreAbout').prepend('<div class="smog1"><img src="images/smokeEffect.png" alt="연기">')
                   .prepend('<div class="smog2"><img src="images/smokeEffect.png" alt="연기">')
                   .prepend('<div class="smog3"><img src="images/smokeEffect.png" alt="연기">')
    function moveRight(){
        $('.smog1').delay(500).animate({left:'100%'},50000)
        $('.smog2').animate({left:'-20%'},20000)
        $('.smog3').animate({left:'20%'},50000)

    }
    function moveLeft(){
        $('.smog1').animate({left:0},50000)
        $('.smog2').animate({left:'100%'},50000)
        $('.smog3').animate({left:'100%'},50000)

    }
    setInterval(moveRight)
    setInterval(moveLeft)

})
