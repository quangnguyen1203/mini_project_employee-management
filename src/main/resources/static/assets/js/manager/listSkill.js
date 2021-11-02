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
			columnDefs: [
		        { orderable: false, targets: 1 },
		        { searchable: false, targets: 1 }
		    ],
		    "language": {
                "url": "//cdn.datatables.net/plug-ins/1.11.3/i18n/vi.json"
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
			$("#edit-skill").DataTable({
				columnDefs: [
			        { orderable: false, targets: 1 },
			        { searchable: false, targets: 1 }
			    ],
			    "language": {
	                "url": "//cdn.datatables.net/plug-ins/1.11.3/i18n/vi.json"
	            }
			})
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
