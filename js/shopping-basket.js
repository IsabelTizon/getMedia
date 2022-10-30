let label = document.getElementById("label");
// let backHome = document.getElementById("backHome");
// backHome.innerHTML = `
//  <a href="../index.html">
// <div class="back-to-shop">
//   <a href="#">&leftarrow;</a>
//   <span class="text-light p-lg-2">Back to shop</span>
// </div>
// </a>
// `;
let shoppingCart = document.getElementById("shoppingCart");

//Accesing to our LOCAL STORAGE
//if we have local data is gonna retrieve: JSON.parse(localstorage.getItem("data")
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

// Generating SHOPPING CARDS
let generateCartItems = () => {
	if (basket.length !== 0) {
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
								<div class="col">
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
			.join(""));
	} else {
		shoppingCart.innerHTML = ``;
		label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="home.html">
      <button class="home-btn">Back to home</button>
    </a>
    `;
	}
};

generateCartItems();

let increment = (id) => {
	let selectedItem = id;
	let search = basket.find((x) => x.id === selectedItem.id);

	if (search === undefined) {
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		search.item += 1;
	}

	generateCartItems();
	update(selectedItem.id);
	localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
	let selectedItem = id;
	let search = basket.find((x) => x.id === selectedItem.id);

	if (search === undefined) return;
	else if (search.item === 0) return;
	else {
		search.item -= 1;
	}
	update(selectedItem.id);
	basket = basket.filter((x) => x.item !== 0);
	generateCartItems();
	localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
	let search = basket.find((x) => x.id === id);
	// console.log(search.item);
	document.getElementById(id).innerHTML = search.item;
	calculation();
	TotalAmount();
};

let removeItem = (id) => {
	let selectedItem = id;
	// console.log(selectedItem.id);
	basket = basket.filter((x) => x.id !== selectedItem.id);
	generateCartItems();
	TotalAmount();
	localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
	basket = [];
	generateCartItems();
	localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
	if (basket.length !== 0) {
		let amount = basket
			.map((x) => {
				let { item, id } = x;
				let search = shopItemsData.find((y) => y.id === id) || [];

				return item * search.price;
			})
			.reduce((x, y) => x + y, 0);
		// console.log(amount);

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

TotalAmount();
