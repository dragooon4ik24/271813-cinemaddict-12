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

export const sortRatingUp = (card1, card2) => {
  if (card1.rating > card2.rating) {
    return -1;
  }

  if (card1.rating < card2.rating) {
    return 1;
  }

  return 0;
};

export const sortDateUp = (card1, card2) => {
  const date1 = card1.release.date.getTime();
  const date2 = card2.release.date.getTime();

  if (date1 > date2) {
    return -1;
  }

  if (date1 < date2) {
    return 1;
  }

  return 0;
};
