/*$(document).ready(function()
{
    $(window).scroll( function()
    {
        if(this.scrollY > 20){
      $('.navbar').addClass(" .sticky");
        }
        else{
            $('.navbar').removeClass(" .sticky");
        }
    });

/*  toggle menu*//*
$('.menu-btn').click( function()
{

    $('.navbar .menu').toggleClass("active");

   $('.menu-btn i').toggleClass("active");

    
});

});*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

   