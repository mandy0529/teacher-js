import {getElement} from './utils.js';

const cartOverlay = getElement('.cart-overlay');
const closeCart = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart');

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
closeCart.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});

const openCart = () => {
  cartOverlay.classList.add('show');
};

export {openCart};
