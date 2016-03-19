"use-strict";

//Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. 

// Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. 

// For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

// The two JSON representations above should be in two files: products.json, and categories.json. You should load both file via XHRs and store the contents in two different JavaScript variables in your code.



// // As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

// CREATE A LISTENER ON SELECT which discounts by the correct %age use if stmt

// categories.addListener("click", applyDiscount);

let categories = [];
let products = [];

function applyDiscount() {
  //mult 1 - discount key.value in the category in the categories.json by the price of the item in the products.json file
  if (let i = 0; i < products.length; i++) {
    let currDiscItem = (subtract(1, categories[i].discount.value))*(products[i].price.value);
      return currDiscItem += currDiscItem;
  }
}
function executeThisCodeAfterFileIsLoaded() {
	//create an XHR object
	let myRequest = new XMLHttpRequest ();
	// XHR objects emit events when their operation is complete, or an error occurs
	myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
	myRequest.addEventListener("error", executeThisCodeIfXHRFails);
	// tell XHR object exactly what to do
	myRequest.open("GET", "categories.json");
	//tell the XHR object to start
	myRequest.send();

	let myProductsRequest = new XMLHttpRequest ();
	myProductsRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
	myProductsRequest.addEventListener("error", executeThisCodeIfXHRFails);
	myProductsRequest.open("GET", "products.json");
	myProductsRequest.send();
}
