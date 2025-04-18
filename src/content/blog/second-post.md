---
title: 'Thoughts about algorithmic thinking and Programming Languages'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Apr 13 2025'
heroImage: '/second_post.webp'
tags: ['algorithms', 'reflections']
---

The fact that multiple programming languages is pretty similar inspired me how to actually think as a really good programmer or even designer.

What we really need to focus on is not the language itself, but how to actually implement the program in our mind, as long as we can generate the thoughts of how should each steps perform, it will take no that much effort for us to convert the thinking process into the actual code.

For example, if we want to implement an algorithm called bubble sort, what we need to know is simply that it has a function that input a list which containing random order number, and we should manipulate the list in order to get the correct order.
Okay, so now we think of the procedure, we need to set up a loop to iterate the entire list, and then we need to compare the current and next elements. For each iteration and comparison we need to set up loop for them respectively.

Hence, we can construct our algorithm in a way that intuitively make sense:

1. Input an array
2. Loop one for entire array
3. Loop two for inner comparison
4. Comparison - if…
5. Output the sorted array

And last, just think of the language feature and convert it.

## PYTHON IMPLEMENTATION

```python
arr = [4, 2, 1]

def bubbleSort(u_arr: list):
  for i in range(0, len(u_arr)):
    for j in range(len(u_arr)-i-1):
      if u_arr[j] > u_arr[j+1]:
        u_arr[j], u_arr[j+1] = u_arr[j+1], u_arr[j]
  sorted_arr = u_arr
  return sorted_arr
```

---

👋 Hi, I am currently an undergraduate computer science student studying in the University of Edinburgh, if you enjoy this article or find it useful, I am very happy about that. If you don't mind to click follow, you would make my day, cheers! 🥂
