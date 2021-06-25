$(function(){
    $('.c-button__menu').click(function(){
        $('.l-aside').css('display','block');/*ボタンが×に代わる*/
    });
    $('.c-button--close').click(function(){
        $('.l-aside').css('display','none');
    });
});
