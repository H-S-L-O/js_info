// Use the for loop to output even numbers from 2 to 10.

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

/* Rewrite the code changing the for loop to while without altering its behavior (the output should stay same). 

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let i = 0;

while (i < 3) {
  alert(`number ${i}!` );
    i++;
}

/* Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task. */

for (let a = 0; a <= 100;) {
  a = prompt("Give me a higher number than 100:", "")
}


