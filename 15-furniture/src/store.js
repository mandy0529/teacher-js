import {setLocalStorage, getLocalStorage} from './utils.js';

let store = getLocalStorage('store');

const setStore = (data) => {
  store = data.map((item) => {
    return item;
  });
  setLocalStorage('store', store);
};

export {setStore, store};
