export const normalizeLanguagesList = data => {
  if (!Array.isArray(data)) {
    return [];
  }

  // Languages list is in the first item.
  return data[0];
};

export const normalizeMoviesList = data => {
  const list = [];
  if (!Array.isArray(data)) {
    return list;
  }

  // Movies list is in the second item.
  const listItem = data[1];
  Object.keys(listItem).forEach(item => {
    list.push(listItem[item]);
  });
  
  return list;
};
