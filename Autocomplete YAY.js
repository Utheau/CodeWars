function autocomplete(input, dictionary) {
  let result = new RegExp('^' + input.replace(/[^a-z]/gi, ''), 'i');
  return dictionary.filter(function (w) {
    return result.test(w);
  }).slice(0, 5);
}