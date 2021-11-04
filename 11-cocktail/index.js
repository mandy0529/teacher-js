const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

let gan;

const form = document.querySelector('form');

const getElement = (select) => {
  const element = document.querySelector(select);
  if (element) return element;
  throw new Error('no element selected');
};

const showCocktail = (data) => {
  const cocktail = document.querySelector('.cocktail');
  if (!data) {
    cocktail.textContent = 'sorry. not found anything with your search';
    return;
  } else {
    const minji = data
      .map((item) => {
        const {id, img, name} = item;
        return `<a href="drink.html">
      <article class="cocktail" data-id="${id}">
        <img class="cocktail-img" src=${img} alt="cocktail" />
        <h3 class="name">${name}</h3>
      </article>
    </a>`;
      })
      .join('');
    cocktail.innerHTML = minji;
  }
  return cocktail;
};

const setDrink = (data) => {
  data.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.target.parentElement.dataset.id;
  });
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const {drinks} = await response.json();
    const data =
      drinks &&
      drinks.map((drink) => {
        const {idDrink: id, strDrink: name, strDrinkThumb: img} = drink;

        return {id, name, img};
      });
    const hello = showCocktail(data);
    if (hello) {
      setDrink(hello);
    }
  } catch (error) {
    console.log(error);
  }
};

const handleForm = (e) => {
  e.preventDefault();
  const input = document.querySelector('.text');
  const value = input.value;
  if (!value) fetchData(URL);
  fetchData(`${URL}${value}`);
};

const init = async () => {
  fetchData(URL);
};
init();

form.addEventListener('keyup', handleForm);
