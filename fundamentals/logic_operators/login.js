/* Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

const login = prompt("Who's there?", "")
let usr = "Admin"
let psw = "TheMaster"

if (login == usr) {
  let pass = prompt ("Password?", "");
    if (pass == psw) {
      alert("Welcome!")
    } else if (pass == "" || pass == null) {
      alert("Canceled.")
    } else {
      alert("Wrong password.")
    }
} else if (login == "" || login == null) {
  alert("Canceled.")
} else {
  alert("I don't know you...")
}
