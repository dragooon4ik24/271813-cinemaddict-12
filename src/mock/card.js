import {
  getRandomNumber,
  getShuffledArray,
  getRandomElementFromArray,
} from "../utils/common";

const FILMS_NAMES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Made for Each Other`,
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
];

const COMMENTS = [
  `a film that changed my life`,
  `a true masterpiece`,
  `post-credit scene was just amazing omg.`,
  `total bullshit`,
];

const AUTHORS = [
  `Ilya O'Reilly`,
  `Anton Shafner`,
  `Galya Travina`,
  `Andrey Polunin`,
];

const EMOTIONS = [`smile`, `sleeping`, `puke`, `angry`];

const GENRES = [
  `Comedy`,
  `Musical`,
  `Western`,
  `Drama`,
  `Cartoon`,
  `Mystery`,
  `Film-Noir`,
];

const COUNTRIES = [`USA`, `Finland`, `Russia`, `England`];

const DIRECTORS = [`Tom Ford`, `Deni Vilnev`, `Quentin Jerome Tarantino`];

const WRITERS = [
  `Takeshi Kitano`,
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
];

const ACTORS = [
  `Morgan Freeman`,
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
];

const getComment = () => ({
  id: getRandomNumber(0, 100),
  author: getRandomElementFromArray(AUTHORS),
  text: getRandomElementFromArray(COMMENTS),
  date: new Date(),
  emotion: getRandomElementFromArray(EMOTIONS),
});

const getComments = () =>
  new Array(getRandomNumber(0, 5)).fill().map(getComment);

const getDescription = () => {
  const shuffledDescription = getShuffledArray(DESCRIPTION);
  return shuffledDescription.slice(0, getRandomNumber(1, 5)).join(` `);
};

const getReleaseDate = () => ({
  date: new Date(new Date().getTime() + getRandomNumber(10000, 100000)),
  country: getRandomElementFromArray(COUNTRIES),
});

const getUserDetails = () => {
  const watched = Boolean(getRandomNumber(0, 1));

  return {
    watchlist: Boolean(getRandomNumber(0, 1)),
    alreadyWatched: watched,
    watchingDate: watched ? new Date() : null,
    favorite: Boolean(getRandomNumber(0, 1)),
  };
};

export const generateCardData = () => ({
  title: getRandomElementFromArray(FILMS_NAMES),
  originalTitle: getRandomElementFromArray(FILMS_NAMES),
  poster: getRandomElementFromArray(POSTERS),
  description: getDescription(),
  comments: getComments(),
  rating: getRandomNumber(1, 10),
  release: getReleaseDate(),
  duration: getRandomNumber(60, 120),
  genres: getShuffledArray(GENRES).slice(0, getRandomNumber(1, WRITERS.length)),
  director: getRandomElementFromArray(DIRECTORS),
  writers: getShuffledArray(WRITERS).slice(0, getRandomNumber(1, WRITERS.length)
  ),
  actors: getShuffledArray(ACTORS).slice(0, getRandomNumber(1, WRITERS.length)),
  ageRating: getRandomNumber(0, 21),
  userDetails: getUserDetails(),
});
