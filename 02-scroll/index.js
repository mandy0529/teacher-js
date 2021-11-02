const btns = document.querySelectorAll('a');
const navbar = document.querySelector('.navbar');

const handleClick = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute('href').slice(1);
  const element = document.querySelector(`.${target}`);
  const navbarHeight = navbar.getBoundingClientRect().height;
  let position = element.offsetTop - navbarHeight;

  window.scrollTo({
    left: 0,
    top: position,
    behavior: 'smooth',
  });
};

btns.forEach((btn) => btn.addEventListener('click', handleClick));
