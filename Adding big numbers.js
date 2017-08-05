function add(a, b) {
  let riporto = 0,
    result = [],
    len = Math.max(a.length, b.length),
    i = len;
  while (i--) {
    let sum = (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + riporto;
    riporto = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (riporto) result.unshift(riporto);
  return result.join('');
}