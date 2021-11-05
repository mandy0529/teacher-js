const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const fetchUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const pageUser = (data) => {
  const perPage = 9;
  const totalPage = Math.ceil(data.length / perPage);
  const minji = Array.from({length: totalPage}, (a, index) => {
    const startPoint = index * perPage;
    return data.slice(startPoint, startPoint + perPage);
  });
  return minji;
};

const init = async () => {
  const minji = await fetchUser();
  const pagenation = pageUser(minji);
  console.log(pagenation, 'pagenation');
};
init();
