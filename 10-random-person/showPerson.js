import personElement from './personElement.js';

const img = personElement('.img');
const title = personElement('.title');
const value = personElement('.value');
const btns = [...document.querySelectorAll('.icon')];

const showPerson = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;

  btns.forEach((btn) => {
    const type = btn.dataset.type;
    btn.addEventListener('click', () => {
      title.textContent = `My ${type} is`;
      value.textContent = person[type];
    });
  });
};

export default showPerson;
