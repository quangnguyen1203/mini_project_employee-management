function getAllHiddenEmployee(){
    $.ajax({
        type: "GET",
        url: "/employees/hidden-list-employee"
    }).done(function (employee){
        let content = "";
        for (let i = employee.length-1; i >= 0; i--) {
            content += `
                <tr id="row${employee[i].employee_id}">
                      <input hidden id="${employee[i].employee_id}">
                      <td>${employee[i].employee_name}</td>
                      <td>${employee[i].dob}</td>
                      <td>${employee[i].employee_address}</td>
					  <td>${employee[i].introduce}</td>
					  <td>${employee[i].date_start}</td>
                      <td>${employee[i].office_name}</td>
					  <td>${employee[i].skill_name}</td>
                      <td class="text-center">
                        <button value="${employee[i].employee_id}" class="btn btn-outline-primary mr-2 restore-button" ><i class="far fa-edit"></i>Khôi phục</button>
						<button value="${employee[i].employee_id}" class="btn btn-outline-danger mr-2 delete-button" ><i class="far fa-edit"></i>Xóa</button>
                      </td>
                </tr>
	        `;
        }
        $("#employeeList tbody").html(content);
		$("#employeeList").DataTable({
		    columnDefs: [
		        { orderable: false, targets: [1,2,3,6,7] },
		        { searchable: false, targets: [1,2,3,6,7] }
		    ],
		    "language": {
                "url": "//cdn.datatables.net/plug-ins/1.11.3/i18n/vi.json"
            }
		})
        $(".restore-button").on("click",function (){
            let id = $(this).attr("value");
            restoreConfirm(id);
        })
		$(".delete-button").on("click",function (){
            let id = $(this).attr("value");
            deleteConfirm(id);
        })
   })
}

function restoreConfirm(employeeID) {
	App.showRestoreConfirmDialog().then((result) => { 
		if (result.isConfirmed) {
			$.ajax({
		        type : "DELETE",
		        url : `/employees/hidden-employee/${employeeID}`
		    }).done(function (){
		        $("#row" + employeeID).remove();
		        App.showSuccessAlert("Khôi phục thành công!")
		    }).fail(function (){
		        App.showErrorAlert("Đã xảy ra lỗi!")
		    })
		}
	}) 
}

function deleteConfirm(employeeID) {
	App.showDeleteConfirmDialog().then((result) => { 
		if (result.isConfirmed) {
			$.ajax({
		        type : "DELETE",
		        url : `/employees/delete/${employeeID}`
		    }).done(function (){
		        $("#row" + employeeID).remove();
		        App.showSuccessAlert("xóa nhân viên thành công!")
		    }).fail(function (){
		        App.showErrorAlert("Đã xảy ra lỗi!")
		    })
		}
	}) 
}

getAllHiddenEmployee();