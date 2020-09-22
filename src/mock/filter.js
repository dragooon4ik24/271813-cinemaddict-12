const cardToFilterMap = {
  Watchlist: (cards) => cards
    .filter((card) => card.userDetails.watchlist).length,
  History: (cards) => cards
    .filter((card) => card.userDetails.alreadyWatched).length,
  Favorites: (cards) => cards
    .filter((card) => card.userDetails.favorite).length,
};

export const generateFilter = (cards) => {
  return Object.entries(cardToFilterMap).map(([filterName, countCards]) => {
    return {
      name: filterName,
      count: countCards(cards),
    };
  });
};
