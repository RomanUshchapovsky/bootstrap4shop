var addToCart = document.querySelectorAll('.item-actions__cart');
var cartCounter = 0;
var cartCounterLabel = document.getElementById('cart-counter');
var cartPrice = 0;


var fnPriceCounter = function (e) {
    cartPrice += Number(e.parentElement.previousElementSibling.innerHTML.replace('$','').replace(' <sup>','.').replace('</sup>',''));
    return 'Added ' + cartPrice.toFixed(2) + ' $';
}
var fnRestore = function (elem, restore) {
	elem.innerHTML = restore;
	elem.addEventListener('click', fnCounter);
}
var fnCounter = function () {
	cartCounter++;
	cartCounterLabel.innerHTML = cartCounter;
	if (cartCounter === 1) {
	cartCounterLabel.style.display = 'block';
	}

var tempButton = this
var restoreHTML = this.innerHTML;
	this.innerHTML = fnPriceCounter(this);
	this.removeEventListener('click', fnCounter);

	setTimeout(function() {
      fnRestore(tempButton, restoreHTML);
	}, 2000);
};


for (var i=0; i<addToCart.length; i++) {
	addToCart[i].addEventListener('click', fnCounter);
	
}