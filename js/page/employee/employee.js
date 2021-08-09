$(document).ready(function () {
  console.log("ready");
  let employee = new EmployeePage();
  //load du lieu table
  employee.loadData();

  //event
  var control = 1;
  //open add-employ-modal

  $("#btn-add-employee").click(function () {
    control = 1;

    $("#add-employee-modal-id").css("display", "block");
    getNewEmployeeCode();
    // validDate();
  });
  $("#x").click(function () {
    $("#add-employee-modal-id").css("display", "none");
  });

 
  // window.onclick = function(event){
  //     var modal = document.getElementById("add-employee-modal-id");
  //     if(event.target== modal){
  //         modal.style.display = "none";
  //     }
  // }
  $(".employee-list tbody").on("click", "tr", function () {
    control = 2;
    console.log(this);
    loadForm($(this).attr("employeeid"));
  });
  $("#btn-save-employee").click(function () {
    if (control == 1) employee.add();
    else employee.update();
  });

  
});

class EmployeePage {
  constructor() {}
  loadData() {
    // Goi API lay du lieu

    $.ajax({
      method: "GET",
      url: "http://cukcuk.manhnv.net/v1/Employees",
    })
      .done(function (response) {
        $.each(response, function (index, item) {
          let employeeId = item.EmployeeId;
          let employeeCode = item.EmployeeCode;
          let fullName = item.FullName;
          let genderName = item.GenderName;

          let dateOfBirth = item.DateOfBirth;
          let dateOrigin;
          if (
            dateOfBirth == null &&
            dateOfBirth == undefined &&
            dateOfBirth == "" &&
            dateOfBirth == 0
          )
            dateOrigin = "Chưa xác định";
          else dateOrigin = new Date(dateOfBirth).toLocaleDateString("en-GB");

          let phoneNumber = item.PhoneNumber;
          let email = item.Email;
          let department = item.DepartmentName;

          const numberFormat = new Intl.NumberFormat("de-DE");
          let salary = numberFormat.format(item.Salary);

          let trHtml = `<tr employeeid="${employeeId}">
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

          $(".employee-list tbody").append(trHtml);
        });
      })
      .fail(function (response) {
        alert("Failed");
      });
  }

  add() {
    let me = this;

    let gender;
    if ($("#employee-gender").val() == "Nữ") gender = 0;
    else if ($("#employee-gender").val() == "Nam") gender = 1;
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
        identityDate: $("#employee-identify-date").val(),
        identityPlace: $("#employee-identify-place").val(),
        joinDate: $("employee-joindate").val(),

        personalTaxCode: $("#employee-tax-code").val(),
        salary: $("#employee-salary").val(),

        positionName: $("#employee-position").val(),

        departmentName: $("#employee-department").val(),
      }),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    })
      .done(function () {
        console.log("add dc");
        clearForm();
        $("#add-employee-modal-id").css("display", "none");

        $(".employee-list tbody").empty();
        me.loadData();
      })
      .fail(function () {
        //alert("Add employee fail")
        // console.log("Add employee fail");
      });
  }
  update() {
    let me = this;
      let id = $("#add-employee-modal-id").attr("employeeid");
      let gender;
    if ($("#employee-gender").val() == "Nữ") gender = 0;
    else if ($("#employee-gender").val() == "Nam") gender = 1;
    else gender = 2;
      $.ajax({
          method : "PUT",
          url : "http://cukcuk.manhnv.net/v1/Employees/" + id,
          data: JSON.stringify({
            employeeCode: $("#employee-code").val(),
    
            fullName: $("#employee-fullname").val(),
            gender: gender,
            dateOfBirth: $("#employee-dob").val(),
            phoneNumber: $("#employee-phone").val(),
            email: $("#employee-email").val(),
    
            identityNumber: $("#employee-identify").val(),
            identityDate: $("#employee-identify-date").val(),
            identityPlace: $("#employee-identify-place").val(),
            joinDate: $("employee-joindate").val(),
    
            personalTaxCode: $("#employee-tax-code").val(),
            salary: $("#employee-salary").val(),
    
            positionName: $("#employee-position").val(),
    
            departmentName: $("#employee-department").val(),
            workStatus : 0,
          }),
          dataType: "json",
          contentType: "application/json; charset=utf-8",
      }).done(function(){
          console.log("sua dc");
          clearForm();
          $("#add-employee-modal-id").css("display","none");
          $(".employee-list tbody").empty();
          me.loadData();
      }).fail(function(){
          console.log("k sua dc");
      })
  }
  delete() {}
}
function getNewEmployeeCode() {
  console.log("get emlpoy");
  $.get("http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode")
    .done(function (res) {
      $("#employee-code").val(res);
    })
    .fail(function (response) {
      alert("Failed to get new employee");
    });
}
function loadForm(id) {
  $.ajax({
    method: "GET",
    url: "http://cukcuk.manhnv.net/v1/Employees/" + id,
  })
    .done(function (res) {
      console.log("dc");
        $("#add-employee-modal-id").attr("employeeid", id);
      //render data into modal 
      $("#employee-code").val(res.EmployeeCode);
      $("#employee-fullname").val(res.FullName);
      //console.log(res.DateOfBirth);
      let dob = dateFormat(res.DateOfBirth); 
      $("#employee-dob").val(dob);

      $("#employee-gender").val(res.GenderName);
      $("#employee-identify").val(res.IdentityNumber);
      let identifyDate = dateFormat(res.IdentityDate); 
      $("#employee-indetify-date").val(identifyDate);
      
      $("#employee-identify-place").val(res.IdentityPlace);
      $("#employee-email").val(res.Email);
      $("#employee-phone").val(res.PhoneNumber);
      $("#employee-position").val(res.PositionName);
      console.log("res.DepartmentName");
      $("#employee-department").val(res.DepartmentName);
      $("#employee-tax-code").val(res.PersonalTaxCode);
      $("#employee-salary").val(res.Salary);
      let joinDate = dateFormat(res.JoinDate); 
      $("#employee-joindate").val(joinDate);
      
//open modal
      $("#add-employee-modal-id").css("display", "block");
    })
    .fail(function (res) {
      console("k dc");
    });
}
function dateFormat(jsonDate) {
  if (jsonDate == null) {
    date = "";
  } else {
    date = new Date(jsonDate);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    date = yyyy + "-" + mm + "-" + dd;
  }
  return date;
}

function clearForm() {
  $("#employee-code").val("");
  $("#employee-fullname").val("");

  $("#employee-dob").val("");

  $("#employee-gender").val();
  $("#employee-identify").val();

  $("#employee-indetify-date").val();

  $("#employee-identify-place").val();
  $("#employee-email").val();
  $("#employee-phone").val();
  $("#employee-position").val();
  $("#employee-department").val();
  $("#employee-tax-code").val();
  $("#employee-salary").val();

  $("#employee-joindate").val("");
}
