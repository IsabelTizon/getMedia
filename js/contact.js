//Global variables
let inputName = document.getElementById("name").value.trim();
let inputSurname = document.getElementById("surName").value.trim();
let inputphone = parseInt(document.getElementById("phone").value.trim());
let inputEmail = document.getElementById("email").value.trim();
let inputMessage = document.getElementById("textarea").value.trim();

// After click the input fields were grabbed
document.getElementById("submit").addEventListener("click", function (e) {
	e.preventDefault();

	inputName = document.getElementById("name").value.trim();
	inputSurname = document.getElementById("surName").value.trim();
	inputphone = parseInt(document.getElementById("phone").value.trim());
	inputEmail = document.getElementById("email").value.trim();
	inputMessage = document.getElementById("textarea").value.trim();

	document.getElementById("name").value = " ";
	document.getElementById("surName").value = " ";
	document.getElementById("phone").value = " ";
	document.getElementById("email").value = " ";
	document.getElementById("textarea").value = " ";

	checkingForm();
});

function checkingForm() {
	//this messag ewill be introduced if the conditional is true
	const messageFillagain = $(makeModal("Please enter all the details"));

	//this messag ewill be introduced if the conditional is false
	const messagePass = $(
		makeModal("Thank you for your interest, we will contact you ASAP")
	);
	//Conditional
	if (
		!inputName ||
		!inputSurname ||
		!inputphone ||
		!inputEmail ||
		!inputMessage
	) {
		return messageFillagain.modal("show");
	} else {
		return messagePass.modal("show");
	}

	// Modal
	function makeModal(text) {
		return `<div id="myModal" class="modal fade" role="dialog" style="display: none">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p>${text}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>`;
	}
}
