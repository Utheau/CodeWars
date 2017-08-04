function convert(input, source, target) {
  let inptDec = convertToDecimal(input, source);
  return convertToTarget(inptDec, target);
}

function convertToDecimal(input, source) {
  let
    sourcePositionMap = getPositionMap(source),
    sourceBase = source.length;

  return input.split('').reverse().reduce(function (accum, item, index) {
    return accum + (Math.pow(sourceBase, index) * sourcePositionMap[item]);
  }, 0);
}

function convertToTarget(inptDec, target) {
  let
    targetSymbolMap = getSymbolMap(target),
    targetBase = target.length,
    remainderPositions = [],
    dividend;

  dividend = inptDec;
  do {
    remainderPositions.push(dividend % targetBase);
    dividend = Math.floor(dividend / targetBase);
  } while (dividend > 0);
  return remainderPositions.reverse().map(function (position) {
    return targetSymbolMap[position];
  }).join('');

}

function getPositionMap(alph) {
  return mapper(alph, function (accum, item, index) {
    accum[item] = index;
    return accum;
  });
}

function getSymbolMap(alph) {
  return mapper(alph, function (accum, item, index) {
    accum[index] = item;
    return accum;
  });
}

function mapper(alph, reduceFn) {
  return alph.split('').reduce(reduceFn, {});
}