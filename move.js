$(function(){
    $('.c-button__menu').click(function(){
        $('.l-nav').addClass('is-nav--open'); 
        $('.l-aside__layer').addClass('is-aside__layer--open');
    });


    $('.c-button--close').click(function(){
       $('.l-nav').removeClass('is-nav--open');
       $('.l-aside__layer').removeClass('is-aside__layer--open');
    });
});
