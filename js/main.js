/*popup write us*/
var openButtonPopupWriteUs = document.querySelector(".about-us__button_popup-write-us");
var popupWriteUs = document.querySelector(".popup_write-us");
var closeButtonPopupWriteUs = popupWriteUs.querySelector(".popup__button-close");
var formPopupWriteUs = popupWriteUs.querySelector(".popup-write-us__form");
var inputFIOPopupWriteUs = popupWriteUs.querySelector("#popup-write-us__input-FIO");
var inputEmailPopupWriteUs = popupWriteUs.querySelector("#popup-write-us__input-email");
var textareaPopupWriteUs = popupWriteUs.querySelector("#popup-write-us__textarea-content");


var isStorageSupport = true;
var storageFIO = "";
var storageEmail = "";
var storageDescription = "";

try {
  storageFIO = localStorage.getItem("FIO");
  storageEmail = localStorage.getItem("Email");
  storageDescription = localStorage.getItem("Description");
} catch (err) {
  isStorageSupport = false;
}

openButtonPopupWriteUs.addEventListener("click", function (event) {
  event.preventDefault();
  popupWriteUs.classList.toggle("visually-hidden");
  popupWriteUs.classList.toggle("zoomIn");

  if (storageFIO || storageEmail || storageDescription) {
    inputFIOPopupWriteUs.value = storageFIO;
    inputEmailPopupWriteUs.value = storageEmail;
    textareaPopupWriteUs.value = storageDescription;
  }

  inputFIOPopupWriteUs.focus();
});

closeButtonPopupWriteUs.addEventListener("click",function (event) {
  event.preventDefault();
  popupWriteUs.classList.toggle("visually-hidden");
});

formPopupWriteUs.addEventListener("submit",function (event) {
  if (!inputFIOPopupWriteUs || !inputEmailPopupWriteUs || !textareaPopupWriteUs) {
    event.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("FIO", inputFIOPopupWriteUs.value);
      localStorage.setItem("Email", inputEmailPopupWriteUs.value);
      localStorage.setItem("Description", textareaPopupWriteUs.value);
    }
  }

});


/*popup map*/

var openButtonPopupMap = document.querySelector(".about-us__img");
var popupMap = document.querySelector(".popup_map");
var closeButtonPopupMap = popupMap.querySelector(".popup__button-close");


openButtonPopupMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.toggle("visually-hidden");
});

closeButtonPopupMap.addEventListener("click",function (event) {
  event.preventDefault();
  popupMap.classList.toggle("visually-hidden");

});

window.addEventListener("keydown",function (event) {
  if (event.keyCode === 27){
    if (!popupWriteUs.classList.contains("visually-hidden")) {
      event.preventDefault();
      popupWriteUs.classList.toggle("visually-hidden");
    }

    if (!popupMap.classList.contains("visually-hidden")) {
      event.preventDefault();
      popupMap.classList.toggle("visually-hidden");
    }
  }
},true);
