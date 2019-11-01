exports.ljust = (word, length, char) => {
  var fill = [];
  while (fill.length + word.length < length) {
    fill[fill.length] = char;
  }
  return fill.join("") + word;
};
