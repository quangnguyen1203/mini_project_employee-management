function getAllOffice(){
    $.ajax({
        type: "GET",
        url: "/offices/allOffice"
    }).done(function (office){
        let content = "";
		let total_employee = 0;
        for (let i = office.length-1; i >= 0; i--) {
			$.ajax({
	        type: "GET",
	        url: `/offices/total-employee/${office[i].office_id}`
		    }).done(function (total){
				return total;
			})
			let response = fetch(`/offices/total-employee/${office[i].office_id}`)
			console.log(response)
			content += `
	                    <tr id="row${office[i].office_id}">
	                      <td class="text-center">${office[i].office_name}</td>
						  <td class="text-center">${office[i].office_address}</td>
						  <td class="text-center">${total_employee}</td>
	                      <td class="text-center">
	                        <button value="${office[i].office_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="far fa-edit"></i>Sửa</button>
	                        <button value="${office[i].office_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xóa</button>
	                      </td>
	                    </tr>
            		`;   
        }
        $("#officeList tbody").html(content);
        $(".delete-button").on("click", function (){
            let id = $(this).attr("value");
            deleteConfirm(id);
        })
        $(".edit-button").on("click",function (){
            let id = $(this).attr("value");
            editOffice(id);
        })
    })
}

/*function getTotalEmployeeByOfficeId(id){
	
}*/

function createOffice(){
    let office_name = $("#office_name").val();
	let office_address = $("#office_address").val();


    let office = {
        office_name:office_name,
		office_address:office_address
    }
	if ($("#create-form").valid()){
		$.ajax({
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
	        type: "POST",
	        data: JSON.stringify(office),
	        url: "/offices"
		}).done(function(offices){
			console.log(offices)
			$('#officeList tbody').prepend(`<tr id="row${offices.office_id}">
                        <td class="text-center">${offices.office_name}</td>
					  	<td class="text-center">${offices.office_address}</td>
					  	<td class="text-center">0</td>
                        <td class="text-center">
                            <button value="${offices.office_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="far fa-edit"></i>Sửa</button>
                            <button value="${offices.office_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xóa</button>
                        </td>
                    </tr>`);
            $("#create-form")[0].reset();
            $(".edit-button").on("click",function (){
	            let id = $(this).attr("value");
	            editOffice(id);
        	})
            $(".save-office").on("click",saveOffice);
            $(".delete-button").on("click", function (){
	            let id = $(this).attr("value");
	            deleteConfirm(id);
        	})

            App.showSuccessAlert("Tạo mới chi nhánh thành công!");
		})  
	} 
}


function editOffice(officeID){
    $.ajax({
        type: "GET",
        url: `/offices/edit-office/${officeID}`,
        success:function (office){
            $('#upID').val(office.office_id);
            $('#upOfficeName').val(office.office_name);
			$('#upOfficeAddress').val(office.office_address);
            $('#editModal').modal('show');
        }
    })
}

function saveOffice(){
    let office_id = $("#upID").val();
    let office_name = $("#upOfficeName").val();
	let office_address = $("#upOfficeAddress").val();
	
    let office = {
        office_id:office_id,
        office_name:office_name,
		office_address:office_address
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(office),
        url: `/offices/edit/${office_id}`,
        success: function (office) {
			let total_employee = 0;
            $('#row'+office_id+ ' td').remove();
            $('#row'+office_id).html(`
                        <td class="text-center">${office.office_name}</td>
						<td class="text-center">${office.office_address}</td>
						<td class="text-center">${total_employee}</td>
                        <td class="text-center">
                            <button value="${office.office_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="fas fa-edit"></i>Sửa</button>
                            <button value="${office.office_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Xoá</button>
                        </td>`);
            $(".edit-button").on("click",function (){
	            let id = $(this).attr("value");
	            editOffice(id);
        	})
            $(".delete-button").on("click", function (){
                let id = $(this).attr("value");
                deleteConfirm(id);
        	})
            $('#editModal').modal("hide");
            App.showSuccessAlert("Chỉnh sữa chi nhánh thành công!")
            $("#edit-office")[0].reset();
        }
    })
}

function deleteConfirm(officeID) {
        App.showDeleteConfirmDialog().then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                url: `/offices/${officeID}`,
                success: function () {
                    $("#row" + officeID).remove();
                    App.showSuccessAlert("Xóa thành công!")
                }
            })
        }
    })
}

getAllOffice();

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

        submitHandler : createOffice
    });
});

$("#create-button").on("click",createOffice);
$(".edit-button").on("click",editOffice);
$(".save-office").on("click",saveOffice);
$(".delete-button").on("click",deleteConfirm);