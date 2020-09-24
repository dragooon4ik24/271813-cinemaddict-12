import {getModifiedDuration, getModifiedDescription, createElement} from "../utils";

const createCardFilmTemplate = ({
  title,
  rating,
  release,
  duration,
  genres,
  poster,
  description,
  comments,
}) => {
  const modifiedDuration = getModifiedDuration(duration);
  const modifiedDescription = getModifiedDescription(description);

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${release.date.getFullYear()}</span>
    <span class="film-card__duration">${modifiedDuration}</span>
    <span class="film-card__genre">${genres[0]}</span>
  </p>
  <img src="./images/posters/${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${modifiedDescription}</p>
  <a class="film-card__comments">${comments.length} comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
  </form>
  </article>`;
};

export default class CardFilm {
  constructor(card) {
    this._card = card;
    this._element = null;
  }

  getTemplate() {
    return createCardFilmTemplate(this._card);
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
