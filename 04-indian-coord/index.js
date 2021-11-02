let arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow) => {
  arrow.style.top = `${Math.floor(Math.random() * 99)}vh`;
  arrow.style.left = `${Math.floor(Math.random() * 99)}vw`;
});
