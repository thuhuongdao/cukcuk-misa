$(document).ready(function(){
    console.log("ready");
    let employee = new EmployeePage();
    //load du lieu table
    employee.loadData();
    
    //event
    var control = 1; 
    //open add-employ-modal
    
    $("#btn-add-employee").click(function(){
        console.log("click modal");
        $("#add-employee-modal-id").css("display","block");
        getNewEmployeeCode();
        validDate();

        
    })
    $("#x").click(function(){
        console.log("click x");
        $("#add-employee-modal-id").css("display","none");
    })

    
    // function closePopUp(){
    //     var modal = document.getElementById("add-employee-modal-id");
    //     modal.style.display="none";
    // }
    // window.onclick = function(event){
    //     var modal = document.getElementById("add-employee-modal-id");
    //     if(event.target== modal){
    //         modal.style.display = "none";
    //     }
    // }
    $("#btn-save-employee").click(function(){
        console.log("save");
        
       employee.add();
        
    })



})

class EmployeePage{
    constructor(){

    }
    loadData(){
        // Goi API lay du lieu
        console.log("loaddata");
        $.ajax({
            method: "GET",
            url: "http://cukcuk.manhnv.net/v1/Employees",
        }).done(function (response) {
            
            console.log(response);
            $.each(response, function (index, item) {
                let employeeCode = item.EmployeeCode;
                let fullName = item.FullName;
                let genderName = item.GenderName;
    
                let dateOfBirth = item.DateOfBirth;
                let dateOrigin;
                if(dateOfBirth == null && dateOfBirth == undefined && dateOfBirth == "" && dateOfBirth == 0)
                    dateOrigin="Chưa xác định";
                else dateOrigin = new Date(dateOfBirth).toLocaleDateString('en-GB');
    
                let phoneNumber = item.PhoneNumber;
                let email = item.Email;
                let department = item.DepartmentName;
             
                
                const numberFormat = new Intl.NumberFormat('de-DE');
                let salary = numberFormat.format(item.Salary);

                let trHtml = `<tr>
                <td>${employeeCode}</td>
                <td>${fullName}</td>
                <td>${genderName}</td>
                <td>${dateOrigin}</td>
                <td>${phoneNumber}</td>
                <td>${email}</td>
                <td>Fresher</td>
                <td>${department}</td>
                <td class="salary">${salary}</td>
                <td>Đang thử việc</td>
           
                </tr>`; 

                $('.employee-list tbody').append(trHtml);
            })
        }).fail(function (response) {
            alert("Failed");
        })
    
    }

     
    
    add(){
        console.log("add");
        var gender;
        if($("#employee-gender").val() == "Nữ") gender = 0;
        else if($("#employee-gender").val() == "Nam") gender = 1;
        else gender = 2;
        $.ajax({
            type: "POST",
            url: "http://cukcuk.manhnv.net/v1/Employees",
            data: JSON.stringify({
                
                
            
                    
                
                    employeeCode: $("#employee-code").val(),
                    
                    fullName: $("#employee-fullname").val(),
                    gender: gender,
                    dateOfBirth: $("#employee-dob").val(),
                    phoneNumber: $("#employee-phone").val(),
                    email: $("#employee-email").val(),
            
                    identityNumber: $("#employee-identify").val(),
                    identityDate:  $("#employee-identify-date").val(),
                    identityPlace: $("#employee-identify-place").val(),
                    joinDate: $("employee-joindate").val(),
                    
                    personalTaxCode: $("#employee-tax-code").val(),
                    salary: $("#employee-salary").val(),
                
                    positionName: $("#employee-position").val(),
                    
                    departmentName: $("#employee-department").val()
                
                
            }),
            dataType: "json",
            contentType: "application/json; charset=utf-8",

            
        }).done(function(){
            console.log("add dc")
            //alert("Add new Employee Success!");
                // var modal = $("#add-employee-modal-id");
                // modal.css("display","none");
                // $('.employee-list tbody').empty();
                // loadData();
        }).fail(function(){
            //alert("Add employee fail")
            console.log("Add employee fail")
        })

    }
    update(){

    }
    delete(){

    }
}
function getNewEmployeeCode() {
    console.log("get emlpoy");
    $.get("http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode").done(function (res) {
        $('#employee-code').val(res);
    }).fail(function (response) {
        alert("Failed to get new employee");
    });
}
