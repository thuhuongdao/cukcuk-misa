$(document).ready(function(){
    
    $(".valid-input").focus(function(){
        $(this).siblings(".title").css("display","none");
            $(this).siblings(".fa-caret-down").css("display","none");
    })
    $(".valid-input").blur(function(){
        if($(this).val()== ""){
            $(this).siblings(".title").css("display","block");
            $(this).siblings(".fa-caret-down").css("display","block");
            $(this).parent().css("border-color","#FF4747");
            $(this).attr("valid", "0");
        }
    })
    $("#employee-identify").keyup(function(value) {
        console.log("filter")
        if(/^\d*$/.test(this.value)){// Allow digits only, using a RegExp
            this.oldValue = this.value;
        }else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;  
        }else{
            this.value = "";
        }
      });

})
function validDate(){
    console.log("validate");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;

    $("input[type=date]").attr("max",today);
}
function validForm(){
    if( $("#employee-code").attr("valid") == 0) return false;
    if( $("#employee-fullname").attr("valid") == 0) return false;
    if( $("#employee-dob").attr("valid") == 0) return false;
    if( $("#employee-phone").attr("valid") == 0) return false;
    if( $("#employee-email").attr("valid") == 0) return false;
    if( $("#employee-identify").attr("valid") == 0) return false;
    if( $("#employee-identify-date").attr("valid") == 0) return false;
    if( $("#employee-identify-place").attr("valid") == 0) return false;
    if( $("#employee-joindate").attr("valid") == 0) return false;
    if( $("#employee-salary").attr("valid") == 0) return false;
    if( $("#employee-position").attr("valid") == 0) return false;
    if( $("#employee-department").attr("valid") == 0) return false;
    return true;
    
    
}
