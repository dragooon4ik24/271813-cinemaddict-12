import AbstractFilmsContainerView from "./abstract-film-container";

const createMainFilmsTemplate = () => `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <div class="films-list__container">

  </div>
</section>
</section>`;

export default class MainFilms extends AbstractFilmsContainerView {
  getTemplate() {
    return createMainFilmsTemplate();
  }
  getContainer() {
    return this.getElement().querySelector(`.films-list`);
  }
}
