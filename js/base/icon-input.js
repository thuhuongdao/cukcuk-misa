$(document).ready(function(){
    console.log("zzz");
    $(".icon-input input").focus(function(){


   
        $(this).parent().addClass("input-focus");
    })
    $(".icon-input input").keyup(function(){

        console.log($(this).val());
        if($(this).val() != ""){
           
            $(this).siblings(".x-icon").css("display", "block");
        }else{
            $(this).siblings(".x-icon").css("display", "none");
        }
    })
    $(".icon-input input").blur(function(){


  
        $(this).parent().removeClass("input-focus");
    })
    $(".icon-input .x-icon").click(function(){
        $(this).siblings("input").val("");
        $(this).css("display", "none");
    })
    

})