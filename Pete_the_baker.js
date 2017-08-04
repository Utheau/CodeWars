function cakes(recipe, available) {
  let result = Number.MAX_VALUE;
  for (let key in recipe) {
    if (!(key in available))
      return 0;
    result = Math.min(result, Math.floor(available[key] / recipe[key]));
  }
  return result;
}