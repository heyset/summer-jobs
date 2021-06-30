const fetchRandomUser = () => new Promise((resolve, reject) => {
  const baseUrl = 'https://randomuser.me/api/';

  fetch(baseUrl)
    .then((response) => response.json())
    .then(({ results }) => resolve(results[0]))
    .catch(reject);
});

const fetchCountryByName = (name) => new Promise((resolve, reject) => {
  const baseUrl = 'https://restcountries.eu/rest/v2';

  const parsedName = encodeURI(name);

  fetch(`${baseUrl}/name/${parsedName}`)
    .then((response) => response.json())
    .then((countryArray) => resolve(countryArray[0]))
    .catch(reject);
});

const mapUserData = ({ name, dob, picture, location }) => new Promise((resolve, reject) => {
  fetchCountryByName(location.country)
    .then((country) => {
      const user = {
        fullName: `${name.first} ${name.last}`,
        age: dob.age,
        avatar: picture.large,
        location: {
          city: location.city,
          country: {
            name: country.translations.br,
            flag: country.flag,
          },
        },
      };

      resolve(user);
    })
    .catch(reject);
});

const htmlElements = {
  name: document.getElementById('user__name'),
  age: document.getElementById('user__age'),
  avatar: document.getElementById('user__avatar'),
  country: document.getElementById('user__country'),
  flag: document.getElementById('user__country-flag'),
  city: document.getElementById('user__city'),
};

function injectUserData({ fullName, age, avatar, location }) {
  htmlElements.name.innerText = fullName;
  htmlElements.age.innerText = age;
  htmlElements.avatar.src = avatar;
  htmlElements.country.innerText = location.country.name;
  htmlElements.flag.src = location.country.flag;
  htmlElements.city.innerText = location.city;
}

function getNewuser() {
  fetchRandomUser()
    .then(mapUserData)
    .then(injectUserData)
    .catch(console.error);
}

document.getElementById('button/search').addEventListener('click', getNewuser);

// module.exports = {
//   fetchRandomUser,
//   fetchCountryByName,
//   mapUserData,
// }
