const headers = document.querySelectorAll(".accordion-header");
const modalClose = document.querySelector('.close-btn')
const burgerMenu = document.querySelector('.burger-btn')
const modal = document.querySelector('.modal-mobile')
const mainImg = document.getElementById("main-product-image");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const icon = header.querySelector("i");
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".accordion-content").style.maxHeight = null;
      const iconInside = i.querySelector(".accordion-header i");
      if (iconInside) {
        iconInside.classList.remove("ri-arrow-up-s-line");
        iconInside.classList.add("ri-arrow-down-s-line");
      }
    });
    if (!isActive) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      if (icon) {
        icon.classList.remove("ri-arrow-down-s-line");
        icon.classList.add("ri-arrow-up-s-line");
      }
    }
  });
});

document.querySelectorAll(".accordion-list").forEach((i) => {
  const item = i.querySelectorAll("li");
  if (item.length > 4) {
    i.style.gridTemplateColumns = "repeat(2, 1fr)";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const variantInput = document.getElementById("variant-id");
  const colorBoxes = document.querySelectorAll(".color");
  const variantTitle = document
    .getElementById("variantTitle")
    .querySelector("span");
  const productPrice = document.getElementById('productPrice')

  colorBoxes.forEach((color) => {
    color.addEventListener("click", () => {
      const imgSrc = color.dataset.img;
      if (imgSrc && mainImg) {
        mainImg.src = imgSrc;
      }

      const title = color.dataset.title;
      if (title) {
        variantTitle.textContent = title;
      }

      const variantId = color.dataset.variantId;
      if (variantId) {
        variantInput.value = variantId;
      }

      const price = color.dataset.price
      if(price && productPrice) {
        productPrice.textContent = price
      }

      colorBoxes.forEach((c) => c.classList.remove("active"));
      color.classList.add("active");
    });
  });
});

document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", () => {
    document
      .querySelectorAll(".color")
      .forEach((i) => i.classList.remove("active"));
    color.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const arrListImg = Array.from(document.querySelectorAll(".list-img"));
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  const imageUrls = arrListImg.map((img) => img.dataset.full);

  let currentIndex = imageUrls.indexOf(mainImg.src);

  if (currentIndex === -1) {
    currentIndex = 0;
    mainImg.src = imageUrls[0];
  }

  function updateImg(index) {
    currentIndex = index;
    mainImg.src = imageUrls[currentIndex];
  }

  leftBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateImg(newIndex);
  });

  rightBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % imageUrls.length;
    updateImg(newIndex);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".img-box");

  const slidesPerView = parseInt(slider.dataset.slides);
  const spaceBetween = parseInt(slider.dataset.space);
  const showArrows = slider.dataset.arrows === "true";
  const showPagination = slider.dataset.pagination === "true";
  const listImgs = Array.from(document.querySelectorAll('.img-list li'))

  listImgs.forEach((li, index) => {
    if(index < slidesPerView) {
        li.style.display = 'block'
    } else {
        li.style.display = 'none'
    }
  })
  

  console.log("Слайдов на экране:", slidesPerView);
  console.log("Отступ между слайдами:", spaceBetween);
  console.log("Показать стрелки:", showArrows);
  console.log("Показать пагинацию:", showPagination);

  const listItems = slider.querySelectorAll(".img-list li");
  listItems.forEach((li, index) => {
    if (index < listItems.length - 1) {
      li.style.marginRight = spaceBetween + "px";
    }
  });

  if (!showArrows) {
    document
      .querySelectorAll(".arrow")
      .forEach((arrow) => (arrow.style.display = "none"));
  }

  if (showPagination) {
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("simple-pagination");
    listItems.forEach(() => {
      // const dot = document.createElement("span");
      // dot.classList.add("dot");
      dotsContainer.appendChild(dot);
    });
    slider.appendChild(dotsContainer);
  }
  if (!showPagination) {
    const imgList = document.querySelector(".img-list");
    if (imgList) imgList.style.display = "none";
  }
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none'
})

burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if(!modal.contains(e.target) && e.target !== burgerMenu) {
    modal.style.display = 'none'
  }
})