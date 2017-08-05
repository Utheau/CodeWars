from fractions import gcd


def lcm(*args):
    return reduce(lambda first, second: first * second / gcd(first, second), args)
