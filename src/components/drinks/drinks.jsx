import './style.css';
import './drinks.css';

import './drinks.css';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return `
    <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="${image}" alt="${name}" />
        </div>
        <div class="drink__info">
          <h3>${name}</h3>
        </div>
      </div>
      <form class="drink__controls">
        <input type="hidden" class="order-id" value="${id}" />
        <button class="order-btn">Objednat</button>
      </form>
    </div>
  `;
};

