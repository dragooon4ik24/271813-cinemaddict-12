"use strict";

const RENDER_PLACE = {
  BEFORE_END: `beforeend`,
  AFTER_BEGIN: `afterbegin`,
  AFTER_END: `afterend`,
};

const COUNT_FILMS = 5;
const COUNT_TOP_FILMS = 2;
const COUNT_MOST_COMMENTED_FILMS = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createRankUserTemplate = () => `<section class="header__profile profile">
            <p class="profile__rating">Movie Buff</p>
            <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
          </section>`;

const createMenuTemplate = () => `<nav class="main-navigation">
<div class="main-navigation__items">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
  <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
  <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
  <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
</div>
<a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;

const createSortTemplate = () => `<ul class="sort">
<li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
<li><a href="#" class="sort__button">Sort by date</a></li>
<li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;

const createFilmsTemplate = () => `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <div class="films-list__container">

  </div>
</section>
</section>`;

const createFilmsTopRatedTemplate = () => `
<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container">

  </div>
</section>`;

const createFilmsMostCommentedTemplate = () => `
<section class="films-list--extra">
<h2 class="films-list__title">Most commented</h2>

<div class="films-list__container">

  </div>
</section>`;

const createCardFilmTemplate = () => `<article class="film-card">
<h3 class="film-card__title">The Great Flamarion</h3>
<p class="film-card__rating">8.9</p>
<p class="film-card__info">
  <span class="film-card__year">1945</span>
  <span class="film-card__duration">1h 18m</span>
  <span class="film-card__genre">Mystery</span>
</p>
<img src="./images/posters/the-great-flamarion.jpg" alt="" class="film-card__poster">
<p class="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…</p>
<a class="film-card__comments">12 comments</a>
<form class="film-card__controls">
  <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
  <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
  <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
</form>
</article>`;

const createShowMoreTemplate = () =>
  `<button class="films-list__show-more">Show more</button>`;

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(header, createRankUserTemplate(), RENDER_PLACE.BEFORE_END);
render(main, createMenuTemplate(), RENDER_PLACE.AFTER_BEGIN);
render(main, createSortTemplate(), RENDER_PLACE.BEFORE_END);
render(main, createFilmsTemplate(), RENDER_PLACE.BEFORE_END);

const films = document.querySelector(`.films`);
const filmsList = document.querySelector(`.films-list`);

render(films, createFilmsTopRatedTemplate(), RENDER_PLACE.BEFORE_END);
render(films, createFilmsMostCommentedTemplate(), RENDER_PLACE.BEFORE_END);

const filmsListContainers = document.querySelectorAll(`.films-list__container`);

render(filmsList, createShowMoreTemplate(), RENDER_PLACE.BEFORE_END);
for (let i = 0; i < COUNT_FILMS; i++) {
  render(
      filmsListContainers[0],
      createCardFilmTemplate(),
      RENDER_PLACE.BEFORE_END
  );
}

for (let i = 0; i < COUNT_TOP_FILMS; i++) {
  render(
      filmsListContainers[1],
      createCardFilmTemplate(),
      RENDER_PLACE.BEFORE_END
  );
}
for (let i = 0; i < COUNT_MOST_COMMENTED_FILMS; i++) {
  render(
      filmsListContainers[2],
      createCardFilmTemplate(),
      RENDER_PLACE.BEFORE_END
  );
}
