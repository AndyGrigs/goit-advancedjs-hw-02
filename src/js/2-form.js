// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Об’єкт для збереження даних форми
let formData = {
  email: "",
  message: "",
};

const formEl = document.querySelector(".feedback-form");

// При завантаженні сторінки перевіряємо, чи є збережені дані
populateForm();

formEl.addEventListener("input", onFormInput);
formEl.addEventListener("submit", onFormSubmit);

// Функція обробки події input
function onFormInput(e) {
  const { name, value } = e.target;
  // Записуємо дані, обрізаючи зайві пробіли
  formData[name] = value.trimStart();
  // Записуємо об’єкт formData у локальне сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Функція заповнення форми при завантаженні
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    // Заповнюємо відповідні поля форми
    Object.entries(formData).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}

// Функція обробки події submit
function onFormSubmit(e) {
  e.preventDefault();

  // Перевіряємо, чи обидва поля заповнені (використовуємо trim для усунення пробілів з обох боків)
  const email = formEl.elements.email.value.trim();
  const message = formEl.elements.message.value.trim();

  if (email === "" || message === "") {
    alert("Fill please all fields");
    return;
  }

  // Виводимо дані у консоль
  console.log({ email, message });

  // Очищаємо форму, локальне сховище та об’єкт formData
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
}
