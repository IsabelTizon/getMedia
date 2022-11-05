// After click login btn, grab the values that the user had introduced  and clear the field
document.getElementById("loginUp").addEventListener("click", function (e) {
	e.preventDefault();
	let inputNameUp = document.getElementById("nameUp").value.trim(); //I assigned to the inputNameUp variable the value that I introduced through the DOM, I changed it to uppercase and allow no white space to interfere
	let inputpasswordUp = document.getElementById("passwordUp").value.trim(); //I assigned to the inputpasswordUp variable the value that I introduced through the DOM, I did nor white space to interfere whith the trim method and I returned the string as a number with the parseInt method

	document.getElementById("nameUp").value = " "; //Clearing input field after click
	document.getElementById("passwordUp").value = " "; //Clearing input field after click

	//calling
	settingDetails(inputNameUp, inputpasswordUp); //I called the function when I clicked
});

function settingDetails(inputNameUp, inputpasswordUp) {
	// Function was declared with two parameters
	if (!inputNameUp || !inputpasswordUp) {
		//I did a conditional, if one of the fields has not been entered, an error message will be display
		alert("Please enter all the details");
	} else {
		//but if the two fields are recognized, it will execute the next block

		const userDetailsArray = JSON.parse(
			localStorage.getItem("userDetailsArray")
		); //I grabbed (get method) the local storage. In the assignment, the assigned is always a string, that's why I used the parse method to save it in the local storage as an object

		console.log(Array.isArray(userDetailsArray)); //I verified that it has been saved as an array
		console.log("my array", userDetailsArray); //I verified that the array contains properties and values

		//Conditional
		if (userDetailsArray === null || userDetailsArray === undefined) {
			localStorage.setItem(
				"userDetailsArray",
				JSON.stringify([{ name: inputNameUp, password: inputpasswordUp }])
			);
			//If there is nothing saved, I saved (set method) an empty array to start to use it
			//the JSON.stringify method converts our object to a string because we can only store strings in local storage
		} else {
			userDetailsArray.push({ name: inputNameUp, password: inputpasswordUp });
			//with the push method I introduced our data in our array

			localStorage.setItem(
				"userDetailsArray",
				JSON.stringify(userDetailsArray)
			);
			//The details had been introduced (set method) as a string with the stringify method
		}
		//Once some valid values have been entered, it will redirect us to the sign in page with the property window.location.href
		window.location.href = "sign-in.html";
	}
}
