function getAllOffice() {
	$.ajax({
		type: "GET",
		url: "/offices/allOffice"
	}).done(function(offices) {
		let content = "";
		for (let i = 0; i < offices.length; i++) {
			content += `
                    <option value="${offices[i].office_id}">${offices[i].office_name}</option>
                `;
		}
		$("#office").html(content);
	})
}

getAllOffice();

function getAllSkill() {
	$.ajax({
		type: "GET",
		url: "/skills/allSkill"
	}).done(function (skills){
		 let content = "";
		for (let i = 0; i < skills.length; i++) {
			content += `
                    <option value="${skills[i].skill_id}">${skills[i].skill_name}</option>
                `;
		}
		$("#employee_skill").html(content);
		$('select[name=listSkill]').val(1);
		$('.selectpicker').selectpicker('refresh')
	})
}

getAllSkill();

function getAllEmployee(){
    $.ajax({
        type: "GET",
        url: "/employees/list-employee"
    }).done(function (employee){
        let content = "";
        for (let i = employee.length-1; i >= 0; i--) {
            content += `
                <tr id="row${employee[i].employee_id}">
                      <input hidden id="${employee[i].employee_id}">
                      <td><a value="${employee[i].employee_id}" class="btn employee_detail"><u>${employee[i].employee_name}<u></a></td>
                      <td>${employee[i].dob}</td>
                      <td>${employee[i].employee_address}</td>
					  <td>${employee[i].introduce}</td>
					  <td>${employee[i].date_start}</td>
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
		$("#employeeList").DataTable({
		    columnDefs: [
		        { orderable: false, targets: [1,2,3,6,7] },
		        { searchable: false, targets: [1,2,3,6,7] }
		    ],
		    "language": {
		        "processing": "Đang xử lý...",
		        "infoFiltered": "(được lọc từ _MAX_ mục)",
		        "aria": {
		            "sortAscending": ": Sắp xếp thứ tự tăng dần",
		            "sortDescending": ": Sắp xếp thứ tự giảm dần"
		        },
		        "autoFill": {
		            "cancel": "Hủy",
		            "fill": "Điền tất cả ô với <i>%d<\/i>",
		            "fillHorizontal": "Điền theo hàng ngang",
		            "fillVertical": "Điền theo hàng dọc"
		        },
		        "buttons": {
		            "collection": "Chọn lọc <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
		            "colvis": "Hiển thị theo cột",
		            "colvisRestore": "Khôi phục hiển thị",
		            "copy": "Sao chép",
		            "copyKeys": "Nhấn Ctrl hoặc u2318 + C để sao chép bảng dữ liệu vào clipboard.<br \/><br \/>Để hủy, click vào thông báo này hoặc nhấn ESC",
		            "copySuccess": {
		                "1": "Đã sao chép 1 dòng dữ liệu vào clipboard",
		                "_": "Đã sao chép %d dòng vào clipboard"
		            },
		            "copyTitle": "Sao chép vào clipboard",
		            "csv": "File CSV",
		            "excel": "File Excel",
		            "pageLength": {
		                "-1": "Xem tất cả các dòng",
		                "_": "Hiển thị %d dòng"
		            },
		            "pdf": "File PDF",
		            "print": "In ấn"
		        },
		        "infoThousands": "`",
		        "select": {
		            "cells": {
		                "1": "1 ô đang được chọn",
		                "_": "%d ô đang được chọn"
		            },
		            "columns": {
		                "1": "1 cột đang được chọn",
		                "_": "%d cột đang được được chọn"
		            },
		            "rows": {
		                "1": "1 dòng đang được chọn",
		                "_": "%d dòng đang được chọn"
		            }
		        },
		        "thousands": "`",
		        "searchBuilder": {
		            "title": {
		                "_": "Thiết lập tìm kiếm (%d)",
		                "0": "Thiết lập tìm kiếm"
		            },
		            "button": {
		                "0": "Thiết lập tìm kiếm",
		                "_": "Thiết lập tìm kiếm (%d)"
		            },
		            "value": "Giá trị",
		            "clearAll": "Xóa hết",
		            "condition": "Điều kiện",
		            "conditions": {
		                "date": {
		                    "after": "Sau",
		                    "before": "Trước",
		                    "between": "Nằm giữa",
		                    "empty": "Rỗng",
		                    "equals": "Bằng với",
		                    "not": "Không phải",
		                    "notBetween": "Không nằm giữa",
		                    "notEmpty": "Không rỗng"
		                },
		                "number": {
		                    "between": "Nằm giữa",
		                    "empty": "Rỗng",
		                    "equals": "Bằng với",
		                    "gt": "Lớn hơn",
		                    "gte": "Lớn hơn hoặc bằng",
		                    "lt": "Nhỏ hơn",
		                    "lte": "Nhỏ hơn hoặc bằng",
		                    "not": "Không phải",
		                    "notBetween": "Không nằm giữa",
		                    "notEmpty": "Không rỗng"
		                },
		                "string": {
		                    "contains": "Chứa",
		                    "empty": "Rỗng",
		                    "endsWith": "Kết thúc bằng",
		                    "equals": "Bằng",
		                    "not": "Không phải",
		                    "notEmpty": "Không rỗng",
		                    "startsWith": "Bắt đầu với"
		                }
		            },
		            "logicAnd": "Và",
		            "logicOr": "Hoặc",
		            "add": "Thêm điều kiện",
		            "data": "Dữ liệu",
		            "deleteTitle": "Xóa quy tắc lọc"
		        },
		        "searchPanes": {
		            "countFiltered": "{shown} ({total})",
		            "emptyPanes": "Không có phần tìm kiếm",
		            "clearMessage": "Xóa hết",
		            "loadMessage": "Đang load phần tìm kiếm",
		            "collapse": {
		                "0": "Phần tìm kiếm",
		                "_": "Phần tìm kiếm (%d)"
		            },
		            "title": "Bộ lọc đang hoạt động - %d",
		            "count": "{total}"
		        },
		        "datetime": {
		            "hours": "Giờ",
		            "minutes": "Phút",
		            "next": "Sau",
		            "previous": "Trước",
		            "seconds": "Giây"
		        },
		        "emptyTable": "Không có dữ liệu",
		        "info": "Hiển thị _START_ tới _END_ của _TOTAL_ dữ liệu",
		        "infoEmpty": "Hiển thị 0 tới 0 của 0 dữ liệu",
		        "lengthMenu": "Hiển thị _MENU_ dữ liệu",
		        "loadingRecords": "Đang tải...",
		        "paginate": {
		            "first": "Đầu tiên",
		            "last": "Cuối cùng",
		            "next": "Sau",
		            "previous": "Trước"
		        },
		        "search": "Tìm kiếm:",
		        "zeroRecords": "Không tìm thấy kết quả"
		    }
		})
        $(".delete-button").on("click", function (){
            App.showDeleteConfirmDialog().then((result) => {
                if (result.isConfirmed){
                    let id = $(this).attr("value");
                    deleteConfirm(id);
                }
            });
        })
        $(".edit-button").on("click",function (){
            let id = $(this).attr("value");
            editEmployee(id);
        })

		$('.employee_detail').on("click", function () {
            let id = $(this).attr('value');
            employeeDetail(id);
        })
   })
}

