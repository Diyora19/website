$(document).ready(function(){
    $(window).scroll(function(){
        $('nav').addClass('black')

    })


    // animatsiya
    $('#img22').hover(function(){
        $(this).siblings().css({height:'10px'})
        $(this).css({height: '500px'})
        
    })

    $('#img11').hover(function(){
        $(this).siblings().css({height:'10px'})
        $(this).css({height: '500px'})
        
        
    }) 

    $('#img33').hover(function(){
        $(this).siblings().css({height:'10px'})
        $(this).css({height: '500px'})
        
    })

    $('.img').mouseleave(function(){
        $('.img').css({height:"150px"})
    })

    $('#img11').click(function(){
        $('#C1').css({display: 'block'})
    })

    $('#img22').click(function(){
        $('#C2').css({display: 'block'})
    })
    
    $('#img33').click(function(){
        $('#C3').css({display: 'block'})
    })

    $('#img11').mouseleave(function(){
        $('#C1').css({display: 'none'})
    })

    $('#img22').mouseleave(function(){
        $('#C2').css({display: 'none'})
    })
    
    $('#img33').mouseleave(function(){
        $('#C3').css({display: 'none'})
    })


    $('.fixed').click(function(){
        $('html').scrollTop(0).delay('20000')
    }) //position fixed
})