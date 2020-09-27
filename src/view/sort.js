import AbstractView from "./abstract";
import {SortType} from "../const";

const createSortTemplate = () => `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
  <li><a href="#" class="sort__button" data-sort-type="${SortType.DATE}">Sort by date</a></li>
  <li><a href="#" class="sort__button" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
</ul>`;

export default class Sort extends AbstractView {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
    this._listLinks = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }
    for (let i = 0; i < this._listLinks.length; i++) {
      if (this._listLinks[i].classList.contains(`sort__button--active`)) {
        this._listLinks[i].classList.remove(`sort__button--active`);
        break;
      }
    }
    evt.target.classList.add(`sort__button--active`);

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._listLinks = this.getElement().querySelectorAll(`.sort__button`);
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
