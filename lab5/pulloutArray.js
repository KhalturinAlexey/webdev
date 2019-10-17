function pulloutArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (Array.isArray(item)) {
      for (var j = 0; j < item.length; j++) {
        if (Number.isInteger(item[j])) {
          result.push(item[j]);
        }
      }
    } else {
      if (Number.isInteger(item)) {
        result.push(item);
      }
    }
  }
  return result;
}

pulloutArray([1, 2, 3]); // return [1, 2, 3]
pulloutArray([]); // return []
pulloutArray([1, [2, 3, 4], 5]); // return [1, 2, 3, 4, 5]
pulloutArray([1, [2, 3, 4], 5, [1]]); // return [1, 2, 3, 4, 5, 1]
pulloutArray([1, [1], null, NaN, ['test']]); // return [1, 1]
