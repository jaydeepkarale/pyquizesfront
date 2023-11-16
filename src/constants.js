const answers = [
  {
    
    Question: "/.vercel/output/static/pyquizfiles/quiz1.py",
    A: "Infinite Loop",
    B: "6 7",
    C: "10 9",
    D: "Error",
    Correct: "10 9",
    Explanation:
      "`a` is initialized with the value 10. The while loop begins, & the condition a > 8 is checked. Since a is 10, and 10 is greater than 8, the condition is True, so the loops code block is executed.3. Inside the loop, the current value of a (which is 10) is printed, and the end parameter is used to specify that a space character should be added after each printed value. Then, a is decremented by 1 using a = a - 1. So, a is now 9. The loop repeats since a (which is now 9) is still greater than 8.\n6. It prints the new value of a, which is 9. The loop checks the condition again and finds that 9 is still greater than 8, so it repeats once more.It prints the new value of a, which is 9. Now, a is decremented by 1 again and becomes 8.\nAt this point, the condition a > 8 is checked again, but its no longer True because a is now equal to 8. So, the loop exits, and the output of the code is 10 9 which are the values of a that were printed during the two iterations of the loop",
  },

  {
    Question: "/.vercel/output/static/pyquizfiles/quiz2.py",
    A: "<class 'tuple'>",
    B: "<class 'list'>",
    C: "<class 'str'>",
    D: "Error",
    Correct: "<class 'tuple'>",
    Explanation:
      "Any elements separated by , will represent a tuple in python. Unless it is enclosed in [] or {}",
  },

  {
    Question: "/.vercel/output/static/pyquizfiles/quiz3.py", 
    A: "40",
    B: "10",
    C: "30",
    D: "Error",
    Correct: "30",
    Explanation:
      "The value of my_var getting changed in the class method. So, if on initialisation of the class the variable value was set to 10, that will get changed to 30 in the class method itself. And upon calling the class method, it will always return 30!",
  }
];

export default answers;
