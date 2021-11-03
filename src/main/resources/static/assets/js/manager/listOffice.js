App.getUser();
function getAllOffice(){
    $.ajax({
        type: "GET",
        url: "/offices/allOffice"
    }).done(function (office){
        let content = "";
		let total_employee = 0;
        for (let i = 0; i < office.length; i++) {
			$.ajax({
	        type: "GET",
	        url: `/offices/total-employee/${office[i].office_id}`
		    }).done(function (total){
				total_employee = parseInt(total);
				content += `
	                    <tr id="row${office[i].office_id}">
	                      <td class="text-center">${office[i].office_name}</td>
						  <td class="text-center">${office[i].office_address}</td>
						  <td class="text-center">${total_employee}</td>
	                      <td class="text-center">
	                        <button value="${office[i].office_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="far fa-edit"></i>Sửa</button>
	                        <button value="${office[i].office_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Ẩn</button>
	                      </td>
	                    </tr>
            		`;
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
    })
}

/*function getTotalEmployeeByOfficeId(id){
	$.ajax({
	    type: "GET",
	    url: `/offices/total-employee/${office[i].office_id}`
    }).done(function (total){
		total_employee = parseInt(total);
		console.log(total_employee)
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
                            <button value="${offices.office_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Ẩn</button>
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
	}).done(function (office){
        let content = "";
		let total_employee = 0;
		$.ajax({
        type: "GET",
        url: `/offices/total-employee/${office.office_id}`
	    }).done(function (total){
			total_employee = parseInt(total);
			console.log(total_employee)
			$('#row'+office_id+ ' td').remove();
            $('#row'+office_id).html(`
                        <td class="text-center">${office.office_name}</td>
						<td class="text-center">${office.office_address}</td>
						<td class="text-center">${total_employee}</td>
                        <td class="text-center">
                            <button value="${office.office_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="fas fa-edit"></i>Sửa</button>
                            <button value="${office.office_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Ẩn</button>
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
		})		  
    })

}

function deleteConfirm(officeID) {
        App.showHideConfirmDialog().then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                url: `/offices/${officeID}`,
                success: function () {
                    $("#row" + officeID).remove();
                    App.showSuccessAlert("Ẩn thành công!")
                }
            })
        }
    })
}

function searchOfficeByName(office_name) {
	if(office_name === ""){
		getAllOffice();
	} else {
		$.ajax({
        type: "GET",
        url: `/search-office/${office_name}`,
    	}).done(function (office) {
       		let content = "";
	        for (let i = 0; i < office.length; i++) {
				$.ajax({
		        type: "GET",
		        url: `/offices/total-employee/${office[i].office_id}`
			    }).done(function (total){
					total_employee = parseInt(total);
					content += `
		                    <tr id="row${office[i].office_id}">
		                      <td class="text-center">${office[i].office_name}</td>
							  <td class="text-center">${office[i].office_address}</td>
							  <td class="text-center">${total_employee}</td>
		                      <td class="text-center">
		                        <button value="${office[i].office_id}" class="btn btn-outline-primary mr-2 edit-button" ><i class="far fa-edit"></i>Sửa</button>
		                        <button value="${office[i].office_id}" class="btn btn-outline-danger delete-button" ><i class="fas fa-trash-alt"></i>Ẩn</button>
		                      </td>
		                    </tr>
	            		`;
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
	    })
	}
    
}

$("#search").on("input", function () {
	let office_name = $("#search").val();
    searchOfficeByName(office_name);
})

getAllOffice();

$(() => {
    $("#create-form").validate({
        errorElement: 'div',
        rules: {
            office_name:  {
                required: true,
                minlength: 2,
                maxlength: 50,
            },
			office_address: {
				required: true,
				minlength: 2,
                maxlength: 50,
			}
        },

        messages: {
            office_name: {
                required: "Vui lòng nhập tên chi nhánh",
                minlength: "Vui lòng nhập tối thiểu 2 ký tự!",
                maxlength: "Vui lòng nhập tối đa chỉ có 50 ký tự!"
            },
            office_address: {
                required: "Vui lòng nhập địa chỉ chi nhánh",
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