
// Log in 
const username = document.getElementById('username') 
const password = document.getElementById('password')
const login = document.getElementById('login')


usernameValue = username.value
passwordValue = password.value

login.addEventListener('click', () => {
 const usernameValue = username.value;
  const passwordValue = password.value;

  if (usernameValue === 'admin' && passwordValue === 'admin1234') {
    alert("Successfull")
  }
  
  console.log(usernameValue, passwordValue);
})


