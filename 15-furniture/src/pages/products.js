import {store} from '../store.js';
import {display} from '../displayProduct.js';
import {getElement} from '../utils.js';
import {setupSearch} from '../filter/search.js';
import {setupCategory} from '../filter/category.js';
import {setupPrice} from '../filter/price.js';

const loading = getElement('.page-loading');

display(store, getElement('.products-container'));
setupSearch(store);
setupCategory(store);
setupPrice(store);

loading.style.display = 'none';
