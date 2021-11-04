import personElement from './personElement.js';
import fetchUser from './fetchUser.js';
import showPerson from './showPerson.js';

const btn = personElement('.random-icon');

const showUser = async () => {
  const person = await fetchUser();
  showPerson(person);
};

btn.addEventListener('click', showUser);
