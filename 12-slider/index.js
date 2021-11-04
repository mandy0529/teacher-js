import people from './data.js';

const personEle = document.querySelector('.container');
const btns = document.querySelectorAll('button');

const getPerson = (data) => {
  const person = data
    .map((item, idx) => {
      let position = 'next';
      if (idx === 0) {
        position = 'active';
      }
      if (idx === data.length - 1) {
        position = 'prev';
      }
      const {img, name, job, text} = item;
      return `
        <article class="person-item ${position}">
            <img src=${img} alt="" class="person-img">
            <h2 class="name">${name}</h2>
            <h3 class="job">${job}</h3>
            <p class="desc">${text}</p>
        </article>
        `;
    })
    .join('');
  personEle.innerHTML = person;
};

getPerson(people);

const handleBtn = (e) => {
  const type = e.target.dataset.type;
  const active = document.querySelector('.active');
  const prev = document.querySelector('.prev');
  let next = active.nextElementSibling;
  if (!next) {
    next = personEle.firstElementChild;
  }
  active.classList.remove('active');
  prev.classList.remove('prev');
  next.classList.remove('next');
  if (type === 'right') {
    console.log(type);
    active.classList.add('prev');
    prev.classList.add('next');
    next.classList.add('active');
  }
  if (type === 'left') {
    console.log('left');

    active.classList.add('next');
    prev.classList.add('active');
    next.classList.add('prev');
    next.classList.remove('next');
    next = personEle.previousElementSibling;
    if (!next) {
      next = personEle.lastElementChild;
    }
  }
};
btns.forEach((btn) => btn.addEventListener('click', handleBtn));
