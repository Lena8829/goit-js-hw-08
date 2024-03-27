const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elephant Beside on Baby Elephant",
  },
  {
    url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue Geeen and Orange Parrot",
  },
  {
    url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Zebras on Zebra",
  },
];

// const images = [
//   {
//     url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
//     alt: "Group of Horses Running",
//   },
// ];

// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

const gallery = document.querySelector(".gallery");
console.log(gallery);
//создаем элементы списка изображ-й
images.forEach((image) => {
  const item = document.createElement("li");
  const img = document.createElement("img");

  //присв. знач.атр.
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add("image-item");

  //присв.стилей
  img.style.width = "360px";
  img.style.height = "300px";

  item.appendChild(img);
  gallery.appendChild(item);
});

//*еще вариант

// const gallery = document.querySelector(".gallery");

// // Создаем HTML-строку с помощ.шаблона
// const html = images
//   .map(
//     (image) => `
//   <li>
//     <img src="${image.url}" alt="${image.alt}" width = 360 height = 300 />
//   </li>
// `
//   )
//   .join("");

// // Доб. HTML в DOM
// gallery.insertAdjacentHTML("beforeend", html);
