def luck_check(s):
    first, second = divmod(len(s), 2)
    return sum(int(a) for a in s[:first]) == sum(int(b) for b in s[first + second:])
