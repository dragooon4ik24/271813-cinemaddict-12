import {render, RenderPosition} from "./utils";
import RankUserView from "./view/rank-user";
import NoCardsView from "./view/no-cards";
import MenuView from "./view/menu";
import SortView from "./view/sort";
import MainFilmsView from "./view/films";
import FilmsTopRatedView from "./view/films-top-rated";
import FilmsMostCommentedView from "./view/films-most-commented";
import CardFilmView from "./view/card-film";
import PopupView from "./view/popup";
import ShowMoreButtonView from "./view/show-more-button";
import {generateCardData} from "./mock/card";
import {generateFilter} from "./mock/filter";

const COUNT_FILMS = 20;
const COUNT_TOP_FILMS = 2;
const COUNT_MOST_COMMENTED_FILMS = 2;
const CARD_COUNT_PER_STEP = 5;

const cards = new Array(COUNT_FILMS).fill().map(generateCardData);
const filters = generateFilter(cards);

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
const footer = document.querySelector(`.footer`);

const renderCard = (filmListElement, card) => {
  const cardComponent = new CardFilmView(card);
  const cardPopupComponent = new PopupView(card);

  const openPopup = () => {
    footer.appendChild(cardPopupComponent.getElement());
    document.addEventListener(`keydown`, EscKeyDownHandler);
  };

  const closePopup = () => {
    footer.removeChild(cardPopupComponent.getElement());
  };

  const EscKeyDownHandler = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      closePopup();
      document.removeEventListener(`keydown`, EscKeyDownHandler);
    }
  };

  const cardClickHandler = () => openPopup();

  cardComponent.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, cardClickHandler);
  cardComponent.getElement().querySelector(`.film-card__title`).addEventListener(`click`, cardClickHandler);
  cardComponent.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, cardClickHandler);
  cardPopupComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    closePopup();
    document.removeEventListener(`keydown`, EscKeyDownHandler);
  });

  render(filmListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderAllFilms = (mainContainer, movieCards) => {
  if (movieCards.length) {
    render(mainContainer, new MainFilmsView().getElement(), RenderPosition.BEFOREEND);
  } else {
    render(mainContainer, new NoCardsView().getElement(), RenderPosition.BEFOREEND);
    return;
  }

  const films = document.querySelector(`.films`);
  const filmsList = document.querySelector(`.films-list`);

  render(films, new FilmsTopRatedView().getElement(), RenderPosition.BEFOREEND);
  render(films, new FilmsMostCommentedView().getElement(), RenderPosition.BEFOREEND);

  const filmsListContainers = document.querySelectorAll(`.films-list__container`);

  for (let i = 0; i < Math.min(movieCards.length, CARD_COUNT_PER_STEP); i++) {
    renderCard(filmsListContainers[0], movieCards[i]);
  }

  let renderedCardCount = CARD_COUNT_PER_STEP;
  const showMoreButtonComponent = new ShowMoreButtonView();
  render(filmsList, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  showMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    movieCards.slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP)
    .forEach((card) => renderCard(filmsListContainers[0], card));

    renderedCardCount += CARD_COUNT_PER_STEP;

    if (renderedCardCount >= movieCards.length) {
      showMoreButtonComponent.getElement().remove();
      showMoreButtonComponent.removeElement();
    }
  });

  for (let i = 0; i < COUNT_TOP_FILMS; i++) {
    renderCard(filmsListContainers[1], movieCards[i]);
  }
  for (let i = 0; i < COUNT_MOST_COMMENTED_FILMS; i++) {
    renderCard(filmsListContainers[2], movieCards[i]);
  }
};

render(header, new RankUserView().getElement(), RenderPosition.BEFOREEND);
render(main, new MenuView(filters).getElement(), RenderPosition.AFTERBEGIN);
render(main, new SortView().getElement(), RenderPosition.BEFOREEND);
renderAllFilms(main, cards);
