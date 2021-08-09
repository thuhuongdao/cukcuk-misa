$(document).ready(function(){
    
  //focus input

    $(".combo-box-input").click(function(){
     

        //change border color
        var comboBoxSelected = $(this).parent();
        comboBoxSelected.css("border-color","#019160");
        var arrowBox = $(this).next();
        arrowBox.css("border-left-color","#019160");
        
        //display all items
        var comboBoxContent = comboBoxSelected.siblings();
         var comboBoxItems = comboBoxContent.children();
       
        comboBoxItems.css("display","flex");

        //reverse arrow
        var arrow = arrowBox.children();
        arrow.removeClass("fa-angle-down");
        arrow.addClass("fa-angle-up");

    })

    // keyup for input
    
    $(".combo-box-input").keyup(function(event){
      

        let comboBoxSelected = $(this).parent();
        var arrowBox = $(this).next();
        let comboBoxItems = comboBoxSelected.siblings().children();
        //filter item and show 
        let textInput = $(this).val();
       
        let filters = comboBoxItems.filter(function(index,item){
        
            var textItem = $(item).children("p");

            return (textItem.text().toLowerCase().indexOf(textInput.toLowerCase())) > -1;
        });
       

        if (event.keyCode == 40) {
            

            if (filters.length > 0) {
                
               
                let pre = $(filters).filter(".combo-box-item-hover");
               

                if(pre.length == 0){
                 
                    filters.first().mouseenter();
                    
                }else if(pre != filters.children().last()){
                    pre.mouseleave();
                    let current = pre.next();
                    current.mouseenter();

                }
                
    
               
            }
            
        }else if (event.keyCode == 38) {
            
            if (filters.length > 0) {
                
                let after = $(filters).filter(".combo-box-item-hover");
                

               
                if(after != filters.children().first()){
                    after.mouseleave();
                    let current = after.prev();
                    current.mouseenter();

                }
            
    
               
            }

        }else if(event.keyCode == 13){
            let current = $(filters).filter(".combo-box-item-hover");
            $(current).click();

        }else{

            if (filters.length > 0){

                comboBoxSelected.css("border-color","#019160");
                
                arrowBox.css("border-left-color","#019160");

                comboBoxItems.css("display","none");
                filters.css("display","flex");
                
                 filters.first().mouseenter();




            }else{
                comboBoxSelected.css("border-color","#FF4747");
                
                arrowBox.css("border-left-color","#FF4747");

            }
        }
        
        
        
       
        
        


    })
    $(".combo-box-item").on('mouseenter', function(){

        $(this).addClass('combo-box-item-hover');
        
        
    }).on('mouseleave',  function(){
        $(this).removeClass('combo-box-item-hover');
    });
      // click arrow
    $(".wrap-drop-icon").click(function(){
       
        var arrow = $(this).children(".dropdown-icon");
        var comboBoxSelected = $(this).parent();
        var comboBoxContent = comboBoxSelected.siblings();
        
        if(arrow.hasClass("fa-angle-down")){

           
           arrow.removeClass("fa-angle-down");
            arrow.addClass("fa-angle-up");
            comboBoxSelected.css("border-color","#019160");

            $(this).css("border-left-color","#019160");
        
            comboBoxContent.children().css("display","flex");
            
            
            
        }else{
           
           arrow.removeClass("fa-angle-up");
            arrow.addClass("fa-angle-down");
            
        
            comboBoxContent.children().css("display","none");

            
            
            
        }
        
    })
    //select item
    $(".combo-box-item").click(function(){
        

        $(this).removeClass("combo-box-item-hover")
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
        // var wrapDropIcon = comboBoxSelected.find(".wrap-drop-icon");
        // wrapDropIcon.css("background-color", "#ffffff")

        


        //close com-box-content
       
        comboBoxContent.children().css("display","none");
        
        comboBoxSelected.children("input").focus();



        
        
       
        
    });

    
});