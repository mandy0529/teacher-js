import {display} from '../displayProduct.js';
import {getElement} from '../utils.js';

const input = getElement('.price-filter');
const valueNumber = getElement('.price-value');

const setupPrice = (store) => {
  let maxPrice = store.map((item) => item.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  input.value = maxPrice;
  input.max = maxPrice;
  input.min = 0;
  valueNumber.textContent = `current price : $${maxPrice}`;

  const handleInput = () => {
    const value = Number(input.value);
    valueNumber.textContent = `current price : $${value}`;
    let filteredStore = store.filter((item) => item.price / 100 <= value);

    if (filteredStore.length < 1) {
      const noProducts = getElement('.products-container');
      noProducts.innerHTML = `<h3 class="filter-error"> No products matched with your search.</h3>`;
    } else {
      display(filteredStore, getElement('.products-container'));
    }
  };

  input.addEventListener('input', handleInput);
};

export {setupPrice};
