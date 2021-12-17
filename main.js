const state = {
	basePrice: 1399,
	exMemory: 100,
	exStorage: 120,
	fastDelivery: 20,
};

const totalPrice = document.getElementById('total-price');
const memory16 = document.getElementById('update-memory');
const deliveryCharge = document.getElementById('delivery-charge');
const deliveryCost = document.getElementById('delivery-cost');
const storage16 = document.getElementById('update-storage');
const storageCost = document.getElementById('extra-storage');
const memoryCost = document.getElementById('memory-cost');
totalPrice.innerHTML = state.basePrice;

memory16.addEventListener('click', function () {
	memoryCost.innerText = state.exMemory;
	state.basePrice += state.exMemory;
	totalPrice.innerHTML = state.basePrice;
});

storage16.addEventListener('click', function () {
	storageCost.innerText = state.exStorage;
	state.basePrice += state.exStorage;
	totalPrice.innerHTML = state.basePrice;
});
deliveryCharge.addEventListener('click', function () {
	deliveryCost.innerText = state.fastDelivery;
	state.basePrice += state.fastDelivery;
	totalPrice.innerHTML = state.basePrice;
});