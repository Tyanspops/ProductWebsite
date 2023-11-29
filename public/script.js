const toggleButton = document.querySelector(".toggle-button1");
const toggleElement = document.getElementById("toggle1");
const productOne = document.getElementById("productOne");
toggleButton.addEventListener("click", function () {
  if (
    toggleElement.style.display === "none" ||
    toggleElement.style.display === ""
  ) {
    toggleElement.style.display = "block";
  } else {
    toggleElement.style.display = "none";
  }
});
productOne.addEventListener("mouseover", function () {
  productOne.style.border = "1px solid yellow";
});
productOne.addEventListener("mouseout", function () {
  productOne.style.border = "1px solid white";
});

const toggleButton2 = document.querySelector(".toggle-button2");
const toggleElement2 = document.getElementById("toggle2");
const productTwo = document.getElementById("productTwo");
toggleButton2.addEventListener("click", function () {
  if (
    toggleElement2.style.display === "none" ||
    toggleElement2.style.display === ""
  ) {
    toggleElement2.style.display = "block";
  } else {
    toggleElement2.style.display = "none";
  }
});
productTwo.addEventListener("mouseover", function () {
  productTwo.style.border = "1px solid yellow";
});
productTwo.addEventListener("mouseout", function () {
  productTwo.style.border = "1px solid white";
});

const toggleButton3 = document.querySelector(".toggle-button3");
const toggleElement3 = document.getElementById("toggle3");
const productThree = document.getElementById("productThree");
toggleButton3.addEventListener("click", function () {
  if (
    toggleElement3.style.display === "none" ||
    toggleElement3.style.display === ""
  ) {
    toggleElement3.style.display = "block";
  } else {
    toggleElement3.style.display = "none";
  }
});
productThree.addEventListener("mouseover", function () {
  productThree.style.border = "1px solid yellow";
});
productThree.addEventListener("mouseout", function () {
  productThree.style.border = "1px solid white";
});

const toggleButton4 = document.querySelector(".toggle-button4");
const toggleElement4 = document.getElementById("toggle4");
const productFour = document.getElementById("productFour");
toggleButton4.addEventListener("click", function () {
  if (
    toggleElement4.style.display === "none" ||
    toggleElement4.style.display === ""
  ) {
    toggleElement4.style.display = "block";
  } else {
    toggleElement4.style.display = "none";
  }
});
productFour.addEventListener("mouseover", function () {
  productFour.style.border = "1px solid yellow";
});
productFour.addEventListener("mouseout", function () {
  productFour.style.border = "1px solid white";
});

function closeAdvertisement() {
  var advertisement = document.getElementById("advertisement");
  advertisement.style.display = "none";
}
