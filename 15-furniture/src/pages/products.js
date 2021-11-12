import '../toggleSidebar.js';
import '../toggleCart.js';
import {setStore, store} from '../store.js';
import {fetchData} from '../fetchData.js';
import {display} from '../displayProduct.js';
import {getElement} from '../utils.js';

display(store, getElement('.products-container'));
const loading = getElement('.page-loading');
loading.style.display = 'none';
