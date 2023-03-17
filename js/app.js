///pop up
let popupLink = document.querySelectorAll(".popup-link");
let closePopup = document.querySelector(".popup_close");
let popup = document.querySelector(".popup");
let popupBody = document.querySelector(".popup_body");
// console.log(popupLink);
// let unlock = true;
// let timeout = 800;

if (popupLink.length > 0) {
  for (let i = 0; i < popupLink.length; i++) {
    let popupLinks = popupLink[i];
    popupLinks.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
    });
  }
}

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_content")) {
    popup.classList.remove("active");
  }
});