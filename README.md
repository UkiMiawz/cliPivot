# Summary

Write a method that returns the "pivot" index of a list of integers. We define the pivot index as the index where the sum of the numbers on the left is equal to the sum of the numbers on the right. 

Given [1, 4, 6, 3, 2], the method should return 2, since the sum of the numbers to the left of index 2 is equal to the sum of numbers to the right of index 2 (1 + 4 = 3 + 2). If no such index exists, it should return -1. If there are multiple pivots, you can return the left-most pivot.

# How to run
## Prerequisites
- Node JS installed

## Run command with input

    node cli.js 1,2,3,4

## Tested cases
- Valid input (1,2,3,4)
- All zero (0,0,0,0)
- Letters (a,b,c,d) - return -1
- Mixed (a,1,2,b) - will sanitize and only take the integers as input
- Comma trails behind (1,2,) - will sanitize and remove the trailing comma
- 10000 integers

## TODO
Still missing unit tests