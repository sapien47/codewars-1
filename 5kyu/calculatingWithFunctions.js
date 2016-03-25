/*
This time we want to write calculations using functions and get the results.
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations:
plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function
represents the right operand */

function zero(func) {
  return func ? func(0) : 0;
}

function one(func) {
  return func ? func(1) : 1;
}

function two(func) {
  return func ? func(2) : 2;
}

function three(func) {
  return func ? func(3) : 3;
}

function four(func) {
  return func ? func(4) : 4;
}

function five(func) {
  return func ? func(5) : 5;
}

function six(func) {
  return func ? func(6) : 6;
}

function seven(func) {
  return func ? func(7) : 7;
}

function eight(func) {
  return func ? func(8) : 8;
}

function nine(func) {
  return func ? func(9) : 9;
}

function plus(num) {
  return function(num2){
    return num + num2;
  }
}

function minus(num) {
  return function(num2) {
    return num2 - num;
  }
}

function times(num) {
  return function(num2) {
    return num * num2;
  }
}

function dividedBy(num) {
  return function(num2) {
    return num2 / num;
  }
}
