import {getElement, formatPrice} from '../utils.js';

const cartItems = getElement('.cart-items');

const addToCartDom = (cart) => {
  const {id, amount, price, name, url} = cart;
  const article = document.createElement('article');
  article.classList.add('cart-item');
  article.innerHTML = `<img src="${url}"
    class="cart-item-img"
    alt="${name}"
  />
  <div>
    <h4 class="cart-item-name">${name}</h4>
    <p class="cart-item-price">${formatPrice(price)}</p>
    <button class="cart-item-remove-btn" data-id="${id}" data-type="remove">remove</button>
  </div>

  <div>
    <button class="cart-item-increase-btn" data-id="${id}" data-type="plus">
      <i class="fas fa-chevron-up"></i>
    </button>
    <p class="cart-item-amount" data-id="${id}">${amount}</p>
    <button class="cart-item-decrease-btn" data-id="${id}" data-type="minus">
      <i class="fas fa-chevron-down"></i>
    </button>
  </div>`;
  cartItems.appendChild(article);
};

export {addToCartDom};
