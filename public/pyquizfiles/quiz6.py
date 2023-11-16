class MyTest(str):
    pass

some_dict = {"py": "amazing"}
p = MyTest("py")
some_dict[p] = 10

print(some_dict)