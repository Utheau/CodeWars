def truncate_string(s, n):
    if len(s) <= n:
    return s


return '{}...'.format(s[: n - (3
                               if n > 3
                               else 0)])
