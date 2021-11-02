const menu = [
  {
    id: 1,
    title: 'bread1',
    category: 'bread',
    price: 15.99,
    img: './img/bread1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'bread2',
    category: 'bread',
    price: 13.99,
    img: './img/bread2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'bread2',
    category: 'bread',
    price: 13.99,
    img: './img/bread3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'drink1',
    category: 'drink',
    price: 20.99,
    img: './img/drink1.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'drink2',
    category: 'drink',
    price: 20.99,
    img: './img/drink2.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },

  {
    id: 7,
    title: 'cake1',
    category: 'desert',
    price: 8.99,
    img: './img/cake1.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'cake2',
    category: 'desert',
    price: 8.99,
    img: './img/cake2.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'cake3',
    category: 'desert',
    price: 8.99,
    img: './img/cake3.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 7,
    title: 'meal1',
    category: 'meal',
    price: 8.99,
    img: './img/lunch1.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'meal2',
    category: 'meal',
    price: 8.99,
    img: './img/lunch2.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'meal3',
    category: 'meal',
    price: 8.99,
    img: './img/lunch3.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const foods = document.querySelector('.foods');
const menus = document.querySelector('.menu');

const allBtns = ['*', ...new Set(menu.map((item) => item.category))];

const showMenuBtn = () => {
  let showBtn = allBtns.map((category) => {
    return ` <button data-type=${category} class="menu-btn">${category}</button>`;
  });
  showBtn = showBtn.join('');
  menus.innerHTML = showBtn;
};

const controlMenu = (item) => {
  let showMenu = item.map((menu) => {
    const {title, price, img, desc} = menu;
    return `<div class="food">
        <img src=${img} alt=${title} class="food-pic" />
        <div class="food-about">
          <div class="food-title">
            <h3>${title}</h3>
            <h4>${price}</h4>
          </div>
          <div class="food-info">
           ${desc}
          </div>
        </div>
      </div>`;
  });
  showMenu = showMenu.join('');
  foods.innerHTML = showMenu;
};

const controlCategory = (type) => {
  const category = menu.filter((item) => {
    if (item.category === type) {
      return item;
    }
  });

  if (type === '*') {
    controlMenu(menu);
  } else {
    controlMenu(category);
  }
};

const handleClick = (e) => {
  const type = e.target.dataset.type;
  controlCategory(type);
};

const init = () => {
  controlMenu(menu);
  showMenuBtn();

  const btns = document.querySelectorAll('button');
  btns.forEach((btn) => btn.addEventListener('click', handleClick));
};

init();
