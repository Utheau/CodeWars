function sc(s) {
  res = ''
  for (i in s)
    res += s.search(s[i].toUpperCase()) >= 0 && s.search(s[i].toLowerCase()) >= 0 ? s[i] : ''
  return res
}