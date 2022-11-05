// A part of my html was assigned to a variable
let label = document.getElementById("label");

// A part of my html was assigned to a variable
let shoppingCart = document.getElementById("shoppingCart");

//Accesing to our LOCAL STORAGE
//if I have local data is gonna retrieve: JSON.parse(localstorage.getItem("data")
//if not is gonna retrive an empty array
let basket = JSON.parse(localStorage.getItem("data")) || [];

//CALCULATION FUNCTION
//it is gonna get all the numbers to show the sum in the basket
let calculation = () => {
	let cartIcon = document.getElementById("cartAmount");
	//map: array function to go throught just the numbers of the item in each card
	//reduce: x, y are working to sum all the elements (all the items) in the array
	// console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));

	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
// every time the page is load the calculation will be done and the amount of items appear in our basket

// Here I run the function
calculation();

// Generating SHOPPING CARDS arrow function
let generateCartItems = () => {
	if (basket.length !== 0) {
		//If my basket is not 0
		return (shoppingCart.innerHTML = basket
			//returning the cards from the shopping cart
			.map((x) => {
				let { id, item } = x;
				//Searching cards
				// if some shopItemsData id is equal to some basket id return it, if not return an empty array
				let search = shopItemsData.find((y) => y.id === id) || [];
				return `
				<div class="cart-item">
					<div class="row">
						<div class="col col-4">
							<img class="img-voucher-cart" src=${search.img} alt="img voucher" />
						</div>
						<div class="col col-8 details">
							<div class="row pt-2">
								<div class="col p-0">
									<h4>${search.name}</h4>
								</div>
							</div>
							<div class="row pt-4">
								<div class="col">
									<div class="row">
										<div class="col">
											<div class="row">
												<i onclick="decrement(${id})" class="bi bi-dash-lg pr-2"></i>
												<div id=${id} class="quantity pr-2">${item}</div>
												<i onclick="increment(${id})" class="bi bi-plus-lg"></i>
											</div>
										</div>
									</div>
								</div>
								<div class="col col-cart-item-price">
									<p class="cart-item-price">£ ${item * search.price}</p>
								</div>
								<div class="col">
									<span onclick="removeItem(${id})" class="fa fa-trash form-control-icon"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				`;
			})
			.join("")); //join methond concatenates an array of strings into one string
	} else {
		//but if the cart is empty return any cart and render a label saying our cart is empty and a btn to go baks to the shopping page, in this case our home page
		shoppingCart.innerHTML = ``;
		label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="home.html">
      <button class="home-btn">Back to home</button>
    </a>
    `;
	}
};

//Calling
generateCartItems();

//INCREMENT arrow function: adding items in the cart
let increment = (id) => {
	let selectedItem = id;
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
	//Calling
	generateCartItems();
	update(selectedItem.id);

	//Setting the data in our localStorage basket
	//the localstorage is in the end because js need to run the data before to salve it later
	localStorage.setItem("data", JSON.stringify(basket));
};

//DECREMENT arrow function: subtracting items from cart
let decrement = (id) => {
	let selectedItem = id;

	let search = basket.find((x) => x.id === selectedItem.id);

	//if our quantity card is in blanck the console will run an error
	//if is undefined do nothing
	if (search === undefined) return;
	//when the search is 0 the decreasing process stop
	else if (search.item === 0) return;
	else {
		//if the item already exist rest one
		search.item -= 1;
	}

	//Calling
	update(selectedItem.id);
	basket = basket.filter((x) => x.item !== 0);
	generateCartItems();

	//Setting the data in our localStorage basket
	//the localstorage is in the end because js need to run the data before to salve it later
	localStorage.setItem("data", JSON.stringify(basket));
};

//UPDATE arrow function
let update = (id) => {
	//if the item exists, only then the cart will increase in the quantity of the card
	let search = basket.find((x) => x.id === id);
	// console.log(search.item);

	document.getElementById(id).innerHTML = search.item;
	calculation();
	TotalAmount();
};

//REMOVE arrow function
let removeItem = (id) => {
	let selectedItem = id;
	// console.log(selectedItem.id);

	basket = basket.filter((x) => x.id !== selectedItem.id);
	generateCartItems();
	TotalAmount();

	// Storing the changes in our data
	localStorage.setItem("data", JSON.stringify(basket));
};

//CLEAR arrow function
let clearCart = () => {
	//after presssing the btn our data will be clean
	basket = [];
	generateCartItems();

	// Storing the changes in our data
	localStorage.setItem("data", JSON.stringify(basket));
};

// label arrow function
let TotalAmount = () => {
	if (basket.length !== 0) {
		let amount = basket
			// looping our items
			.map((x) => {
				let { item, id } = x;
				let search = shopItemsData.find((y) => y.id === id) || [];

				//multiplication of the item for its price
				return item * search.price;
			})
			//total sum
			.reduce((x, y) => x + y, 0);
		// console.log(amount);

		// label.innerHTML render the follow text with the final amount
		label.innerHTML = `
    <h2>Total Bill : £ ${amount}</h2>
	<div class="row">
		<div clas="col">
			<button onclick="clearCart()" class="removeAll basket-btn">Deselect all items</button>
		</div>
		<div clas="col">
			<button class="checkout basket-btn">Checkout</button>
		</div>
	</div>
    `;
	} else return;
};

//calling
TotalAmount();
