$(document).ready(function(){
    function openDrop(dropTop,dropContent,dropIcon){
        console.log("open")
        
        $(dropTop).css("border-color","#019160");
        dropIcon.removeClass("fa-angle-down");
        dropIcon.addClass("fa-angle-up");
        dropContent.show();
        

    }
    function closeDrop(dropTop){
        var dropContent = $(dropTop).siblings();
        var dropIcon = $(dropTop).children(".dropdown-icon");
        console.log("open")
       
        $(dropTop).css("border-color","#bbbbbb");
        
            dropIcon.removeClass("fa-angle-up");
            dropIcon.addClass("fa-angle-down");
            dropContent.hide();

    }
    //open close dropdown event
    $(".dropdown-top").click(function(){
        var dropContent = $(this).siblings();
        var dropIcon = $(this).children(".dropdown-icon");
        
        if(dropContent.is(":hidden")){
           
            openDrop(this, dropContent,dropIcon)
            
            
            
        }else{
            console.log("co vao day");
          
            closeDrop(this);

            
            
            
        }
        
    })
    //select item
    $(".dropdown-item").click(function(){
        $(this).siblings().removeClass("dropdown-active");
        $(this).addClass("dropdown-active");
        $(this).parent().siblings().children("p").text($(this).children('p').text());
        
        
        closeDrop($(this).parent().siblings());
        
    });

    
});