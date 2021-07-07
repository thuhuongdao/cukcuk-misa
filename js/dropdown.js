$(document).ready(function(){
    $(".dropdown-top").click(function(){
        $(this).siblings().toggle();
    })
    $(".dropdown-item").click(function(){
        $(this).siblings().removeClass("dropdown-active");
        $(this).addClass("dropdown-active");
        $(this).parent().siblings().children(':nth-child(1)').text($(this).children(':nth-child(2)').text());
        
        
        $(this).parent().hide();
        
    });

    
});