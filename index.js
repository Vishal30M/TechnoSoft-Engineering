// Get all FAQ questions and answers
const faqQuestions = document.querySelectorAll('.faq-question');

// Attach click event listeners
faqQuestions.forEach((question) => {
  question.addEventListener('click', toggleAnswer);
});

// Function to toggle the answer visibility
function toggleAnswer() {
  const answer = this.nextElementSibling;
  const toggle = this.querySelector('.faq-toggle');

  if (answer.style.display === 'none') {
    answer.style.display = 'block';
    toggle.textContent = '-';
  } else {
    answer.style.display = 'none';
    toggle.textContent = '+';
  }
}
