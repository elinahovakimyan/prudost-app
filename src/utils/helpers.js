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

export const formatServerError = (error) => {
  if (error) {
    const fields = Object.keys(error);
    const messages = [];

    fields.forEach((fieldName) => {
      const message = error[fieldName];

      if (fieldName === 'non_field_errors') {
        messages.push(`${message}`);
      } else {
        messages.push(`${message} (${fieldName})`);
      }
    });

    return messages.join(' ~ ');
  }
  return null;
};

// export const getDeadlineColor = (date) => {
//   const green = '#37b574';
//   const red = '#B53737';

//   if smaller
// };
