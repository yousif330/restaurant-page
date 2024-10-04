function loadContactPage() {
  const menuHeader = document.createElement('h1');
  menuHeader.classList.add('home-header');
  menuHeader.textContent = 'Contact';
  content.appendChild(menuHeader);

  for (let i = 0; i < 5; i++) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    content.appendChild(menuCard);

    const line = document.createElement('div');
    line.classList.add('card-line');
    menuCard.appendChild(line);

    const menuCardContent = document.createElement('div');
    menuCardContent.classList.add('menu-card-content');
    menuCard.appendChild(menuCardContent);
    
    const placeholder = document.createElement('div');
    placeholder.classList.add('img-placeholder');
    placeholder.classList.add('contact');
    menuCardContent.appendChild(placeholder);
    placeholder.textContent = 'img placeholder';

    const menuCardText = document.createElement('div');
    menuCardText.classList.add('menu-card-text');
    menuCardContent.appendChild(menuCardText);
    
    const dishName = document.createElement('h2');
    dishName.textContent = 'Name';
    menuCardText.appendChild(dishName);

    const contact1 = document.createElement('p');
    contact1.textContent = 'position';
    menuCardText.appendChild(contact1);

    const contact2 = document.createElement('p');
    contact2.textContent = 'Email:';
    menuCardText.appendChild(contact2);

    const contact3 = document.createElement('p');
    contact3.textContent = 'Phone Number:';
    menuCardText.appendChild(contact3);

  }
}

export { loadContactPage };