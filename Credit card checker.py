def valid_card(card_number):
    tot = 0
    for i, a in enumerate(reversed(card_number.replace(' ', ''))):
        if i % 2:
            actualValue = int(a) * 2
            tot += actualValue - 9 if actualValue > 8 else actualValue
        else:
            tot += int(a)
    return tot % 10 == 0