function editEmployee(employeeID){
    $.ajax({
        type: "GET",
        url: `/employees/edit-employee/${employeeID}`,
    }).done(function (employee){
		$.ajax({
	        type: "GET",
	        url: `/employees/skill-employee/${employeeID}`,
	    }).done(function (skills){
			$('#employee_id').val(employee.employee_id);
	        $('#employee_name').val(employee.employee_name);
	        $('#employee_dob').val(employee.dob);
	        $('#employee_address').val(employee.employee_address);
			$('#employee_introduce').val(employee.introduce);
			$('#date_start').val(employee.date_start);
	        $('#list_skill').val(skills.skill_name);
			$('#office').val(employee.office.office_id);
	        $('#editModal').modal('show');
	    }).fail(function (){
	        App.showErrorAlert("Đã xảy ra lỗi!")
	    })
	})      
}

function employeeDetail(employeeID){
	$.ajax({
        type: "GET",
        url: `/employees/skill-employee/${employeeID}`,
    }).done(function (skills){
	console.log(skills)
		$('#id').val(skills.employee_id);
        $('#name').val(skills.employee_name);
        $('#dob').val(skills.dob);
        $('#address').val(skills.employee_address);
		$('#introduce').val(skills.introduce);
		$('#dateStart').val(skills.date_start);
        $('#skill').val(skills.skill_name);
		$('#office_name').val(skills.office_name);
        $('#employeeDetail').modal('show');
    }).fail(function (){
        App.showErrorAlert("Đã xảy ra lỗi!")
    })
}

