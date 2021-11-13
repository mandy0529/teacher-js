import {display} from '../displayProduct.js';
import {getElement} from '../utils.js';

const setupSearch = (store) => {
  const form = getElement('.input-form');
  const input = getElement('.search-input');

  const handleSearch = () => {
    const value = input.value;
    if (value) {
      const searchedStore = store.filter((item) => {
        let name = item.name;
        name = name.toLowerCase();
        if (name.includes(value)) {
          return item;
        }
      });
      display(searchedStore, getElement('.products-container'));

      if (searchedStore.length < 1) {
        const noProducts = getElement('.products-container');
        noProducts.innerHTML = `<h2 class="filter-error">
         No products matched with your search.
         </h2>`;
      }
    } else {
      display(store, getElement('.products-container'));
    }
  };

  form.addEventListener('keyup', handleSearch);
};

export {setupSearch};
