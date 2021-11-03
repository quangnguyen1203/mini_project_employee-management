App.getUser();
function totalEmployee(){
    $.ajax({
        type:"GET",
        url: "/employees/list-employee"
    }).done(function (employees){
        let total_employee = employees.length;
        let content = "";
        content += `<h2 class="my-0"><span data-plugin="counterup">${total_employee}</span></h2>
                    <p class="fw-bold mb-0">Nhân viên</p>`;
        $("#total_employee").html(content);
    })
}
totalEmployee();

function totalOffice(){
    $.ajax({
        type:"GET",
        url: "/offices/allOffice"
    }).done(function (offices){
        let total_office = offices.length;
        let content = "";
        content += `<h2 class="my-0"><span data-plugin="counterup">${total_office}</span></h2>
                    <p class="fw-bold mb-0">Chi nhánh</p>`;
        $("#total_office").html(content);
    })
}
totalOffice();