


// Select all buttons with the class 'addtocart'
const buttons = document.querySelectorAll(".addtocart");

buttons.forEach(button => {
  // Find the associated 'done' element for the current button
  const done = button.querySelector(".done");

  // Initialize the state for the current button
  let added = false;

  // Add click event listener to each button
  button.addEventListener('click', () => {
    if (added) {
      done.style.transform = "translate(-110%) skew(-40deg)";
      added = false;
    } else {
      done.style.transform = "translate(0px)";
      added = true;
    }
  });
});
