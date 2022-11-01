let inputName = document.getElementById("name").value.trim();
let inputSurname = document.getElementById("surName").value.trim();
let inputphone = parseInt(document.getElementById("phone").value.trim());
let inputEmail = document.getElementById("email").value.trim();
let inputMessage = document.getElementById("textarea").value.trim();

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
	const messageFillagain = $(makeModal("Please enter all the details"));
	const messagePass = $(
		openModal("Thank you for your interest, we will contact you ASAP")
	);

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

	function makeModal(text) {
		return `<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>${text}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
	}
	function openModal(text) {
		return `<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>${text}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
	}
}
