let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name");
let profileAbout = profile.querySelector(".profile__about");

let editButton = profile.querySelector(".profile__edit-button");

let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close");
let formElement = popup.querySelector(".popup_edit");
let popupEdit = popup.querySelector(".popup_edit");
let inputName = popupEdit.querySelector(".popup__input_name");
let inputAbout = popupEdit.querySelector(".popup__input_about");


let profileNameText = profileName.textContent;
let profileAboutText = profileAbout.textContent;

function handleProfileFormShow() {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handleProfileFormHide() {
  popup.classList.remove("popup_opened")
}

function handleProfileFormSubmit(evt) {
  // ignore default behaviour
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  handleProfileFormHide();
}

editButton.addEventListener('click', handleProfileFormShow);
closeButton.addEventListener('click', handleProfileFormHide);
formElement.addEventListener('submit', handleProfileFormSubmit);