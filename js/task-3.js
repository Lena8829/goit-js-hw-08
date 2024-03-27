// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", helloMsg);

function helloMsg(event) {
  //достаем знач.инпута, убираем пробелы
  const userName = event.currentTarget.value.trim();

  //провер.если инпут пустой или с пробелами
  if (userName === "" || userName === " ") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = userName;
  }
}
