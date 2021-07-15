$(document).ready(function(){
    
  //focus input

    $(".combo-box-input").focus(function(){
        console.log("focus");

        //change border color
        var comboBoxSelected = $(this).parent();
        comboBoxSelected.css("border-color","#019160");
        var arrowBox = $(this).next();
        arrowBox.css("border-left-color","#019160");
        console.log("fsadadas");
        //display all items
        var comboBoxContent = comboBoxSelected.siblings();
        
        //comboBoxContent.show();
         var comboBoxItems = comboBoxContent.children();
        comboBoxItems.css("display","flex");

        //reverse arrow
        var arrow = arrowBox.children();
        arrow.removeClass("fa-angle-down");
        arrow.addClass("fa-angle-up");

    })

    // keyup for input
    $(".combo-box-input").keyup(function(){
        console.log("nccnnc");

        //filter item and show 
        let textInput = $(this).val();
        
        let comboBoxItems = $(this).parent().siblings().children();
       
        console.log(comboBoxItems)
        let filters = comboBoxItems.filter(function(index,item){
            console.log(item)
            var textItem = $(item).children("p");

            return (textItem.text().toLowerCase().indexOf(textInput.toLowerCase())) > -1;
        });
        comboBoxItems.css("display","none");
        filters.css("display","flex");


    })
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

        // display text-selected into input
        var comboBoxContent = $(this).parent();
        var comboBoxSelected = comboBoxContent.siblings();
        comboBoxSelected.children("input").val($(this).children('p').text());
       
        

        // //boder combo-box
        // comboBoxSelected.css("border-color","#D2D2D2");

        //reverse arrow
        var arrow = comboBoxSelected.find(".dropdown-icon");
        arrow.removeClass("fa-angle-up");
        arrow.addClass("fa-angle-down");
        //reverse background arrow
        var wrapDropIcon = comboBoxSelected.find(".wrap-drop-icon");
        wrapDropIcon.css("background-color", "#ffffff")

        


        //close com-box-content
        comboBoxContent.hide();



        
        
       
        
    });

    
});