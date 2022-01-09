import faker from 'faker';

const Cartmount = (el) => {
	const cartText = `<div> You have ${faker.random.number()} items in your cart</div>`;

	el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-cart');

	//Assuming our container doesnt have an element
	if (el) {
		//we are probably runnign in isolation
		Cartmount(el);
	}
}

export { Cartmount };
