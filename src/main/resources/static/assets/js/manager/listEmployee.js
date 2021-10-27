function getAllEmployee(){
    $.ajax({
        type: "GET",
        url: "/employees/list-employee"
    }).done(function (employee){
	console.log(employee)
        let content = "";
        for (let i = employee.length-1; i >= 0; i--) {
            content += `
                        <tr id="row${employee[i].employee_id}">
                              <input hidden id="${employee[i].employee_id}">
                              <td>${employee[i].employee_name}</td>
                              <td>${employee[i].dob}</td>
                              <td>${employee[i].employee_address}</td>
                              <td>${employee[i].office_name}</td>
							  <td>${employee[i].skill_name}</td>
                              <td class="text-center">
                                <button value="${employee[i].employee_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="far fa-edit"></i>Sửa</button>
                                <button value="${employee[i].employee_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xóa</button>
                              </td>
                        </tr>
                `;
        }
        $("#employeeList tbody").html(content);
        })
        /*$(".delete-button").on("click", function (){
            App.showDeleteConfirmDialog().then((result) => {
                if (result.isConfirmed){
                    let id = $(this).attr("value");
                    deleteConfirm(id);
                }
            });
        })
        $(".edit-button").on("click",function (){
            let id = $(this).attr("value");
            editProduct(id);
        })*/
/*    })*/
}

getAllEmployee();