import { loadHomePage, homeImg } from "./home-page.js";
import { loadMenuPage } from "./menu-page.js";
import { loadContactPage } from "./contact-page.js";
import "./style.css"

const content = document.getElementById('content');
let current = document.getElementById('home');
current.classList.add('chosen');

loadHomePage();

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    current.classList.toggle('chosen');
    current = button;
    current.classList.toggle('chosen');

    while (content.childElementCount !== 0) {
      content.removeChild(content.lastElementChild);
    }

    switch(button.id) {
      case 'home':
        loadHomePage();
        break;
      case 'menu':
        loadMenuPage();
        break;
      case 'contact':
        loadContactPage();
        break;
    }
  });
});
