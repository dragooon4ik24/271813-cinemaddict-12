import AbstractView from "./abstract";

const createNoCardsTemplate = () => `<section class="films-list">
  <h2 class="films-list__title">There are no movies in our database</h2>
</section>`;

export default class NoCards extends AbstractView {
  getTemplate() {
    return createNoCardsTemplate();
  }
}
