const answers = [
  {
    
    Question: "/pyquizfiles/quiz1.py",
    A: "Infinite Loop",
    B: "6 7",
    C: "10 9",
    D: "Error",
    Correct: "10 9",
    Explanation:
      "`a` is initialized with the value 10. The while loop begins, & the condition a > 8 is checked. Since a is 10, and 10 is greater than 8, the condition is True, so the loops code block is executed.3. Inside the loop, the current value of a (which is 10) is printed, and the end parameter is used to specify that a space character should be added after each printed value. Then, a is decremented by 1 using a = a - 1. So, a is now 9. The loop repeats since a (which is now 9) is still greater than 8.\n6. It prints the new value of a, which is 9. The loop checks the condition again and finds that 9 is still greater than 8, so it repeats once more.It prints the new value of a, which is 9. Now, a is decremented by 1 again and becomes 8.\nAt this point, the condition a > 8 is checked again, but its no longer True because a is now equal to 8. So, the loop exits, and the output of the code is 10 9 which are the values of a that were printed during the two iterations of the loop",
  },

  {
    Question: "/pyquizfiles/quiz2.py",
    A: "<class 'tuple'>",
    B: "<class 'list'>",
    C: "<class 'str'>",
    D: "Error",
    Correct: "<class 'tuple'>",
    Explanation:
      "Any elements separated by , will represent a tuple in python. Unless it is enclosed in [] or {}",
  },

  {
    Question: "/pyquizfiles/quiz3.py", 
    A: "40",
    B: "10",
    C: "30",
    D: "Error",
    Correct: "30",
    Explanation:
      "The value of my_var getting changed in the class method. So, if on initialisation of the class the variable value was set to 10, that will get changed to 30 in the class method itself. And upon calling the class method, it will always return 30!",
  },

  {
    Question: "/pyquizfiles/quiz4.py", 
    A: "False",
    B: "True",
    C: "Error",
    D: "[]",
    Correct: "False",
    Explanation:
      "his condition can be viewed as `print(not True if True or False else False)`",
  },

  {
    Question: "/pyquizfiles/quiz5.py", 
    A: "Python",
    B: "love",
    C: "Error",
    D: "love Python",
    Correct: "Python",
    Explanation:
      "The keys 2.0 and 2 are considered identical ad hence the value for 2 overrides the value for 2.0",
  },

  {
    Question: "/pyquizfiles/quiz6.py", 
    A: "{'py': 'amazing'}",
    B: "{'py': 10}",
    C: "Error",
    D: "None Of The Above",
    Correct: "{'py': 10}",
    Explanation:
      "The value py gets changed",
  },


  {
    Question: "/pyquizfiles/quiz7.py", 
    A: "zero",
    B: "Error",
    C: "9",
    D: "zerozero",
    Correct: "9",
    Explanation:
      "Loop variable `number` retains the last value from the range(10) which is 9",
  },


  {
    Question: "/pyquizfiles/quiz8.py", 
    A: "[1, 2, 3]",
    B: "[1, 2, 3, 4, 5]",
    C: "[1, 2, 3, 5]",
    D: "[1, 2, 3, 4]",
    Correct: "[1, 2, 3, 4, 5]",
    Explanation:
      "Since y and x are referring to the same list operations to either them are reflected in both lists",
  },


  {
    Question: "/pyquizfiles/quiz9.py", 
    A: "3",
    B: "4",
    C: "23",
    D: "True",
    Correct: "4",
    Explanation:
      "The condition x+y*z evaluates to `not 23` which is FALSE and hence value of `Y` will be printed",
  },


  {
    Question: "/pyquizfiles/quiz10.py", 
    A: "[2, 4, 5, [0]]",
    B: "[1, 2, 4, 5, [0]]",
    C: "[0, 1, 2, 4, 5]",
    D: "[2, 4, 5, 0]",
    Correct: "[2, 4, 5, 0]",
    Explanation:
      "List method EXTEND (source_list.extend(dest)) takes an iterable(dest) and adds it's content to the end of the source_list",
  }
];

export default answers;
