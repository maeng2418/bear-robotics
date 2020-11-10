export const formatDuration = (num) => {
  const year = parseInt(num / 31536000) + ' years';
  const day = parseInt((num % 31536000) / 86400) + ' days' ;
  const hour = parseInt(((num % 31536000) % 86400) / 3600) + ' hours';
  const min = parseInt((((num % 31536000) % 86400) % 3600) / 60) + ' minutes';
  const sec = parseInt((((num % 31536000) % 86400) % 3600) % 60) + ' seconds';
  const dates = [ year, day, hour, min, sec ].filter(date => parseInt(date) > 0);
  const last = dates.pop();
  if (dates.length > 1) {
    return dates.join(', ') + ' and ' + last
  } else {
    return dates[0];
  }
}