App.getUser();
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
	                        <button value="${office[i].office_id}" class="btn btn-outline-primary restore-button" ><i class="fas fa-trash-alt"></i>Khôi phục</button>
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
                "url": "//cdn.datatables.net/plug-ins/1.11.3/i18n/vi.json"
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