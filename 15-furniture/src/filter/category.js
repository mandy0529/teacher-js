import {display} from '../displayProduct.js';
import {getElement} from '../utils.js';

const setupCategory = (store) => {
  const company = getElement('.companies');
  const menu = ['All', ...new Set(store.map((item) => item.company))];
  company.innerHTML = menu
    .map((menu) => {
      return ` <button class="company-btn">${menu}</button>`;
    })
    .join('');

  const handleCategory = (e) => {
    const target = e.target;
    if (target.classList.contains('company-btn')) {
      let newCategory = [];
      if (target.textContent === 'All') {
        newCategory = [...store];
      } else {
        newCategory = store.filter(
          (item) => item.company === target.textContent
        );
      }
      display(newCategory, getElement('.products-container'));
    }
  };
  company.addEventListener('click', handleCategory);
};

export {setupCategory};
