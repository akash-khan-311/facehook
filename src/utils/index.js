export const getDateDifferenceFromNow = fromDate => {
  let difference = new Date().getTime() - new Date(fromDate).getTime();
  difference = difference / 1000;

  const yearDifference = Math.floor(difference / 31536000); // 31536000 seconds in a year (365 days)
  if (yearDifference > 0) {
    return `${yearDifference} Year${yearDifference > 1 ? 's' : ''}`;
  }

  difference -= yearDifference * 31536000;

  const monthDifference = Math.floor(difference / 2628288); // 2628288 seconds in a month (30.44 days)
  if (monthDifference > 0) {
    return `${monthDifference} Month${monthDifference > 1 ? 's' : ''}`;
  }

  difference -= monthDifference * 2628288;

  const weekDifference = Math.floor(difference / 604800); // 604800 seconds in a week (7 days)
  if (weekDifference > 0) {
    return `${weekDifference} Week${weekDifference > 1 ? 's' : ''}`;
  }

  difference -= weekDifference * 604800;

  const dayDifference = Math.floor(difference / 86400); // 86400 seconds in a day
  if (dayDifference > 0) {
    return `${dayDifference} Day${dayDifference > 1 ? 's' : ''}`;
  }

  difference -= dayDifference * 86400;

  const hourDifference = Math.floor(difference / 3600); // 3600 seconds in an hour
  if (hourDifference > 0) {
    return `${hourDifference} Hour${hourDifference > 1 ? 's' : ''}`;
  }

  difference -= hourDifference * 3600;

  const minuteDifference = Math.floor(difference / 60); // 60 seconds in a minute
  if (minuteDifference > 0) {
    return `${minuteDifference} Minute${minuteDifference > 1 ? 's' : ''}`;
  }

  difference -= minuteDifference * 60;

  const secondDifference = Math.round(difference);
  if (secondDifference > 0) {
    return `${secondDifference} Second${secondDifference > 1 ? 's' : ''}`;
  }

  return '0 Seconds';
}
