import {createRankUserTemplate} from "./view/rank-user";
import {createMenuTemplate} from "./view/menu";
import {createSortTemplate} from "./view/sort";
import {createFilmsTemplate} from "./view/films";
import {createFilmsTopRatedTemplate} from "./view/films-top-rated";
import {createFilmsMostCommentedTemplate} from "./view/films-most-commented";
import {createCardFilmTemplate} from "./view/card-film";
import {createShowMoreButton} from "./view/show-more-button";
import {generateCardData} from "./mock/card";
import {generateFilter} from "./mock/filter";

const RENDER_PLACE = {
  BEFORE_END: `beforeend`,
  AFTER_BEGIN: `afterbegin`,
  AFTER_END: `afterend`,
};

const COUNT_FILMS = 20;
const COUNT_TOP_FILMS = 2;
const COUNT_MOST_COMMENTED_FILMS = 2;
const CARD_COUNT_PER_STEP = 5;

const cards = new Array(COUNT_FILMS).fill().map(generateCardData);
const filters = generateFilter(cards);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(header, createRankUserTemplate(), RENDER_PLACE.BEFORE_END);
render(main, createMenuTemplate(filters), RENDER_PLACE.AFTER_BEGIN);
render(main, createSortTemplate(), RENDER_PLACE.BEFORE_END);
render(main, createFilmsTemplate(), RENDER_PLACE.BEFORE_END);

const films = document.querySelector(`.films`);
const filmsList = document.querySelector(`.films-list`);

render(films, createFilmsTopRatedTemplate(), RENDER_PLACE.BEFORE_END);
render(films, createFilmsMostCommentedTemplate(), RENDER_PLACE.BEFORE_END);

const filmsListContainers = document.querySelectorAll(`.films-list__container`);

for (let i = 0; i < Math.min(cards.length, CARD_COUNT_PER_STEP); i++) {
  render(
      filmsListContainers[0],
      createCardFilmTemplate(cards[i]),
      RENDER_PLACE.BEFORE_END
  );
}

let renderedCardCount = CARD_COUNT_PER_STEP;
render(filmsList, createShowMoreButton(), RENDER_PLACE.BEFORE_END);

const showMoreButton = document.querySelector(`.films-list__show-more`);
showMoreButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  cards.slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP)
    .forEach((task) => render(filmsListContainers[0], createCardFilmTemplate(task), RENDER_PLACE.BEFORE_END));

  renderedCardCount += CARD_COUNT_PER_STEP;

  if (renderedCardCount >= cards.length) {
    showMoreButton.remove();
  }
});

for (let i = 0; i < COUNT_TOP_FILMS; i++) {
  render(
      filmsListContainers[1],
      createCardFilmTemplate(cards[i]),
      RENDER_PLACE.BEFORE_END
  );
}
for (let i = 0; i < COUNT_MOST_COMMENTED_FILMS; i++) {
  render(
      filmsListContainers[2],
      createCardFilmTemplate(cards[i]),
      RENDER_PLACE.BEFORE_END
  );
}
