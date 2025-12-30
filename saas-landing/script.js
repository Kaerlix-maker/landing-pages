const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = "تم التسجيل بنجاح، سنعلمك عند الإطلاق!";
});
