from re import split


def camelize(string):
    return ''.join(x.capitalize() for x in split('([^a-zA-Z0-9])', string)
                   if x.isalnum())
