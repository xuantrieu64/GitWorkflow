const passwordTab = document.querySelector("#password-tab");
const emailTab = document.querySelector("#email-tab");
const switchMethodLink = document.querySelector("#switch-method-link");
const secretField = document.querySelector("#secret-field");
const secretLabel = document.querySelector("#secret-label");
const secretInput = document.querySelector("#secret");
const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");
const googleButton = document.querySelector(".google-button");

function setLoginMethod(method) {
  const isEmailCode = method === "email";

  passwordTab.classList.toggle("is-active", !isEmailCode);
  emailTab.classList.toggle("is-active", isEmailCode);
  passwordTab.setAttribute("aria-selected", String(!isEmailCode));
  emailTab.setAttribute("aria-selected", String(isEmailCode));
  passwordTab.tabIndex = isEmailCode ? -1 : 0;
  emailTab.tabIndex = isEmailCode ? 0 : -1;
  secretLabel.textContent = isEmailCode ? "Mã email" : "Mật khẩu";
  secretInput.type = isEmailCode ? "text" : "password";
  secretInput.name = isEmailCode ? "code" : "password";
  secretInput.autocomplete = isEmailCode ? "one-time-code" : "current-password";
  secretInput.inputMode = isEmailCode ? "numeric" : "";
  secretInput.placeholder = isEmailCode ? "Nhập mã gồm 6 chữ số" : "";
  secretField.hidden = false;
  formMessage.textContent = "";
  switchMethodLink.textContent = isEmailCode
    ? "Đăng nhập bằng mật khẩu"
    : "Đăng nhập bằng mã email";
}

passwordTab.addEventListener("click", () => setLoginMethod("password"));
emailTab.addEventListener("click", () => setLoginMethod("email"));
switchMethodLink.addEventListener("click", () => {
  setLoginMethod(emailTab.getAttribute("aria-selected") === "true" ? "password" : "email");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Giao diện chưa kết nối với dịch vụ đăng nhập.";
});

googleButton.addEventListener("click", () => {
  formMessage.textContent = "Đăng nhập bằng Google chưa được cấu hình.";
});
