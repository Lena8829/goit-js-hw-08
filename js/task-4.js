// Напиши скрипт управління формою логіна.

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.

// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const login = document.querySelector(".login-form");

login.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault(); // убираем дефолт.повед-е

  //достаем значения инпутов
  const email = login.elements.email.value.trim();
  const password = login.elements.password.value.trim();

  //проверяем если не заполнены поля, то выводим алерт
  if (!email || !password) {
    alert("All form fields must be filled in");
  } else {
    //если поля заполнен и был сабмит, то
    const userData = {
      email,
      password,
    };
    console.log(userData);
  }

  login.reset();
}
