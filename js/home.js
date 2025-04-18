// assign an html element to a variable in order to write over it
let vouchersCardDeck = document.getElementById("vouchersCardDeck");

//if I have local data, is gonna retrieve: JSON.parse(localstorage.getItem("data")
//if not is gonna retrive an empty array
let basket = JSON.parse(localStorage.getItem("data")) || [];

// let myFunction = abcd() {}: example of arrow function
//when the function is called the next code will be execute it and rendered into our page
let generateShop = () => {
	//returns us the code
	return (vouchersCardDeck.innerHTML = shopItemsData
		//looping through the array of objects called shopItemsData
		.map((shopItem) => {
			const { id, name, desc, img } = shopItem;
			// to not write the x in ${x.id}, ${x.name}, ${x.desc}, ${x.img}
			// x is the object

			// let search = basket.find((x) => x.id === id) || [];
			//if nothing can be found an empty array will be return
			//but if something is found the next code will return
			return `
            <div id=product-id-${id} class="row row-cards">
					<div class="card card-voucher">
								<img
									class="card-img-top"
									src=${img}
									alt="Card image cap"
								/>
								<div class="card-body card-body-voucher">
									<h4 class="card-title card-title-voucher-home text-light">${name}</h4>
									<p class="card-text card-text-voucher-home text-light">${desc}</p>
									<div class="row down-card-voucher">
										<div class="col col-6 pr-0 col-sum">
											<div class="row m-0">
												<button class="btn btn-minus p-0">
													<i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
												</button>
												<div id=${id} class="quantity text-light p-2">${
				search.item === undefined ? 0 : search.item
			}</div> 
												<button class="btn btn-plus p-0">
													<i onclick="increment(${id})" class="bi bi-plus-lg"></i>
												</button>
											</div>
										</div>
										<div class="col col-6 p-0 col-btn-checkout">
											<a href="../pages/shoppingBasket.html">
      											<button class="btn btn-cart-card">Checkout</button>
    										</a>
										</div>
									</div>
								</div>
				    </div>
			</div>`;
		})
		.join("")); //join method concatenates an array of strings into one string
};

// Here I run the function
generateShop();

//INCREMENT FUNCTION: adding items in the cart
let increment = (id) => {
	//id to recognise if the btn is increment or decrement
	// console.log("increment", id);

	//the unique id
	let selectedItem = id;
	console.log(selectedItem.id); //checking if the item was selected

	let search = basket.find((x) => x.id === selectedItem.id);

	//Conditional to see if the item doesn't exist, add it inside the basket
	if (search === undefined) {
		//instoring the data insite our basket with the method push
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		//if the item already exist add one more
		search.item += 1;
	}

	// console.log(basket);

	// Here I run the function
	update(selectedItem.id);

	//Setting the data in our localStorage basket
	//the localstorage is in the end because js need to run the data before to salve it later
	localStorage.setItem("data", JSON.stringify(basket));
};

//DECREMENT FUNCTION: subtracting items from cart
let decrement = (id) => {
	//id to recognise if the btn is increment or decrement
	// console.log("increment", id);

	let selectedItem = id;
	console.log(selectedItem.id); //checking if the item was selected

	let search = basket.find((x) => x.id === selectedItem.id);

	//if our quantity card is in blanck the console will run an error
	//if is undefined do nothing
	if (search === undefined) return;
	//when the search is 0 the decreasing process stop
	if (search.item === 0) return;
	else {
		//if the item already exist rest one
		search.item -= 1;
	}

	// Here I run the function
	update(selectedItem.id);

	//Selecting all the objects which doesn't have a 0 on the item
	basket = basket.filter((x) => x.item !== 0);

	//Setting the data in our localStorage basket
	//the localstorage is in the end because js need to run the data before to salve it later
	localStorage.setItem("data", JSON.stringify(basket));
};

//UPDATE FUNCTION
let update = (id) => {
	//if the item exists, only then the cart will increase in the quantity of the card
	let search = basket.find((x) => x.id === id);
	document.getElementById(id).innerHTML = search.item;

	// this update will be as well on the cart if the function calculation had been called
	calculation();
};

//CALCULATION FUNCTION
//it is gonna get all the numbers to show the sum in the basket
let calculation = () => {
	//checking
	// console.log("calculation is running");

	let cartIcon = document.getElementById("cartAmount");
	//map: array function to go throught just the numbers of the item in each card
	//reduce: x, y are working to sum all the elements (all the items) in the array
	// console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));

	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

// every time the page is load the calculation will be done and the amount of items appear in pur basket
// Here I run the function
calculation();

//Rediret to search page
document.getElementById("goToSearch").onclick = function () {
	location.href = "search.html";
};
