import {createRankUserTemplate} from './view/rank-user';
import {createMenuTemplate} from './view/menu';
import {createSortTemplate} from './view/sort';
import {createFilmsTemplate} from './view/films';
import {createFilmsTopRatedTemplate} from './view/films-top-rated';
import {createFilmsMostCommentedTemplate} from './view/films-most-commented';
import {createCardFilmTemplate} from './view/card-film';
import {createShowMoreButton} from './view/show-more-button';

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

render(filmsList, createShowMoreButton(), RENDER_PLACE.BEFORE_END);
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
