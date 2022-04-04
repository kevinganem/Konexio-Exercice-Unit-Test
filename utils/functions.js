function isEven(number) {
  if (number < 0) {
    return false;
  } else if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function formatDate(date) {
  return date.split("-").reverse().join("/");
}

module.exports = {
  isEven,
  formatDate,
};
