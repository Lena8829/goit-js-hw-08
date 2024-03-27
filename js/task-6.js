// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
//------------------------------------------------
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
//-------------------------------------------------
// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
//-------------------------------------------------
// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
//-------------------------------------------------
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
//-------------------------------------------------
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//создаем коллекцию --------------------------------------------------------------------------------------------------------------------------
function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = ""; //чистим от предыд.введенных данных

  //создаем бокс с размерами и стилями
  let boxSize = 30; //начальн.разм.

  for (let i = 0; i < amount; i++) {
    boxSize += 10; //увелич.кажд.нов.бокс

    const box = document.createElement("div");
    // box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor(); // случайный цвет
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    boxes.appendChild(box); //добавляем бокс к контейнеру
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//кнопка create
const createBtn = document.querySelector("button[data-create]");
createBtn.addEventListener("click", addNumber);
createBtn.classList.add("create-btn");

//берем знач-е, введеное польз-лем
function addNumber() {
  const inputData = document.querySelector('input[type="number"]'); //обращ.к инпуту
  inputData.classList.add("input-6");
  const number = parseInt(inputData.value); //получаем знач-е инпута

  //если число от 1 до 100
  if (number >= 1 && number <= 100) {
    createBoxes(number); // то вызываем функцию, кот.создает кубики
    inputData.value = ""; // очищ.знач-е инпута
  }
}

// удаляем коллекцию--------------------------------------------------------------------------------------------------------------------------
function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = ""; // Очищаєм контейнер
}
//--------------------------------------------------------------------------------------------------------------------------------------------
// кнопка destroy
const destroyBtn = document.querySelector(["button[data-destroy]"]);
destroyBtn.addEventListener("click", destroyBoxes);
destroyBtn.classList.add("destroy-btn");
