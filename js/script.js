
var link = document.querySelector(".button-search");
var popup = document.querySelector(".hotel-search");
var form = popup.querySelector(".hotel-search-form");
var dateIn = popup.querySelector("[name=input-date]");
var dateOut = popup.querySelector("[name=output-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener('DOMContentLoaded', function(){
  popup.classList.toggle("modal-close");
  if (storage) {
    adults.value = storage;
    children.value = storage;
  }
}, false);

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  if (storage) {
    adults.value = storage;
    children.value = storage;
  }
});

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Для корректного поиска необходимо заполнить все поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});
