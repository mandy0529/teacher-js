import {addToCart} from '../cart/setupCart.js';
import {formatPrice, getElement} from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

let productId;

const singleProductUrl =
  'https://course-api.com/javascript-store-single-product';

const offLoading = () => {
  loading.style.display = 'none';
};

const getId = async () => {
  const urlID = window.location.search;
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    const data = await response.json();
    if (data) {
      const {id, fields} = data;
      const {colors, name, price, description, company} = fields;
      const image = fields.image[0].thumbnails.large.url;

      document.title = `${name.toUpperCase()} | single Product`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      productId = id;

      colors.forEach((color) => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    }
  } catch (error) {
    throw Error(`no matched your searched ${productId} `);
  }
};

const init = () => {
  offLoading();
  getId();
};
init();

const handleCart = () => {
  addToCart(productId);
};
cartBtn.addEventListener('click', handleCart);
