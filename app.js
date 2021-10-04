const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

const onLoginSubmit = function (event) {
  event.preventDefault();
  console.log(event);
};

function handleLinkClick(event) {
  event.preventDefault(); // 기본 동작을 막는다. 오호!
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
