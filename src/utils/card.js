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
