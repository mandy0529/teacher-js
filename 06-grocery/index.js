const form = document.querySelector('.form');
const input = document.querySelector('.input');
const items = document.querySelector('.items');
const lists = document.querySelector('.lists');
const result = document.querySelector('.result');
const submitBtn = document.querySelector('.submit');

let arrayList = [];
let timeout;
let isEditing = false;
let editValue = '';

const setBackToDefault = () => {
  input.value = '';
  isEditing = false;
  editValue = '';
  submitBtn.value = 'submit';
};

const handleDelete = (id) => {
  arrayList = arrayList.filter((item) => item.id !== Number(id));
  addItem(arrayList);
  showMsg('item deleted');
};

const handleClear = () => {
  items.removeChild(lists);
  showMsg('all items cleared!');
  setBackToDefault();
  handleSubmit();
};

const handleBtn = (e) => {
  const targetId = e.target.parentElement.parentElement.id;
  const type = e.target.dataset.type;
  if (type === 'edit') {
    editValue = e.target.parentElement.previousElementSibling;
    input.value = editValue.innerHTML;
    isEditing = true;
    submitBtn.value = 'edit';
  } else if (type === 'delete') {
    handleDelete(targetId);
  } else {
    handleClear();
  }
};

const addItem = (item) => {
  if (!isEditing) {
    const showList = item
      .map((list) => {
        const {text, id} = list;
        return `<li id=${id} class="list">
        <span class="name">${text}</span>
        <div class="icons">
          <button data-type="edit">✏️</button>
          <button data-type="delete">❌</button>
        </div>
      </li>`;
      })
      .join('');
    lists.innerHTML = showList;
    const btns = Array.from(document.querySelectorAll('button'));
    btns.map((btn) => btn.addEventListener('click', handleBtn));
  }
};

const showMsg = (text) => {
  result.textContent = text;
  result.classList.add(`show`);
  setTimeout(() => {
    result.classList.remove('show');
  }, 1000);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const value = input.value;
  input.value = '';
  const list = {text: value, id: Math.random()};
  if (value !== '' && isEditing === false) {
    arrayList.push(list);
    addItem(arrayList);
    showMsg('items added');
  } else if (value === '') {
    showMsg('value has to be included some words.');
  } else if (isEditing) {
    editValue.innerHTML = value;
    showMsg('items edited');
    isEditing = false;
  }
};

form.addEventListener('submit', handleSubmit);
