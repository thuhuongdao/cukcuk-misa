$(document).ready(function(){
    let employee = new EmployeePage();
    employee.loadData();
})

class EmployeePage{
    constructor(){

    }
    loadData(){
        // Goi API lay du lieu
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
                
            }).fail(function (response) {
                alert("Failed");
            })
    
        })

        //Xu ly du lieu

        //Hien thi du lieu len table
    }
    add(){

    }
    update(){

    }
    delete(){

    }
}