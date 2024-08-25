const numbers = [6, 3, 4, 9, 7, 8];

function sortArray(array, order) {
  if (order == "asc") {
    numbers.sort();
    console.log(numbers);
  } else if (order == "desc") {
    numbers.sort();
    numbers.reverse();
    console.log(numbers);
  }
}

sortArray(numbers, "asc");
sortArray(numbers, "desc");
