const form = document.querySelector(".form");

document.getElementById("submit").addEventListener("click", function (e) {
	e.preventDefault();

	//Assigned a variable to introduce through the DOM the user input
	let inputName = document.getElementById("name").value.trim();
	let inputSurname = document.getElementById("surName").value.trim();
	let inputphone = parseInt(document.getElementById("phone").value.trim());
	let inputEmail = document.getElementById("email").value.trim();
	let inputMessage = document.getElementById("textarea").value.trim();

	//Clearing input field after click
	document.getElementById("name").value = " ";
	document.getElementById("surName").value = " ";
	document.getElementById("phone").value = " ";
	document.getElementById("email").value = " ";
	document.getElementById("textarea").value = " ";

	//Calling the function when the btn is click
	submitingQuestion(inputName, inputSurname, inputphone, inputEmail);
});

function submitingQuestion(inputName, inputSurname, inputphone, inputEmail) {
	let popuptext = "";
	// the function was declares with the required parameters
	if (!inputName || !inputSurname || !inputphone || !inputEmail) {
		//I did a conditional, if one of the fields has not been entered, an error message will be display
		alert("Please enter all the details");
	} else {
		let popup = document.getElementById("myPopup");
		popup.classList.toggle("show");

		show.innerHTML = `Thank you for your interest, we will contact you ASAP`;
		// alert("Thank you for your interest, we will contact you ASAP");
	}
}
