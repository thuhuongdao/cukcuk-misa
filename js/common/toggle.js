$(document).ready(function(){
    $(".toggle").click(function(){
        console.log("co");
         console.log($(".menu").css("width"));
        if($(".menu").css("width") == "220px"){
            console.log("hello");
            console.log(this);
             $(".menu").find("p").css("display","none");
            $(".menu").css("width", "50px");
            $(".content").css("width","calc(100% - 51px)");

        }else{
            $(".menu").find("p").css("display","block");
            $(".menu").css("width", "220px");
            $(".content").css("width","calc(100% - 221px)"); 
        }
    })
})
