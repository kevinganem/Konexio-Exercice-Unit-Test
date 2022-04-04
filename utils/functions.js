function isEven(number) {
  if (number < 0) {
    return false;
  } else if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function formatDate(input) {
  const date = new Date(input);
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (isNaN(date.getTime())) {
      return null;
    } else {
      return input.split("-").reverse().join("/");
    }
  } else {
    return null;
  }
}

module.exports = {
  isEven,
  formatDate,
};
