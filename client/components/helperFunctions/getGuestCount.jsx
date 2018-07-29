const getGuestCount = (maximum) => {
  if (typeof maximum !== 'number' || maximum < 0) {
    return null;
  }
  const totalCount = [];
  for (let j = 1; j <= 12; j += 1) {
    if (j <= maximum) {
      totalCount.push(j);
    } else {
      break;
    }
  }
  return totalCount;
};

export default getGuestCount;
