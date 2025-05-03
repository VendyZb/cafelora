/*
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
*/


import './drinks.css'
import { Layer } from '../layers/layers.jsx';

export const Drink = ({ id, name, ordered, image, layers }) => {
  const layersHTML = layers
    .map((layer) => Layer({ color: layer.color, label: layer.label }))
    .join('');

  return `
    <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="${image}" alt="${name}" />
        </div>
        <div class="drink__info">
          <h3>${name}</h3>
          ${layersHTML}
        </div>
      </div>
      <form class="drink__controls">
        <input type="hidden" class="order-id" value="${id}" />
        <button class="order-btn">Objednat</button>
      </form>
    </div>
  `;
};
