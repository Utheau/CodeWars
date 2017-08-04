function anagrams(word, words) {
  return words.filter(function (sol) {
    return sol.split('').sort().join('') === word.split('').sort().join('');
  });
}