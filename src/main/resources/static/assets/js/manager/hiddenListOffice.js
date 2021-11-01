function getAllHiddenOffice(){
    $.ajax({
        type: "GET",
        url: "/offices/allHiddenOffice"
    }).done(function (office){
        let content = "";
		let total_employee = 0;
		console.log(office)
        for (let i = office.length-1; i >= 0; i--) {
			content += `
	                    <tr id="row${office[i].office_id}">
	                      <td class="text-center">${office[i].office_name}</td>
						  <td class="text-center">${office[i].office_address}</td>
						  <td class="text-center">${total_employee}</td>
	                      <td class="text-center">
	                        <button value="${office[i].office_id}" class="btn btn-outline-danger restore-button" ><i class="fas fa-trash-alt"></i>Khôi phục</button>
	                      </td>
	                    </tr>
            		`;   
        }
        $("#officeList tbody").html(content);
		/*$.fn.dataTable.ext.errMode = 'none';*/
		$("#officeList").DataTable({
		    columnDefs: [
		        { orderable: false, targets: [2,3] },
		        { searchable: false, targets: [2,3] }
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
        $(".restore-button").on("click", function (){
            let id = $(this).attr("value");
            restoreConfirm(id);
        })
    })
}



function restoreConfirm(officeID) {
    App.showRestoreConfirmDialog().then((result) => {
	    if (result.isConfirmed) {
	        $.ajax({
	            type: "DELETE",
	            url: `/offices/hidden-office/${officeID}`,
	            success: function () {
	                $("#row" + officeID).remove();
	                App.showSuccessAlert("Khôi phục thành công!")
	            }
	        })
	    }
    })
}

getAllHiddenOffice();

$(".restore-button").on("click",restoreConfirm);