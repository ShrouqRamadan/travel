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
    body.classList.toggle("dark");
    body.classList.remove("green")
    body.classList.remove("sky")
    body.classList.remove("pink")
}

let set1=document.querySelector(".set1")
set1.onclick=function(){ 
    body.classList.toggle("sky")
    body.classList.remove("green")
    body.classList.remove("dark")
    body.classList.remove("pink")
}
let set2=document.querySelector(".set2")
set2.onclick=function(){ 
    body.classList.toggle("pink")
    body.classList.remove("green")
    body.classList.remove("dark")
    body.classList.remove("sky")
}
let set3=document.querySelector(".set3")
set3.onclick=function(){ 
    body.classList.toggle("green")
    body.classList.remove("pink")
    body.classList.remove("dark")
    body.classList.remove("sky")
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

$(".setting").click(function(){
    $(".ulcolor").toggle();
})
