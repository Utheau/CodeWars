def mormons(start, reach, target, m=0):
    if start >= target:
        return m
    return mormons(start + (start * reach), reach, target, m + 1)
