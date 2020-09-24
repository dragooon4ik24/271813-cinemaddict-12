import {createElement} from "../utils";

const createMenuTemplate = (filters) => `<nav class="main-navigation">
<div class="main-navigation__items">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
  ${filters
    .map(
        (filter) =>
          `<a href="#${filter.name.toLowerCase()}" class="main-navigation__item">${
            filter.name
          } <span class="main-navigation__item-count">${filter.count}</span></a>`
    )
    .join(``)}
</div>
<a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;

export default class Menu {
  constructor(filters) {
    this._element = null;
    this._filters = filters;
  }

  getTemplate() {
    return createMenuTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
