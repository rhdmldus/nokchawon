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
    
//    africa
    $('#waterAfri').prepend(
        '<img src="images/africa.jpg" class="africaImg">',
        '<div class="n">01','<img src="images/leaf1.png" class="leaf1 leaf">'
    )
    
    
//    nanum
    $('#nanumWrap').prepend(
        '<img src="images/nanum.png" class="nanumImg">',
        '<img src="images/nanumMark.png" class="nanumMark">',
        '<div class="n">How?'
    )
    
    
    
//    hope4children
    $('#hope4Children').prepend(
        '<img src="images/hopeKiz.jpg" class="hopeKiz">',
        '<div class="n">02','<img src="images/leaf2.png" class="leaf2 leaf">'
    )
    
//    worldVision
    $('#worldVisionTextWrap').prepend(
        '<img src="images/leaf3.png" class="leaf3 leaf">',
        '<div class="n video">Video',
        '<img src="images/worldKid.png" class="worldKid">'
    )
  
    
//    페이지 스크롤효과
    
    var section1pos = $('#waterAfri').position().top;
    var section2pos = $('#nanum').position().top;
    var section3pos = $('#hope4Children').position().top;
    var section4pos = $('#worldVision').position().top;
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= section1pos-300){
            $('.africaImg:not(:animated)').animate({top:0,opacity:1},1000)
            
        }
        if($(this).scrollTop() >= section2pos-500){
             $('.nanumMark:not(:animated)').animate({width:100},1000).css({top:100,left:155})
            
        }
        if($(this).scrollTop() >= section3pos-600){
            $('.hopeKiz').animate({left:0,opacity:1},1000)
        }
        if($(this).scrollTop() >= section4pos-500){
            $('.worldKid').animate({width:'270px',top:-90,left:0,opacity:1},1000)
//            
        }
        
    })
    
    
    
    
  })
