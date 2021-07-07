$(document).ready(function () {
    loadData();
});
function loadData() {
    $.ajax({
        method: "GET",
        url: "http://cukcuk.manhnv.net/v1/Employees",
    }).done(function (response) {
        alert("Successful");
        console.log(response);
        let data = response;
        $.each(data, function (index, item) {
            let customerCode = item.EmployeeCode;
            let phoneNumber = item.PhoneNumber;
            let fullName = item.FullName;
            let genderName = item.GenderName;
            let dateOfBirth = item.DateOfBirth;
            let email = item.Email;
            let dateOrigin = new Date(dateOfBirth).toLocaleDateString('en-GB');
            const numberFormat = new Intl.NumberFormat('vi-VN'
            );
            let salary = numberFormat.format(item.Salary);
            let trHtml = `<tr>
            <td scope="row">${customerCode}</td>
            <td>${fullName}</td>
            <td>${genderName}</td>
            <td class="text-align-center">${dateOrigin}</td>
            <td>${phoneNumber}</td>
            <td>${email}</td>
            <td>Fresher</td>
            <td>Khối sản xuất</td>
            <td class="text-align-right">${salary}</td>
            <td>Đang thử việc</td>
            </tr>`; 
            $('tbody').append(trHtml);
            $('tr').on("click", function () {
                modal.style.display = "block";
            });
        })
    }).fail(function (response) {
        alert("Failed");
    })
