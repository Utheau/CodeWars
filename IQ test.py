def iq_test(numbers):
    pair = []
    dispair = []
    for i, num in enumerate(map(int, numbers.split()), start=1):
        if num % 2 == 0:
            pair.append(i)
        else:
            dispair.append(i)
    return min(pair, dispair, key=len)[0]
