const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    if (e.target === question) {
      const answer = question.nextElementSibling;
      const lastAnswer = document.querySelector('.faq-answer.show-answer');
      let answer_id = answer.classList[1].slice(-1);

      if (lastAnswer && lastAnswer !== answer) {
        lastAnswer.classList.remove('show-answer');
        lastAnswer.previousElementSibling.classList.remove('active-question');
        if (
          lastAnswer.previousElementSibling.children[0].className ===
          'fas fa-chevron-up'
        ) {
          lastAnswer.previousElementSibling.children[0].className =
            'fas fa-chevron-down';
        }
        setTimeout(() => {
          toggleAnswer(answer, answer_id);
        }, 400);
      } else {
        toggleAnswer(answer, answer_id);
      }
      question.classList.toggle('active-question');
    }
  });
});

function toggleAnswer(answer, id) {
  answer.classList.toggle('show-answer');

  if (document.getElementById(id).className === 'fas fa-chevron-down') {
    document.getElementById(id).className = 'fas fa-chevron-up';
  } else {
    document.getElementById(id).className = 'fas fa-chevron-down';
  }
}
