const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const getLocalStorage = (name) => {
  let storageItem = localStorage.getItem(name);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(name));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setLocalStorage = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

export {getElement, setLocalStorage, getLocalStorage, formatPrice};
