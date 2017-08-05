function guessGifts(wishlist, presents) {
  return wishlist.filter(function (x) {
    return presents.some(function (y) {
      return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
    });
  }).map(function (x) {
    return x.name;
  });
}