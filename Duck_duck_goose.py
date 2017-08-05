from typing import List


class Player:

    def __init__(self, name):
        self.name = name


def duck_duck_goose(players: List[Player], goose: int) -> str:
    return players[(goose - 1) % len(players)].name
