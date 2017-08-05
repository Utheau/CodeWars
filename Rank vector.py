def ranks(array):
    r = {}
    for i, a in enumerate(sorted(array, reverse=True), start=1):
        if a not in r:
            r[a] = i
    return [r[b] for b in array]
