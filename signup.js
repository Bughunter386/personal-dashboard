const form = document.getElementById('signupForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  if (username === '' || email === '' || password === '' || confirm === '') {
    message.textContent = 'Please fill in all fields.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Invalid email format.';
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters.';
    return;
  }

  if (password !== confirm) {
    message.textContent = 'Passwords do not match.';
    return;
  }

  const user = {
    username,
    email,
    password
  };

  localStorage.setItem('user', JSON.stringify(user));
  message.style.color = 'green';
  message.textContent = 'Account created successfully! 🎉';

  form.reset();
});
