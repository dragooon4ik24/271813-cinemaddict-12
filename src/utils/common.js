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
