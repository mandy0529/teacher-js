import './src/toggleSidebar.js';
import './src/toggleCart.js';
import {setStore, store} from './src/store.js';
import {fetchData} from './src/fetchData.js';
import {display} from './src/displayProduct.js';
import {getElement} from './src/utils.js';

const init = async () => {
  const data = await fetchData();
  if (data) {
    const selectedData = data.map((item) => {
      const {
        id,
        fields: {name, company, image, featured, colors, price},
      } = item;
      const {
        thumbnails: {
          large: {url},
        },
      } = image[0];
      return {id, name, featured, colors, company, url, price};
    });
    setStore(selectedData);
    const featured = store.filter((item) => item.featured === true);
    display(featured, getElement('.featured-center'));
  }
};
init();
