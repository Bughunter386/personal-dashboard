const userInfo = document.getElementById('userInfo');
const clearBtn = document.getElementById('clearBtn');

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  userInfo.innerHTML = `
    <h2>Hello, ${user.username} 👋</h2>
    <p>Email: ${user.email}</p>
  `;
} else {
  userInfo.innerHTML = `<p>No user data found. Please <a href="signup.html">sign up</a> first.</p>`;
}

// Clear data
clearBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  alert('User data cleared!');
  location.reload();
});
