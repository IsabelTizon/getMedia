let rederingInputName = () => {
	const userLoggedName = JSON.parse(window.localStorage.getItem("userLogged"));

	document.getElementById("userNameNav").innerHTML = `${userLoggedName}`;
};

rederingInputName();
