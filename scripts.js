// Select all button elements on the page
const buttons = document.querySelectorAll('button');
console.log("hi")
// Loop through each button and attach the event listener
buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('Button clicked!');
  });
});
document.querySelectorAll('.question').forEach(question => {
  question.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      // Reset all buttons in the current question div to the default border color
      question.querySelectorAll('button').forEach(button => {
        button.style.borderColor = 'rgb(255, 255, 255)'; // Reset border color
      });

      // Toggle the border color of the clicked button
      const currentColor = e.target.style.borderColor;
      if (currentColor === 'black') {
        e.target.style.borderColor = 'rgb(220, 234, 242)'; // Back to original color
      } else {
        e.target.style.borderColor = 'black'; // Set border to black when clicked
      }
    }
  });
});