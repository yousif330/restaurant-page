import homeImg from './img/home-img.jpg';

function loadHomePage() {
  const header = document.createElement('h1');
  header.classList.add('home-header');
  header.textContent = 'Discover Culinary Bliss at The Gourmet Haven!';
  content.appendChild(header);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('home-img');

  const img = document.createElement('img');
  img.src = homeImg;

  imgContainer.appendChild(img);
  content.appendChild(imgContainer);

  const paragraph = document.createElement('p');
  paragraph.classList.add('home-paragraph');
  paragraph.textContent = 'Step into The Gourmet Haven, where every dish is a masterpiece crafted with passion and precision. Our talented chefs use only the freshest, locally-sourced ingredients to create a menu that celebrates global flavors with a unique twist. Whether you\'re craving a succulent steak, vibrant vegetarian options, or decadent desserts, our diverse offerings cater to every palate. Enjoy a warm, inviting atmosphere perfect for family gatherings, romantic dinners, or casual outings with friends. Join us for an unforgettable dining experience that will tantalize your taste buds and leave you coming back for more!';

  content.appendChild(paragraph);

  const timeheader = document.createElement('h2');
  timeheader.classList.add('home-header');
  timeheader.textContent = 'Hours';

  content.appendChild(timeheader);

  const timeCard = document.createElement('div');
  timeCard.classList.add('time-card');
  content.appendChild(timeCard);

  const cardLine = document.createElement('div');
  cardLine.classList.add('card-line');
  timeCard.appendChild(cardLine);

  const timeCardText = document.createElement('div');
  timeCardText.classList.add('time-card-text');
  timeCard.appendChild(timeCardText);

  let days = [];

  for (let i = 0; i < 7; i++) {
    days[i] = document.createElement('p');
    timeCardText.appendChild(days[i]);
  }

  days[0].textContent = 'Sunday: 8am - 8pm';
  days[1].textContent = 'Monday: 6am - 6pm';
  days[2].textContent = 'Tuesday: 6am - 6pm';
  days[3].textContent = 'Wednesday: 6am - 6pm';
  days[4].textContent = 'Thursday: 6am - 10pm';
  days[5].textContent = 'Friday: 6am - 10pm';
  days[6].textContent = 'Saturday: 8am - 10pm';
}

export { loadHomePage, homeImg };