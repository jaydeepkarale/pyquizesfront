def func(x, y=None):
    if y is None:
        y = [1]
    y.extend(x)
    return y

print(func([0], [2,4,5]))
