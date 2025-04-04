const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function showImage(i) {
  const img = document.getElementById("carousel-img");
  img.src = images[i];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}
