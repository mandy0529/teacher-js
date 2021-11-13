import {findItem} from '../store.js';
import {openCart} from '../toggleCart.js';
import {
  formatPrice,
  getElement,
  getLocalStorage,
  setLocalStorage,
} from '../utils.js';
import {addToCartDom} from './cartDom.js';

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getLocalStorage('cart');

const totalCartAmount = () => {
  let amount = cart.reduce((total, item) => {
    return (total += item.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
};

const totalCartPrice = () => {
  let price = cart.reduce((total, item) => {
    return (total += item.price * item.amount);
  }, 0);
  cartTotalDOM.textContent = `total : ${formatPrice(price)}`;
};

const showAllCartItem = () => {
  cart.map((item) => {
    addToCartDom(item);
  });
};

const removeItem = (id) => {
  cart = cart.filter((item) => item.id !== id);
};

const increaseAmount = (id) => {
  let plusAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      plusAmount = item.amount + 1;
      item = {...item, amount: plusAmount};
    }
    return item;
  });
  return plusAmount;
};

const decreaseAmount = (id) => {
  let minusAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      minusAmount = item.amount - 1;
      item = {...item, amount: minusAmount};
    }
    return item;
  });
  return minusAmount;
};

const handleBtn = (e) => {
  const plusMinusBtn = e.target.parentNode;
  const removeBtn = e.target;

  if (removeBtn.dataset.type === 'remove') {
    console.log('remove');
    removeItem(removeBtn.dataset.id);
    removeBtn.parentNode.parentNode.remove();
  } else if (plusMinusBtn.dataset.type === 'plus') {
    console.log('plus');
    const newAmount = increaseAmount(plusMinusBtn.dataset.id);
    plusMinusBtn.nextElementSibling.textContent = newAmount;
  } else if (plusMinusBtn.dataset.type === 'minus') {
    console.log('minus');
    const newAmount = decreaseAmount(plusMinusBtn.dataset.id);
    if (newAmount === 0) {
      removeItem(plusMinusBtn.dataset.id);
      plusMinusBtn.parentNode.parentNode.remove();
    } else {
      plusMinusBtn.previousElementSibling.textContent = newAmount;
    }
  }
  totalCartAmount();
  totalCartPrice();
  setLocalStorage('cart', cart);
};

const addToCart = (id) => {
  // new item value added
  let cartItem = cart.find((item) => item.id === id);
  if (!cartItem) {
    let findedCartProduct = findItem(id);
    findedCartProduct = {...findedCartProduct, amount: 1};
    cart = [...cart, findedCartProduct];
    addToCartDom(findedCartProduct);
  }

  // before item value added
  else {
    const changedAmount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    const findedNewAmount = items.find((item) => item.dataset.id === id);
    findedNewAmount.textContent = changedAmount;
  }

  totalCartAmount();
  totalCartPrice();
  setLocalStorage('cart', cart);
  openCart();
};

const init = () => {
  totalCartAmount();
  totalCartPrice();
  showAllCartItem();
};
init();

cartItemsDOM.addEventListener('click', handleBtn);
export {addToCart};
