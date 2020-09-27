import AbstractView from "./abstract";

export default class AbstractFilmsContainer extends AbstractView {
  getContainerForCards() {
    return this.getElement().querySelector(`.films-list__container`);
  }
}
