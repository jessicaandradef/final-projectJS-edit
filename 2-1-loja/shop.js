const sectionBoxImage = document.getElementById("store__section");
const navbarContainer = document.getElementById("navbar");
const btnSearch = document.querySelector("#search");
const date = document.querySelector(".footer__tertiary-date");

// DISPLAY IMAGES

const getProduct = async function () {
  const request = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const response = await request.json();

  response.forEach((element) => {
    const boxContent = document.createElement("div");
    const boxImage = document.createElement("div");

    boxImage.classList.add("box__img");
    boxContent.classList.add("box__store-content");
    boxContent.innerHTML = `<div class="box__store-content
    ">
          <div class="box__img">
            <a href="product.html?produtoId=${element.id}"
              ><img
                src="${element.image}"
                alt="${element.description}" />
              <img
                class="hover-img"
                src="./2-1-loja/assets/products/1/product-hover.webp"
                alt="${element.description}"
            /></a>
          </div>
          <h3 class="product-name">${element.title}</h3>
          <p>${element.price} € </p>
        </div>`;
    boxContent.appendChild(boxImage);
    sectionBoxImage.appendChild(boxContent);
    navbarContainer.insertAdjacentElement("afterend", sectionBoxImage);
  });
};

getProduct();

// PRODUCT FILTER

btnSearch.addEventListener("click", filterProducts);

function filterProducts(e) {
  e.preventDefault();
  const input = document.querySelector("#search-input");
  const products = document.querySelectorAll(".box__store-content h3");
  const filter = input.value.toUpperCase();

  products.forEach((product) => {
    const titleText = product.innerText.toUpperCase();
    product.parentElement.style.display = titleText.includes(filter)
      ? "block"
      : "none";
  });
}

//DINAMIC FOOTER

function dinamicDate() {
  const currentDate = new Date();
  const getDate = currentDate.toDateString();

  date.innerHTML = getDate;
}

dinamicDate();
