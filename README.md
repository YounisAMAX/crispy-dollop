# Crispy Dollop

## Problem
Return the next greater number using the same digits as the parameter. Return -1 if not found.

## Proposed solution
Swap the first digit with a following smaller digit if available. Then, sort all the digits below that digit in a descending order in the direction of higher orders of magnitude.

### Example for 12345
- ~~1 2 3~~ `4` **5**
- ~~1 2~~ `3` 5 **4**
- ~~1 2 4~~ `3` **5** 
- ~~1~~ `2` 4 5 **3**
- ~~1 3 2~~ `4` **5**
- ... etc

## Method
- Convert the number into ```string```
- Loop through the digits to find a digit smaller than the first digit.
- If the smaller digit is found, then swap it with the first digit. Otherwise, return -1
- Sort all the digits below the order of magnitude of the smaller digit in an ascending order towards the units digit, or descending order towards higher orders of magnitudes
- Parse the resulted number into an integer and return it

## What could have been done differently
- Checks for negative numbers
- There might be a mathematical solution to this problem

