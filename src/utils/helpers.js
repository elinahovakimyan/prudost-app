import moment from 'moment';

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function range(start, end) {
  const ans = [];
  // eslint-disable-next-line
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

export const formatDate2 = (date) => {
  if (date) {
    const dateParts = date.split('-');
    const [YYYY, MM, DD] = dateParts;
    const formattedDate = [DD, MM, YYYY].join('-');

    return formattedDate;
  }
  return null;
};

export const formatDate = (date) => {
  if (date) {
    return moment(date).format('ll');
  }
  return null;
};
