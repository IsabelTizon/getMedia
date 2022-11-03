// const form = document.querySelector(".form");
let basket = JSON.parse(localStorage.getItem("data")) || [];

//CALCULATION FUNCTION
//it is gonna get all the numbers to show the sum in the basket
let calculation = () => {
	let cartIcon = document.querySelector(".cartAmount");
	//map: array function to go throught just the numbers of the item in each card
	//reduce: x, y are working to sum all the elements (all the items) in the array
	// console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));

	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
// every time the page is load the calculation will be done and the amount of items appear in our basket

// Here I run the function
calculation();
