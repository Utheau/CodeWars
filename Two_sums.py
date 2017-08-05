def two_sum(numbers, target):
    for i, firstItem in enumerate(numbers):
        for j, secondItem in enumerate(numbers):
            if i != j and firstItem + secondItem == target:
                return [i, j]
