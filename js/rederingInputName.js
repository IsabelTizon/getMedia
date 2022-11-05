//arrow function
let rederingInputName = () => {
	// I took the username from localStorage and assign it to a variable
	const userLoggedName = JSON.parse(window.localStorage.getItem("userLogged"));

	//I rendered that variable using innerHTML
	document.getElementById("userNameNav").innerHTML = `${userLoggedName}`;
};

//Calling
rederingInputName();
