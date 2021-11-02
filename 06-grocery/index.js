const form = document.querySelector('.form');
const input = document.querySelector('.input');
const items = document.querySelector('.items');
const lists = document.querySelector('.lists');
const result = document.querySelector('.result');
const submitBtn = document.querySelector('.submit');
const clearBtn = document.querySelector('.clear-btn');

let arrayList = [];
let timeout;
let isEditing = false;
let editValue = '';
let editedId;

const handleDelete = (id) => {
  arrayList = arrayList.filter((item) => item.id !== Number(id));
  addItem(arrayList);
  showMsg('item deleted');
};

const handleBtn = (e) => {
  const targetId = e.target.parentElement.parentElement.id;
  const type = e.target.dataset.type;
  if (type === 'edit') {
    const editId = arrayList.find((item) => item.id === Number(targetId));
    editedId = editId;
    editValue = e.target.parentElement.previousElementSibling;
    input.value = editValue.innerHTML;
    isEditing = true;
    submitBtn.value = 'edit';
  } else if (type === 'delete') {
    handleDelete(targetId);
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
    const newEditList = {...editedId, text: value};
    arrayList.map((item) => {
      if (item.id === newEditList.id) {
        item.text = value;
      }
      return item;
    });
    editValue.innerHTML = showMsg('items edited');
    isEditing = false;
  }
};

const clearAll = () => {
  arrayList = [];
  addItem(arrayList);
};
form.addEventListener('submit', handleSubmit);
clearBtn.addEventListener('click', clearAll);
