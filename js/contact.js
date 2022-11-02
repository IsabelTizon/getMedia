// const form = document.querySelector(".form");

const btn = document.getElementById("submit");
console.log(btn); // 👉️ null

// ✅ Check if btn exists before addEventListener()
if (btn) {
	btn.addEventListener("click", () => {
		console.log("btn clicked");
	});
}

// ✅ Using optional chaining (?.)
btn?.addEventListener("click", () => {
	console.log("btn clicked");
});

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
	// messageFillagain.modal("show");

	const messagePass = $(
		makeModal("Thank you for your interest, we will contact you ASAP")
	);
	// messagePass.modal("show");

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
	function makeModal(text2) {
		return `<div id="myModal" class="modal fade" role="dialog" style="display: none">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p>${text2}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>`;
	}
}
