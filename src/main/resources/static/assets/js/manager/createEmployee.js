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
		$("#listSkill").html(content);
		$('select[name=listSkill]').val();
		$('.selectpicker').selectpicker('refresh')
	})
}
getAllSkill();
function createEmployee() {
	let employee_name = $("#employee_name").val();
	let dob = $("#dob").val();
	let employee_address = $("#employee_address").val();
	let introduce = $("#introduce").val();
	let date_start = $("#date_start").val();
	let office = $("#office").val();
	let employee_skill_tmp = $('select[name=listSkill]').val();
	/*let employee_skill = [];
	for (var id of employee_skill_tmp) {
		var newSkillObj = {
			"skill": id, "employee_id": "2", employee_skill_id : ""
		}
		employee_skill.push(newSkillObj)
	}
*/
	let newOffice = {
		office_id : office
	}
	
	let employee = {
		employee_name: employee_name,
		dob: dob,
        employee_address:  employee_address,
		introduce: introduce,
		date_start: date_start,
		office: newOffice
	}
	if ($("#create-form").valid()){
		$.ajax({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			type: "POST",
			data: JSON.stringify(employee),
			url: "create-employee/insert-employee"
		}).done((resp) =>{
			console.log(employee_skill_tmp)
			for (let i = 0; i < employee_skill_tmp.length ; i++) {
				console.log(employee_skill_tmp[i])
				let skill_id = Number(employee_skill_tmp[i]);
                let newEmployeeSkill = {
                    employee_id: resp.employee_id,
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
                })
				
            }
			$("#create-form")[0].reset();
			App.showSuccessAlert("Tạo mới nhân viên thành công");
		}).fail(() =>{
			App.showErrorAlert("Đã xảy ra lỗi!");
		})
	}
}

$("#create-button").on("click", createEmployee);


getAllOffice();

$(() => {
	$("#create-form").validate({
		errorElement: 'div',
		rules: {
			product_name: {
				required: true,
				minlength: 5,
				maxlength: 50,
			},
			price: {
				required: true,
				number: true
			},
			upCountry: {
				 required: true
			 
		},
		description: {
			required: true
		}
	},

		messages: {
		product_name: {
			required: "Vui lòng nhập tên sản phẩm",
			minlength: "Vui lòng nhập tối thiểu 2 ký tự!",
			maxlength: "Vui lòng nhập tối đa chỉ có 50 ký tự!"
		},
		price: {
			required: "Vui lòng nhập giá sản phẩm!",
			number: "Vui lòng chỉ nhập số"
		},
		upCountry: "Vui lòng chọn loại sản phẩm",
		description: {
			required: "Vui lòng nhập mô tả!"
		}
	},

		submitHandler : createEmployee
    });
});