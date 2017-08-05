rom itertools import dropwhile


def drop_while(arr, pred):
    return list(dropwhile(pred, arr))
