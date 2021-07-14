$(document).ready(function(){
    console.log("zzz");
    $(".input input").focus(function(){


   
        $(this).parent().addClass("input-focus");
    })
    $(".input input").keyup(function(){

        console.log($(this).val());
        if($(this).val() != ""){
           
            $(this).siblings(".x-icon").css("display", "block");
        }else{
            $(this).siblings(".x-icon").css("display", "none");
        }
    })
    $(".input .x-icon").click(function(){
        console.log("co vao day");
        $(this).siblings("input").val("");
        $(this).css("display", "none");
    })
    
    $(".input input").blur(function(){


        console.log("heoo");
        $(this).parent().removeClass("input-focus");
        

    })
 
    

})