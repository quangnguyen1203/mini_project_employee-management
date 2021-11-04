App.getUser();
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
		$('select[name=listSkill]').val(1);
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
	let newOffice = {
		office_id : office
	}
	
	let today = new Date();
	let year_today = today.getFullYear();
	
	let dob1 = new Date(dob);
	let year_dob = dob1.getFullYear();
	
	let data_start1 = new Date(date_start);
	let year_date_start = data_start1.getFullYear();

	if(year_today - year_dob < 18 || year_date_start - year_dob < 18){
		App.showErrorAlert("Xin lỗi nhân viên chưa đủ 18 tuổi!!!");
	}else{
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
				for (let i = 0; i < employee_skill_tmp.length ; i++) {
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
}

/*function updateDateStart(){
    let date = $("#dob").val();

	let dob = new Date(date);
	let year_dob = dob.getFullYear();
	
	let year_date_start = year_dob + 18;

    let data_start = date.split("-");
    $("#date_start").val(year_date_start+"-"+data_start[1]+"-"+data_start[2]);
}
$('#dob').on("change",updateDateStart);*/

$("#create-button").on("click", createEmployee);

getAllOffice();

$(() => {
	$("#create-form").validate({
		errorElement: 'div',
		rules: {
			employee_name: {
				required: true,
				minlength: 2,
				maxlength: 50,
			},
			dob: {
				required: true
			},
			employee_address: {
				 required: true
			},
			introduce: {
				 required: true
			},
			date_start: {
				required: true
			}
		},
		messages: {
			employee_name: {
				required: "Vui lòng nhập tên nhân viên",
				minlength: "Vui lòng nhập tối thiểu 2 ký tự!",
				maxlength: "Vui lòng nhập tối đa chỉ có 50 ký tự!"
			},
			dob: {
				required: "Vui lòng nhập ngày tháng năm sinh của nhân viên!",
			},
			employee_address: {
				required: "Vui lòng nhập địa chỉ của nhân viên!",
			},
			introduce: {
				required: "Vui lòng giới thiệu ngắn gọn của nhân viên!",
			},
			date_start: {
				required: "Vui lòng nhập ngày bắt đầu làm việc của nhân viên!",
			},
		},
		submitHandler : createEmployee
    });
});