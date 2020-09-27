import {render, RenderPosition} from "./utils/render";
import RankUserView from "./view/rank-user";
import MoviesPresenter from "./presenter/movies";
import MenuView from "./view/menu";
import {generateCardData} from "./mock/card";
import {generateFilter} from "./mock/filter";

const COUNT_FILMS = 20;

const cards = new Array(COUNT_FILMS).fill().map(generateCardData);
const filters = generateFilter(cards);

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(header, new RankUserView(), RenderPosition.BEFOREEND);
render(main, new MenuView(filters), RenderPosition.AFTERBEGIN);

const moviesPresenter = new MoviesPresenter(main);
moviesPresenter.init(cards);
