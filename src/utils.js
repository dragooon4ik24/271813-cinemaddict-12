export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstChild; // 3
};

export const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getShuffledArray = (array) => {
  let shuffledArray = array.slice();
  let length = shuffledArray.length;
  let randomIndex;
  let temp;
  while (length) {
    randomIndex = Math.floor(Math.random() * length--);
    temp = shuffledArray[length];
    shuffledArray[length] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temp;
  }

  return shuffledArray;
};

export const getRandomElementFromArray = (array) =>
  array[getRandomNumber(0, array.length - 1)];

export const getModifiedDuration = (duration) => {
  let minutes = duration % 60;
  let hours = Math.floor(duration / 60);

  return `${hours}h${minutes ? ` ${minutes}m` : ``}`;
};

export const getModifiedDescription = (description) =>
  description.length > 140 ? `${description.slice(0, 139)}...` : description;

export const getFormattedDate = (date) =>
  `${date.getDate()} ${date.toLocaleString(`en-US`, {
    month: `long`,
  })} ${date.getFullYear()}`;
