/* The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/

function checkAge(age) {
  return (age>=18) || confirm("Did your parents allow you?")
}

function checkAge2(age2) {
  return (age2>=18) ? true : confirm("Did your parents allow you?")
}

/* Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a,b) {
  if (a<=b) {
    alert(a)
  } else if (b<=a) {
    alert(b)
  }
}

min(2,5)
min(1,1)
min(0,-5)

/* Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Create a web-page that prompts for x and n, and then shows the result of pow(x,n).*/

function calcPower(a,b) {
  let c = a**b;
  return c;
}

let a = +prompt("a?", "");
let b = +prompt("b?", "");

calcPower(a,b);
alert(a);
