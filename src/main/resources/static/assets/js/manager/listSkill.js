function getAllSkill(){
    $.ajax({
        type: "GET",
        url: "/skills/allSkill"
    }).done(function (skill){
        let content = "";
        for (let i = skill.length-1; i >= 0; i--) {
            content += `
                    <tr id="row${skill[i].skill_id}">
                      <td class="text-center">${skill[i].skill_name}</td>
                      <td class="text-center">
                        <button value="${skill[i].skill_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="far fa-edit"></i>Sửa</button>
                        <button value="${skill[i].skill_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xóa</button>
                      </td>
                    </tr>
            `;
        }
        $("#skillList tbody").html(content);
		$("#skillList").DataTable({
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
            let id = $(this).attr("value");
            deleteConfirm(id);
        })
        $(".edit-button").on("click",function (){
            let id = $(this).attr("value");
            editSkill(id);
        })
    })
}

function createSkill(){
    let skill_name = $("#skill_name").val();

    let skill = {
        skill_name:skill_name
    }
	if ($("#create-form").valid()){
		$.ajax({
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
	        type: "POST",
	        data: JSON.stringify(skill),
	        url: "/skills",
	        success: function (skill) {
	            $('#skillList tbody').append(`<tr id="row${skill.skill_id}">
	                        <td class="text-center">${skill.skill_name}</td>
	                        <td class="text-center">
	                            <button value="${skill.skill_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="far fa-edit"></i>Sửa</button>
	                            <button value="${skill.skill_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xóa</button>
	                        </td>
	                    </tr>`);
	            $("#create-form")[0].reset();
	            $(".delete-button").on("click", function (){
		            let id = $(this).attr("value");
		            deleteConfirm(id);
		        })
		        $(".edit-button").on("click",function (){
		            let id = $(this).attr("value");
		            editSkill(id);
		        })
	            $(".save-skill").on("click",saveSkill);

	            App.showSuccessAlert("Tạo mới kỹ năng thành công!");
	        }
	    })
	} 
}

function editSkill(skillID){
    $.ajax({
        type: "GET",
        url: `/skills/edit-skill/${skillID}`,
        success:function (skill){
            $('#upID').val(skill.skill_id);
		$('#upSkillName').val(skill.skill_name);
            $('#editModal').modal('show');
        }
    })
}

function saveSkill(){
    let skill_id = $("#upID").val();
    let skill_name = $("#upSkillName").val();

    let skill = {
        skill_id:skill_id,
        skill_name: skill_name
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(skill),
        url: `/skills/edit/${skill_id}`,
        success: function (skill) {
            $('#row'+skill_id+ ' td').remove();
            $('#row'+skill_id).html(`
                        <td class="text-center">${skill.skill_name}</td>
                        <td class="text-center">
                            <button value="${skill.skill_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="fas fa-edit"></i>Sửa</button>
                            <button value="${skill.skill_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xoá</button>
                        </td>`);
            $(".delete-button").on("click", function (){
	            let id = $(this).attr("value");
	            deleteConfirm(id);
	        })
	        $(".edit-button").on("click",function (){
	            let id = $(this).attr("value");
	            editSkill(id);
	        })
            $('#editModal').modal("hide");
            App.showSuccessAlert("Chỉnh sữa kỹ năng thành công!")
            $("#edit-skill")[0].reset();
        }
    })
}

function deleteConfirm(skillID) {
        App.showDeleteConfirmDialog().
        then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                url: `/skills/${skillID}`,
                success: function () {
                    $("#row" + skillID).remove();
                    App.showSuccessAlert("Xóa thành công!")
                }
            })
        }
    })
}

getAllSkill();

$(() => {
    $("#create-form").validate({
        errorElement: 'div',
        rules: {
            skill_name:  {
                required: true,
                minlength: 2,
                maxlength: 50,
            },
        },

        messages: {
            skill_name: {
                required: "Vui lòng nhập tên kỹ năng",
                minlength: "Vui lòng nhập tối thiểu 2 ký tự!",
                maxlength: "Vui lòng nhập tối đa chỉ có 50 ký tự!"
            },
            
        },

        submitHandler : createSkill
    });
});

$("#create-button").on("click",createSkill);
$(".edit-button").on("click",editSkill);
$(".save-skill").on("click",saveSkill);
$(".delete-button").on("click",deleteConfirm);
