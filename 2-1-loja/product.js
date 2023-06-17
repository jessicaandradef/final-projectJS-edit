const containerSection = document.getElementById("productContainer");
const btnAddToCart = document.querySelector("#btnAddToCart");
const relatedProductSection = document.querySelector("#related-product");
const date = document.querySelector(".footer__tertiary-date");

// DISPLAY IMAGES

const getProducts = async function () {
  const request = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
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
            <a href="product.html">
            <img
                src="${element.image}"
                alt="${element.description}"/></a>
          </div>
          <h3 class="product-name">${element.title}</h3>
          <p>${element.price} € </p>
          <p>${element.rating.rate} ☆☆☆	 </p>
        </div>`;
    boxContent.appendChild(boxImage);
    containerSection.append(boxContent);
  });
};

getProducts();

// ADD TO CART

btnAddToCart.addEventListener("click", (e) => {
  const data = {
    userId: 8,
    date: dinamicDate(),
    products: [{ productId: 18 }, { quantity: 1 }],
  };
  console.log(data);

  fetch("https://fakestoreapi.com/carts/7", {
    method: "update",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

//// NEW PRODUCT CATEGORY AND FILTER

const filterProducts = async function () {
  const request = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const response = await request.json();

  const filterImages = response.filter((element, index) => index < 3);
  console.log(filterImages);

  filterImages.forEach((element) => {
    const boxContent = document.createElement("div");
    const boxImage = document.createElement("div");

    boxImage.classList.add("box__img");
    boxContent.classList.add("box__store-content");
    boxContent.innerHTML = `<div class="box__store-content
    ">
          <div class="box__img">
            <a href="product.html">
            <img
                src="${element.image}"
                alt="${element.description}"/></a>
          </div>
          <h3 class="product-name">${element.title}</h3>
          <p>${element.price} € </p>
          <p>${element.rating.rate} ☆☆☆	 </p>
        </div>`;
    boxContent.appendChild(boxImage);
    relatedProductSection.append(boxContent);
  });
};

filterProducts();

// DINAMIC FOOTER

function dinamicDate() {
  const currentDate = new Date();
  const getDate = currentDate.toDateString();

  date.innerHTML = getDate;
  return getDate;
}

dinamicDate();
