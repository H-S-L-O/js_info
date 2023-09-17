/* Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90. */

let age = prompt("What's your age?", "");

if (age >= 14 && age <= 90) {
  alert("You're in the right age!")
} else {
  alert("You're too young or too old!")
} 

/* Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it. */

let age2 = prompt("What's your age(2)?", "")

if (!(age2 >= 14 && age <= 90)) {
  alert("You're outside of the 14-90 range!")
} else {
  alert("You're in the right range of ages!")
}

let age3 = prompt("What's your age(3)?", "")

if (age2 < 14 || age > 90) {
  alert("You're outside of the 14-90 range!")
} else {
  alert("You're in the right range of ages!")
}

