const URL = 'https://randomuser.me/api/';

const fetchUser = async () => {
  const response = await fetch(URL);
  const {results} = await response.json();

  const person = results[0];
  const {phone, email} = person;
  const {large: image} = person.picture;
  const {password} = person.login;
  const {first, last} = person.name;
  const {
    dob: {age},
  } = person;
  const {
    street: {number, name},
  } = person.location;
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};
export default fetchUser;
