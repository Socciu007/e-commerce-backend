const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const randomStringNumber = (count) => {
  const numbers = "0123456789";
  let randomStr = "";
  for (let i = 0; i < count; i++) {
    randomStr += numbers.charAt(randomInt(numbers.length).toString());
  }
  return randomStr;
};

module.exports = {
  randomInt,
  randomStringNumber,
};
