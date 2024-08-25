const numbers = [];
numbers.push(prompt("Enter number 1:"));
numbers.push(prompt("Enter number 2:"));
numbers.push(prompt("Enter number 3:"));
numbers.push(prompt("Enter number 4:"));
numbers.push(prompt("Enter number 5:"));
console.log(numbers);
userinput = prompt("search for a number:");
if (numbers.includes(userinput)) {
  console.log("Number " + userinput + " is found in the array");
} else {
  console.log("Number " + userinput + " is not found in the array");
}
numbers.pop();
console.log("Updated numbers are: " + numbers);
numbers.sort();
console.log("Sorted numbers are: " + numbers);
