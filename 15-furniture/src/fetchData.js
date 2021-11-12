const allProductsUrl = 'https://course-api.com/javascript-store-products';
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product';

const fetchData = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {fetchData};
