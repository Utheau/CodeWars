def triple_trouble(one, two, three):
    return ''.join(''.join(sub) for sub in zip(one, two, three))
