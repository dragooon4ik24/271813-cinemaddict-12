export const createMenuTemplate = (filters) => `<nav class="main-navigation">
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
