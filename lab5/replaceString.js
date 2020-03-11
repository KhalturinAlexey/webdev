function replaceString(text, search, replacement) {
  if (!isString(text) || !isString(search) || !isString(replacement) || search.length == 0 || text.search(search) == -1) {
    return false;
  }
  var replaced = text;
  while (replaced.search(search) !== -1) {
    replaced = replaced.replace(search, replacement);
  }
  return replaced;
}
function isString(variable) {
  return typeof variable == 'string';
}

console.log(replaceString()); // return false
console.log(replaceString('abc', '', 'x')); // return false
console.log(replaceString('abc', 'b', 'x')); // return axc
console.log(replaceString('abc', 'b', '')); // return ac
