// Get the container element
// Loop through numbers from 1 to 20
// Set the text content of the list item to the current number
// Check if the number is even or odd and apply the appropriate class
// Add an event listener to highlight the number when clicked
// Append the new div to the container
// Remove highlight from all numbers
// Loop through each element and remove the 'highlight' class

// My plan here is to use modulus % 2 with every number and get the remainder.
// If the remainder is 1, the number is odd, otherwise it's even.
// Then use the ternary operator with this condition to give a value to the classname

const numberList = document.getElementById("number-list");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.map((n) => {
  const number = document.createElement("p");
  number.textContent = n;
  // Check if the number is even or odd and apply the appropriate class
  let remainder = n % 2;
  let className = remainder === 1 ? "odd" : "even";
  number.classList.add(className);
  number.addEventListener("click", () => {
    number.classList.toggle("highlight");
  });
  numberList.appendChild(number);
});

// Remove highlight from all numbers
const removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", () => {
  // Loop through each element and remove the 'highlight' class
  const highlightedNumbers = document.querySelectorAll(".highlight");
  highlightedNumbers.forEach((number) => {
    number.classList.remove("highlight");
  });
});
