$(function(){
    $('#nav').hover(function(){
        $(this).animate({width:'175px'},200);
    },function(){
        $(this).animate({width:'60px'},300);
    })
});