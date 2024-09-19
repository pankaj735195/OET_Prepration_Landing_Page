// JavaScript for FAQ section
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    
    // Toggle display of FAQ answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      // Hide other open answers
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      answer.style.display = 'block';
    }
  });
});
