let vouchersCardDeck = document.getElementById("vouchersCardDeck");

//BASKET LOCAL STORAGE
// let basket = [];

//if we have local data is gonna retrieve: JSON.parse(localstorage.getItem("data")
//if not is gonna retrive an empty array
let basket = JSON.parse(localStorage.getItem("data")) || [];

// function abcd() {}
//array function assig it to a constant
let generateShop = () => {
	return (vouchersCardDeck.innerHTML = shopItemsData
		// shopItemsData[i] ==> shopItem
		.map((shopItem) => {
			// x is the object
			const { id, name, desc, img } = shopItem; // to not write the x in ${x.id}, ${x.name}, ${x.desc}, ${x.img}
			//if nothing can be found an empty array will be return
			let search = basket.find((x) => x.id === id) || [];

			return `
            <div id=product-id-${id} class="row">
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
										<div class="col col-6 pr-0">
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
										<div class="col col-6 p-0">
											<a href="../pages/shoppingBasket.html">
      											<button class="btn btn-cart-card">Checkout</button>
    										</a>
										</div>
									</div>
								</div>
				    </div>
			</div>`;
		})
		.join("")); //join methond concatenates an array of strings into one string
};
// Here I run the function
generateShop();

//INCREMENT FUNCTION
let increment = (id) => {
	//id to recognise if the btn is increment or decrement
	// console.log("increment", id);

	//the unique id
	let selectedItem = id;
	console.log(selectedItem.id); //checking if the item was selected

	let search = basket.find((x) => x.id === selectedItem.id);

	//Conditional to see if the item doesn't exist add it inside the basket
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
	// Here I run the functions
	update(selectedItem.id);

	// Data will be the key of our LOCAL STORAGE
	// A common use of JSON is to exchange data to/from a web server.
	//When sending data to a web server, the data has to be a string.
	//Convert a JavaScript object into a string with JSON.stringify().
	localStorage.setItem("data", JSON.stringify(basket));
};

//DECREMENT FUNCTION
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

	// console.log(basket);
	//storing data in the LOCAL STORAGE
	//the localstorage is in the end because js need to run the data before to salve it later
	localStorage.setItem("data", JSON.stringify(basket));
};

//UPDATE FUNCTION
let update = (id) => {
	//if the item exists only then the cart will increase in the quantity of the card
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
