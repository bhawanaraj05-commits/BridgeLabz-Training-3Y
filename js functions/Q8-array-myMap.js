Array.prototype.myMap = function (callback) {
  const results = [];

  for (let index = 0; index < this.length; index += 1) {
    if (index in this) {
      results[index] = callback(this[index], index, this);
    }
  }

  return results;
};

console.log([1, 2, 3].myMap(number => number * 2)); 
