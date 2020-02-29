export const getFormattedDateFromString = (date) => {
  // current format DD-MM-YYYY
  // final format YYYY-MM-DD
  const [DD, MM, YYYY] = date.split('-');
  const formattedDate = [YYYY, MM, DD].join('-');

  return formattedDate;
};

export const getFormattedDateFromDate = (date) => {
  // current format DD-MM-YYYY
  // final format YYYY-MM-DD
  const formattedDate = date.format('YYYY-MM-DD');

  return formattedDate;
};
