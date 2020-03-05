function replaceString(text, search, replacement) {
  if (!text || ! search || replacement == undefined || replacement == null || text.search(search) == -1) {
    return false;
  }
  var replaced = text;
  while (replaced.search(search) != -1) {
    replaced = replaced.replace(search, replacement);
  }
  return replaced;
}

replaceString(); // return false
replaceString('abc', '', 'x'); // return false
replaceString('abc', 'b', 'x'); // return axc
replaceString('abc', 'b', ''); // return ac
