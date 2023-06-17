const body = document.querySelector(".content");
const loader = document.querySelector("#pre-load");
const menu = document.querySelectorAll("li.navbar__item a");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnOpenModal = document.querySelector(".btn--show-modal");
const btnScroll = document.querySelector(".btn--scroll");
const mainScroll = document.querySelector(".main");
const formNewsletter = document.querySelector("#myForm");
const emailForm = document.querySelector("#email");
const formModal = document.querySelector("#modalForm");
const firstNameModal = document.querySelector("#firstNameModal");
const lastNameModal = document.querySelector("#lastNameModal");
const emailModal = document.querySelector("#emailModal");
const date = document.querySelector(".footer__tertiary-date");

function showLoadingSpinner() {
  loader;
  body.style.display = "none";
}

function hideLoadingSpinner() {
  body.style.display = "block";
  loader.style.display = "none";
}

const getProducts = async function () {
  showLoadingSpinner();
  const request = await fetch("https://fakestoreapi.com/products");
  const response = await request.json();

  setTimeout(() => {
    hideLoadingSpinner();
  }, 3000);
};

getProducts();

// Category names in the main menu and homepage.

const getCategories = async function () {
  const requestCategories = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const responseCategories = await requestCategories.json();

  const navBarItem = document.getElementById("navbar-list");
  const mainSection = document.querySelectorAll(".main");
  const mainSectionArray = Array.from(mainSection);

  responseCategories.forEach((category) => {
    const listItem = document.createElement("li");
    listItem.classList.add("navbar__item");

    const linkItem = document.createElement("a");
    linkItem.href = "shop.html";
    linkItem.text = category;

    listItem.appendChild(linkItem);
    navBarItem.appendChild(listItem);
  });

  mainSectionArray.forEach((section, index) => {
    const mainTitleCategory = document.createElement("h1");
    mainTitleCategory.classList.add("main__title--center");
    mainTitleCategory.textContent = responseCategories[index];
    section.prepend(mainTitleCategory);
  });
};

getCategories();

//SMOOTH SCROLLING

btnScroll.addEventListener("click", function (e) {
  mainScroll.scrollIntoView({ behavior: "smooth" });
});

//MODAL WINDOW

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "escape") {
    closeModal();
  }
});

//NEWSLETTER FORM

formNewsletter.addEventListener("submit", (e) => {
  e.preventDefault();

  let dados = {
    email: emailForm.value,
  };

  console.log(dados);

  fetch("https://fakeNewsletter.com", {
    method: "post",
    body: JSON.stringify(dados),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

//MODAL FORM

formModal.addEventListener("submit", (e) => {
  e.preventDefault();

  const dadosModal = {
    firstName: firstNameModal.value,
    lastName: lastNameModal.value,
    email: emailModal.value,
  };

  console.log(dadosModal);

  fetch("https://fakeNewsletter.com", {
    method: "post",
    body: JSON.stringify(dadosModal),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

//DINAMIC FOOTER

function dinamicDate() {
  const currentDate = new Date();
  const getDate = currentDate.toDateString();

  date.innerHTML = getDate;
}

dinamicDate();
