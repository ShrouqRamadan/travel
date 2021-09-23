new WOW().init();
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
var scroll = new SmoothScroll('a[href*="#"]');
$(function() {  
    $("body").niceScroll();
});
jQuery("#responsive_headline").fitText(1.2, { minFontSize: '50x', maxFontSize: '70px' });
$(function() {  
    $("body").niceScroll();
});

$(window).scroll(function(){
    let x=$(window).scrollTop();
    if(x>450){
        $('.navbar').css('background','black ')
        $('.go').css('opacity','1')
    }
   
    else{
        $('.navbar').css('background','transparent ')
        $('.go').css('opacity','0')
    }
})

let set=document.querySelector(".set")

let body =document.querySelector('.body')
set.onclick=function(){ 
    body.classList.toggle("dark")
}


let red=document.querySelector(".red")
red.onclick=function(){ 
    body.classList.toggle("color");
    // blue.classList.remove();
}
let blue=document.querySelector(".blue")
blue.onclick=function(){ 
    body.classList.toggle("color2");
    // red.classList.remove();
}

