function pulloutArray(array) {
  var result = [];
  if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      if (Array.isArray(item)) {
        for (var j = 0; j < item.length; j++) {
          addIfNumber(item[j], result);
        }
      } else {
        addIfNumber(item, result);
      }
    }
  }
  return result;
}
function addIfNumber(value, result) {
  if (Number.isInteger(value)) {
    result.push(value);
  }
}

pulloutArray([1, 2, 3]); // return [1, 2, 3]
pulloutArray([]); // return []
pulloutArray([1, [2, 3, 4], 5]); // return [1, 2, 3, 4, 5]
pulloutArray([1, [2, 3, 4], 5, [1]]); // return [1, 2, 3, 4, 5, 1]
pulloutArray([1, [1], null, NaN, ['test']]); // return [1, 1]
