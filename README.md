# Crispy Dollop

## Problem
Return the next greater number using the same digits as the parameter.

## Method
- Convert the number into ```string```
- Loop through the digits to find a digit smaller than the first digit.
- If the smaller digit is found, then swap it with the first digit
- Sort all the digits below the order of magnitude of the smaller digit in an ascending order towards the units digit
- Parse the resulted number into an integer and return it

## What could have been done differently
- Checks for negative numbers
- There might be a mathematical solution to this problem

