$(document).ready(function(){
    
    // click arrow
    $(".wrap-drop-icon").click(function(){
       
        var dropIcon = $(this).children(".dropdown-icon");
        var comboBoxSelected = $(this).parent();
        var comboBoxContent = comboBoxSelected.siblings();
        
        if(dropIcon.hasClass("fa-angle-down")){

           $(this).css("background-color","#e5e5e5")
           dropIcon.removeClass("fa-angle-down");
            dropIcon.addClass("fa-angle-up");
            comboBoxSelected.css("border-color","#019160");
        
            comboBoxContent.show();
            
            
            
        }else{
            $(this).css("background-color","#ffffff")
           dropIcon.removeClass("fa-angle-up");
            dropIcon.addClass("fa-angle-down");
            comboBoxSelected.css("border-color","#bbbbbb");
        
            comboBoxContent.hide();

            
            
            
        }
        
    })
    //select item
    $(".combo-box-item").click(function(){
        //active selected item
        $(this).siblings().removeClass("combo-box-active");
        $(this).addClass("combo-box-active");


        var comboBoxContent = $(this).parent();
        var comboBoxSelected = comboBoxContent.siblings();
        comboBoxSelected.children("input").val($(this).children('p').text());
        // comboBoxSelected.children(".x-icon").css("display","block");

        //boder combo-box
        comboBoxSelected.css("border-color","#D2D2D2");

        //reverse arrow
        var dropIcon = comboBoxSelected.find(".dropdown-icon");
        dropIcon.removeClass("fa-angle-up");
        dropIcon.addClass("fa-angle-down");
        //reverse background arrow
        var wrapDropIcon = comboBoxSelected.find(".wrap-drop-icon");
        wrapDropIcon.css("background-color", "#ffffff")

        


        //close com-box-content
        comboBoxContent.hide();



        
        
       
        
    });

    
});