import {render, RenderPosition, remove} from "../utils/render";
import NoCardsView from "../view/no-cards";
import SortView from "../view/sort";
import MainFilmsView from "../view/films";
import TopRatedFilmsView from "../view/top-rated-films";
import MostCommentedFilmsView from "../view/most-commented-films";
import CardFilmView from "../view/card-film";
import PopupView from "../view/popup";
import ShowMoreButtonView from "../view/show-more-button";

const CARD_COUNT_PER_STEP = 5;

export default class Movies {
  constructor(movieContainer) {
    this._movieContainer = movieContainer;
    this._renderedCardCount = CARD_COUNT_PER_STEP;

    this._sortComponent = new SortView();
    this._mainFilmsComponent = new MainFilmsView();
    this._topRatedFilmsComponent = new TopRatedFilmsView();
    this._mostCommentedFilmsComponent = new MostCommentedFilmsView();
    this._noCardsComponent = new NoCardsView();
    this._showMoreButtonComponent = new ShowMoreButtonView();

    this._header = null;
    this._main = null;
    this._footer = null;

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  init(cards) {
    this._cards = cards.slice();

    this._header = document.querySelector(`.header`);
    this._footer = document.querySelector(`.footer`);

    this._renderFilms();
  }

  _handleShowMoreButtonClick() {
    this._renderCards(this._renderedCardCount, this._renderedCardCount + CARD_COUNT_PER_STEP, this._mainFilmsComponent.getContainerForCards());
    this._renderedCardCount += CARD_COUNT_PER_STEP;

    if (this._renderedCardCount >= this._cards.length) {
      remove(this._showMoreButtonComponent);
    }
  }
  _renderShowMoreButton() {
    render(this._mainFilmsComponent.getContainer(), this._showMoreButtonComponent, RenderPosition.BEFOREEND);

    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _renderSort() {
    render(this._movieContainer, this._sortComponent, RenderPosition.BEFOREEND);
  }

  _renderCard(card, container) {
    const cardComponent = new CardFilmView(card);
    const cardPopupComponent = new PopupView(card);

    const openPopup = () => {
      this._footer.appendChild(cardPopupComponent.getElement());
      document.addEventListener(`keydown`, EscKeyDownHandler);
    };

    const closePopup = () => {
      this._footer.removeChild(cardPopupComponent.getElement());
    };

    const EscKeyDownHandler = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        closePopup();
        document.removeEventListener(`keydown`, EscKeyDownHandler);
      }
    };

    cardComponent.setCardClickHandler(() => openPopup());
    cardPopupComponent.setCloseButtonClickHandler(() => {
      closePopup();
      document.removeEventListener(`keydown`, EscKeyDownHandler);
    });

    render(container, cardComponent, RenderPosition.BEFOREEND);
  }

  _renderCards(from, to, container) {
    this._cards
      .slice(from, to)
      .forEach((card) => {
        this._renderCard(card, container);
      });
  }

  _renderNoCards() {
    render(this._movieContainer, this._noCardsComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmList() {
    render(this._movieContainer, this._mainFilmsComponent, RenderPosition.BEFOREEND);
    this._renderCards(0, Math.min(this._cards.length, CARD_COUNT_PER_STEP), this._mainFilmsComponent.getContainerForCards());

    if (this._cards.length > CARD_COUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderTopRatedFilms() {
    render(this._mainFilmsComponent.getElement(), this._topRatedFilmsComponent, RenderPosition.BEFOREEND);
    this._renderCards(0, 2, this._topRatedFilmsComponent.getContainerForCards());
  }

  _renderMostCommentedFilms() {
    render(this._mainFilmsComponent.getElement(), this._mostCommentedFilmsComponent, RenderPosition.BEFOREEND);
    this._renderCards(0, 2, this._mostCommentedFilmsComponent.getContainerForCards());
  }

  _renderFilms() {
    if (!this._cards.length) {
      this._renderNoCards();
      return;
    }

    this._renderSort();
    this._renderFilmList();
    this._renderTopRatedFilms();
    this._renderMostCommentedFilms();
  }
}
