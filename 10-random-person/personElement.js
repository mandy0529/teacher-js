const personElement = (element) => {
  const elementPerson = document.querySelector(element);
  if (elementPerson) return elementPerson;
  throw new Error('no element selected');
};

export default personElement;
