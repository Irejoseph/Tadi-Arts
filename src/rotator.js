export function rotateImage() {
  const images = [
    "../assets/3eyed head.jpeg",
    "../assets/cottagecore doodles.jpeg",
    "../assets/finger up bean.jpeg",
    "../assets/sketch.jpeg",
  ];

  let current = 0;
  const imgElement = document.querySelector(".rotator-img");

  setInterval(() => {
    current = (current + 1) % images.length;
    imgElement.style.opacity = 0;

    setTimeout(() => {
      imgElement.src = images[current];
      imgElement.style.opacity = 1;
    }, 500); // wait for fade out before switching image
  }, 6000); // rotate every 4 seconds
}
