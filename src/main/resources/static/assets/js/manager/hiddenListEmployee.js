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
        $(".restore-button").on("click",function (){
            let id = $(this).attr("value");
            restoreConfirm(id);
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

getAllHiddenEmployee();