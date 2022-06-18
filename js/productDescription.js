
var productImage = document.getElementById("product-img");
var smallImage = document.getElementsByClassName("small-img");


smallImage[0].onclick = function(){
    productImage.src = smallImage[0].src;
}
smallImage[1].onclick = function(){
    productImage.src = smallImage[1].src;
}
smallImage[2].onclick = function(){
    productImage.src = smallImage[2].src;
}
smallImage[3].onclick = function(){
    productImage.src = smallImage[3].src;
}
smallImage[4].onclick = function(){
    productImage.src = smallImage[4].src;
}



var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".popularParts-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });