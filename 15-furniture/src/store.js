import {setLocalStorage, getLocalStorage} from './utils.js';

let store = getLocalStorage('store');

const setStore = (data) => {
  store = data.map((item) => {
    return item;
  });
  setLocalStorage('store', store);
};

const findItem = (id) => {
  const product = store.find((item) => item.id === id);
  return product;
};

export {setStore, store, findItem};