function saveEmployee(){
	let employee_id = $("#employee_id").val();
	let employee_name = $("#employee_name").val();
	let dob = $("#employee_dob").val();
	let employee_address = $("#employee_address").val();
	let introduce = $("#employee_introduce").val();
	let date_start = $("#date_start").val();
	let office = $("#office").val();
	let employee_skill_tmp = $('select[name=employee_skill]').val();
	let newOffice = {
		office_id : office
	}
	
	let employee = {
		employee_id: employee_id,
		employee_name: employee_name,
		dob: dob,
        employee_address:  employee_address,
		introduce: introduce,
		date_start: date_start,
		office: newOffice
	}

    if ($("#edit-employee").valid()){
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "PUT",
            data: JSON.stringify(employee),
            url: `/employees/edit/${employee_id}`
		}).done(function (resp) {
			for (let i = 0; i < employee_skill_tmp.length ; i++) {
				let skill_id = Number(employee_skill_tmp[i]);
                let newEmployeeSkill = {
                    employee_id: employee_id,
					skill_id: skill_id
                }
                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "POST",
                    data: JSON.stringify(newEmployeeSkill),
                    url: "/employee-skill/create"
                }).done(function(){
					$.ajax({
				        type: "GET",
				        url: `/employees/skill-employee/${employee_id}`,
				    }).done(function (skills){
					 	$('#row'+employee_id+ ' td').remove();
						$('#row'+employee_id).html(`
			                <td>${employee.employee_name}</td>
			                <td>${employee.dob}</td>
			                <td>${employee.employee_address}</td>
			                <td>${employee.introduce}</td>
							<td>${employee.date_start}</td>	
							<td>${skills.office_name}</td>
							<td>${skills.skill_name}</td>
			                <td class="text-center">
			                    <button value="${employee.employee_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="fas fa-edit"></i>Sửa</button>
			                    <button value="${employee.employee_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xóa</button>
			                </td>`);
			            $(".delete-button").on("click", function (){
			                App.showDeleteConfirmDialog().then((result) => {
			                    if (result.isConfirmed){
			                        let id = $(this).attr("value");
			                        deleteConfirm(id);
			                    }
			                });
			            })
			            $(".edit-button").on("click",function (){
			                let id = $(this).attr("value");
			                editEmployee(id);
			            })
			            $('#editModal').modal("hide");
			            App.showSuccessAlert("Đã cập nhật thành công!")
			            $("#edit-employee")[0].reset();
				    })
				})
				
            }
        })
    }
}

function deleteConfirm(employeeID) {
    $.ajax({
        type : "DELETE",
        url : `/employees/${employeeID}`
    }).done(function (){
        $("#row" + employeeID).remove();
        App.showSuccessAlert("Đã xóa thành công!")
    }).fail(function (){
        App.showErrorAlert("Đã xảy ra lỗi!")
    })
}


$(".edit-button").on("click",editEmployee);

$(".save-employee").on("click",saveEmployee);

$(".delete-button").on("click",deleteConfirm);

getAllEmployee();