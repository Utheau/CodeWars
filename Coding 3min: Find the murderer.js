function sc(said, suspects) {
  let result = new RegExp('^' + said.replace(/\~/g, '.'), 'i');
  let final = suspects.filter(x => result.test(x));
  return final ? final.join(',') : '';
}