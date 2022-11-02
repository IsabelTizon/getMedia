//Sign In
document.getElementById("loginIn").addEventListener("click", function (e) {
	e.preventDefault();
	let inputName = document.getElementById("name").value.trim(); //I assigned to the inputName variable the value that I introduced through the DOM, I changed it to uppercase and allow no white space to interfere
	let inputpassword = document.getElementById("password").value.trim(); //I assigned to the inputpassword variable the value that I introduced through the DOM, I did nor white space to interfere whith the trim method and I returned the string as a number with the parseInt method

	document.getElementById("name").value = " "; //Clearing input field after click
	document.getElementById("password").value = " "; //Clearing input field after click

	gettingDetails(inputName, inputpassword); //I called the function when I clicked
});

function gettingDetails(inputName, inputpassword) {
	// I declared the function with two parameters
	if (!inputName || !inputpassword) {
		//I did a conditional, if one of the fields has not been entered, an error message will be display
		alert("Please enter all the details");
	} else {
		//but if the two fields are recognized, it will execute the next block

		const array = localStorage.getItem("userDetailsArray");
		console.log("array sin parsear", array);

		const userDetailsArray = JSON.parse(
			localStorage.getItem("userDetailsArray")
		); //In the assignment, the assigned is always a string, that's why I use the parse method to save it in the local storage as an object

		console.log(Array.isArray(userDetailsArray)); //I verified that it has been saved as an array
		console.log("my array", userDetailsArray); //I verified that the array contains properties and values

		function userDetailsArrayFound() {
			for (let i = 0; i <= userDetailsArray.length - 1; i++) {
				console.log("array element", userDetailsArray[i]);
				if (
					userDetailsArray[i].name === inputName &&
					userDetailsArray[i].password == inputpassword
				) {
					return true;
				}
			}
			return false;
		}

		if (userDetailsArrayFound()) {
			// a new key was created in the localStorage  with the inpunt name that was inserted by the user and is keep it like a string value.
			localStorage.setItem("userLogged", JSON.stringify(inputName));

			//redirection to the home page if the user details (name  and password) were found
			window.location.href = "home.html";
		} else {
			//if the details
			alert("wrong details, try again");
		}
	}
}
