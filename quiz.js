document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let score = 0;
  const total = 3;

  const answers = {
    q1: 'a',
    q2: 'b',
    q3: 'c'
  };

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  const result = document.getElementById('result');
  result.innerText = `You got ${score} out of ${total} correct! 🎉`;

  if (score === total) {
    result.style.color = 'green';
  } else if (score === 0) {
    result.style.color = 'red';
  } else {
    result.style.color = 'orange';
  }
});
