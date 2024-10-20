// Add event listeners to all buttons in the quiz
document.querySelectorAll('.question').forEach((question, index, allQuestions) => {
  question.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      // Reset all buttons in the current question div to the default border color
      question.querySelectorAll('button').forEach(button => {
        button.style.borderColor = 'rgb(255, 255, 255)'; // Reset border color to default
      });

      // Toggle the clicked button's border color between black and the default color
      e.target.style.borderColor = e.target.style.borderColor === 'black' ? 'rgb(220, 234, 242)' : 'black';

      // Scroll to the next question if it exists
      const nextQuestion = allQuestions[index + 1];
      if (nextQuestion) {
        // Get the header's height to calculate the offset
        const headerHeight = document.querySelector('header').offsetHeight;

        // Scroll to the next question, adjusting for the header height
        window.scrollTo({
          top: nextQuestion.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Function to hide results
function hideResults() {
  document.querySelector('.results').style.display = 'none';
}

// Function to show results
function showResults() {
  document.querySelector('.results').style.display = 'flex';
}