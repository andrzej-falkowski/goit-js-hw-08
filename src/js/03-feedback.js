import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector(".feedback-form input");
const messageInput = document.querySelector(".feedback-form textarea");

const localStorageKey = "feedback-form-state";

const throttled = throttle(function (email, message) {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify({ email, message })
    );
  }, 500);

form.addEventListener("input", (event) => {
  throttled(emailInput.value, messageInput.value);
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log({ email: emailInput.value, message: messageInput.value });
  localStorage.removeItem(localStorageKey);
  event.currentTarget.reset();
});

const saved = localStorage.getItem(localStorageKey);

if (saved) {
  const { email, message } = JSON.parse(saved);
  emailInput.value = email;
  messageInput.value = message;
}
