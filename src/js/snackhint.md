Ось код для другого завдання (генератор промісів) з використанням бібліотеки `iziToast`:

---

### 📂 **Файл: `2-snackbar.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promise Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form class="form">
        <label>
            Delay (ms)
            <input type="number" name="delay" required />
        </label>

        <fieldset>
            <legend>State</legend>
            <label>
                <input type="radio" name="state" value="fulfilled" required />
                Fulfilled
            </label>
            <label>
                <input type="radio" name="state" value="rejected" required />
                Rejected
            </label>
        </fieldset>

        <button type="submit">Create notification</button>
    </form>

    <script type="module" src="2-snackbar.js"></script>
</body>
</html>
```

---

### 📜 **Файл: `2-snackbar.js`**
```javascript
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Отримуємо доступ до елементів форми
const form = document.querySelector(".form");

// Функція для створення промісу
function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

// Обробник події сабміту форми
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = parseInt(form.elements["delay"].value);
    const state = form.elements["state"].value;

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({
                title: "✅ Success",
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "❌ Error",
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        });

    // Очищення форми після сабміту
    form.reset();
});
```

---

### 📌 **Опис роботи коду:**
1. **Користувач вводить затримку (`delay`) у мілісекундах** і вибирає стан (`fulfilled` або `rejected`).
2. **Функція `createPromise(delay, state)` створює проміс**:
   - Після вказаної затримки проміс виконується (`resolve()`) або відхиляється (`reject()`).
3. **Під час сабміту форми**:
   - Значення зчитуються з форми.
   - Викликається `createPromise()`, і в залежності від результату показується повідомлення `iziToast.success()` або `iziToast.error()`.
   - Після відправки форми вона очищається.

Цей код повністю відповідає вимогам завдання. Можеш тестувати та здавати! 🚀