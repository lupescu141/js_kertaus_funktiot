const numbers = [];
const evennumbers = [];

while (true) {
  const userinput = prompt("Enter a number (or 'done' to finish):");
  if (userinput == "done") {
    break;
  }
  numbers.push(userinput);
}

numbers.forEach((element) => {
  if (element % 2 == 0) {
    evennumbers.push(element);
  }
});

if (evennumbers.length > 0) {
  const textnode = document.createTextNode("Even numbers: " + evennumbers);
  document.body.appendChild(textnode);
} else {
  const textnode = document.createTextNode("Even numbers: none");
  document.body.appendChild(textnode);
}
