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
