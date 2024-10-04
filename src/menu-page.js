function loadMenuPage() {
  const menuHeader = document.createElement('h1');
  menuHeader.classList.add('home-header');
  menuHeader.textContent = 'Dishes';
  content.appendChild(menuHeader);

  for (let i = 0; i < 10; i++) {
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
    menuCardContent.appendChild(placeholder);
    placeholder.textContent = 'img placeholder';

    const menuCardText = document.createElement('div');
    menuCardText.classList.add('menu-card-text');
    menuCardContent.appendChild(menuCardText);
    
    const dishName = document.createElement('h2');
    dishName.textContent = 'Dish Name';
    menuCardText.appendChild(dishName);

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = 'Description';
    menuCardText.appendChild(desc);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = 'Price:';
    menuCardText.appendChild(price)
  }
}

export { loadMenuPage };