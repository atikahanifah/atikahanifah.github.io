
const loginFormElement = document.querySelector('#loginForm');
const inputUsernameElement = document.querySelector('#inputUsername');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedUsername = 'Sutisno Candra Kusuma';
const expectedPassword = '10-10-2022';

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = inputUsernameElement.value;
    const password = inputPasswordElement.value;
    if (username == expectedUsername && password == expectedPassword){
      sessionStorage.setItem("isLoggedIn", "true");
      window.location.href = "gift.html";
    }else{
      showPopUp();
    }
});
