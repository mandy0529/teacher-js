const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const {value} = data;
    content.textContent = value;
  } catch (error) {
    console.log(error, 'error');
  }
};

const shakeImg = () => {
  img.classList.add('shake-img');
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, 2000);
};
const handleClick = () => {
  fetchData();
  shakeImg();
};
btn.addEventListener('click', handleClick);
