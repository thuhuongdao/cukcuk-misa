$(document).ready(function(){
    console.log("zzz");
    $(".input input").focus(function(){


        console.log("focus")
        $(this).parent().css("border-color","#019160")
        
    })
    $(".input input").keyup(function(){

        console.log("key up")
        console.log($(this).val());
        if($(this).val() != ""){
           
            $(this).siblings(".x-icon").css("display", "block");
        }else{
            $(this).siblings(".x-icon").css("display", "none");
        }
    })
    $(".input .x-icon").click(function(){
        console.log("x-icon");
        $(this).siblings("input").val("");
        $(this).css("display", "none");
        $(this).prev().focus();
      
        
    })
    
     $(".input input").blur(function(){


        console.log("blur");
        $(this).parent().css("border-color","#bbbbbb")
        $(this).siblings("x-icon").css("display","none");
        
        

    })
 
    

})