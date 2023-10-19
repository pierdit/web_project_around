const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://s3-alpha-sig.figma.com/img/3dbe/7008/cf5622c19034ae50ddc30348e49c2ac6?Expires=1698624000&Signature=PtScEr7YsbB6pfwBefWB-n80fgPXPz7A5dSkrubNPT4o1WQj3AZ2gBc1KzewnGGWZ7qQ0tui5PkFhSYkgHFhb1tenFjoP0VVBiMuJC0CKeUKYSX7pKUKzo8sU7DIwu8u~qdQjrAXR0wX-7KDtW~umGsmwdHKXDRJ3AlyFWrqHSlY0iy9ohQ6A9UIf373R3vbSeI9mh2fqPsvT-pBzZoZbrxBga9hy19jBkcmZFDkOdzbXwgIf3zZ7wWglDblgD-pPX3vOWvdrfdTrz-XosMKttaOncASol999893Qj8dKqNBRVCbQ3qtWHmBNhAq9jNz~nvfN-0T52zTjDLg0bxeaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Vanoise National Park",
    link: "https://s3-alpha-sig.figma.com/img/906f/6bf6/cf25eb556dd75f223d72ade0d4bccb93?Expires=1698624000&Signature=pRyFtwOvM~cXyIOsOt6yib1ABQRwvLXqCI16x9t6LKtKbuZJQRu2VAnzRx54XmoGq-OGDE9wLSLGHG~captTpNIwLUh9S80rXZJqmmeEvT4weON1RS9UxruZ2OAaB~muZutq558B2nMWGR7Ogcucf0AbWRqQrLl~vznxSDWJBTD71TJJe8u7pHmRZQRW2be4d005jZoik0mH3FLO2DQ~UWbbagT4sAxxBco5dHGyGVedGq5dKzYje4AWceqx0ZD1wzKwoyIWXWnTOjqgNb5rkw0Yp-MVe3FKLNiDhuf77w664lbo594C-ajeMvc-DYqDUSBKoyoyh2PVjaFgCPgnjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Latemar",
    link: "https://s3-alpha-sig.figma.com/img/de4f/23b1/370b713bab6281cf68c1f6d4782362bd?Expires=1698624000&Signature=FDlm7GUmw~FfWKdU8a2yQiUj6mn4zD4Z434pyAsn6AmGvuUp5hpDp61t5bJgm3a1rASq8gnBGNUtt6exdBcdl7mqltEXx1QQlsUKbQrP6qyAs7b3Bk0oZsXtTfbiqr0qf2nD-CLE1fYI1IOOjTpGjx8KkZ~kXxEJXVMmPJ5Q~-khmNHcidiNEkd0cFF8ioI8Thl~qo~GC-EjxX67WdZJ5gNTWoN7W4wivIQ6XcczMHRKWK72uMKJIqCQDfXOjR0ItfvTk8LVqiC8UIWXY~jhKiYfLYe5NdEqDrWtxLawFfWV5KeSpQhBq6K72lCZmgnAC832DHepb464Hv839hVL-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Pegunungan Gundul",
    link: "https://s3-alpha-sig.figma.com/img/5777/c3a0/1f7043c8a872fcb759976babd53a3d4e?Expires=1698624000&Signature=kcBzljZc58lquCyMFqOiv21rQx7HTIQq5ZjVW0kRq5K02fvQo7ZKMCAmtxO3WOSQdnEkdZs892TBqtDfw9E5dFry7~5mRtzZ6ANGfnYSGNXHqwkuR7VONGdr5vs9qtNMQ5Yy5BWBe5hRUCa0W5nmaCeeH7dYK05jQmLitoSG8qw8YuXXM7QyhXBeX-6OhQPjY5pr922sKnBkCkLKO6czNAEXOGYII2BaFnS0h16jmvEptUgUeWheSzP13WjO9~mw5YSEJJ~iJMAmZVGMEkspm7h~E5IJo9a3gK7L9y~6wZJKVj2gSgeqlh99vc41aowos9hD5UOzuq8eOG9bMif2Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Danau Louise",
    link: "https://s3-alpha-sig.figma.com/img/221c/fcb6/f665950ee520ab6c9cc460dd246710c4?Expires=1698624000&Signature=o6VapulMWaKiEA~brQbkK6TN84u68vY-W26Y3-GSGRKzoaOCup7ooQFEP1DHDqD1wrelmUkA8Nelr2YF~4gASg-HDT3vDv5GdYHdEyjcfj1Cgdw8qXPh7lw5gQrL1FH0HDxQ0jWR1Ym1f1w3VX3~XMvX3Qp87eM7BnIYg4ullihaK~StFmDeITtFH0mVJdw8kcjXFJYYKNYEWIOSI3ob~o0L2xtLlBDFN3nJyRNqUeTc5Q1NWpD8KPhPCQn0b6R~zvNtL3EEq16dU~OsNIj9ZYnLVAEp-tWikb6N7IeLdcVjP5uaJkbGywxKVpl5tEGv85yiKMirmazZNW5gU0QsNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Lembah Yosemite",
    link: "https://s3-alpha-sig.figma.com/img/4678/c5ba/8916c0b28b3e15fdbea3fa7a96fe0cd5?Expires=1698624000&Signature=kiPua4bRgNynOQoZTe5WTVaG-Cteu1kG5SPPhRtRsV1kOke29GbpfIZNLfVvAofncu054BPQbOkboiCLju~EcTQrspn6mEOV6bAqZ68jr817qgmFDQVaigEyEyN8-bnugX8BsfRqPtf9zcqdyoWjneNvWTLa4glMUc~eBfdv0kXenx8X6OdA1oT8XLFdMTmos-kOs3NYQO6i1y5JKGrpNJv1iLWdpi7uo3Yd3Y0FsgSZCutq7QbzcPp-5ghzUsxISofp4yn9MombUGqLTmEidTi1ufCimLKmJD5gjEuV5p88vkV~PgNcbNi-6Ujdgo4oa7VD-x~J4qgkTw6ZzQsuIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
const profile = document.querySelector(".profile");
const profilName = profile.querySelector(".profile__name");
const profilAbout = profile.querySelector(".profile__about");

const editBtn = profile.querySelector(".profile__edit-button");
const addBtn = profile.querySelector(".profile__add-button");

const popup = document.querySelector("#popup");
const popupEdit = popup.querySelector(".popup_edit");
const inputName = popupEdit.querySelector(".popup__input_name");
const inputDescription = popupEdit.querySelector(".popup__input_about");

const popupAdd = popup.querySelector(".popup_add");
const inputTitle = popupAdd.querySelector(".popup__input_title");
const inputUrl = popupAdd.querySelector(".popup__input_url");
const errTitle = popupAdd.querySelector(".popup__valid-title");
const errUrl = popupAdd.querySelector(".popup__valid-url");

function handleCloseBtnPopup() {
  const closeBtn = Array.from(popup.querySelectorAll(".popup__close"));
  closeBtn.forEach((item) => {
    const popupImage = popup.querySelector(".popup_images");
    item.addEventListener("click", () => {
      popupEdit.classList.remove("popup_opened");
      popupAdd.classList.remove("popup_opened");
      popupImage.classList.remove("popup_opened");
      inputTitle.value = "";
      inputUrl.value = "";
    });
  });
}

function handleCardAdd(name, link) {
  const cardTemplate = document.querySelector("#template__cards").content;
  const cardsContainer = document.querySelector(".cards");
  const cardElement = cardTemplate
    .querySelector(".card")
    .cloneNode(true);
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = `Image ${name}`;
  cardElement.querySelector(".card__title").textContent = name;

  cardsContainer.prepend(cardElement);
}
function btnLikeToogle(item) {
  const btnLike = item.target.classList.contains("card__like-icon_active");
  btnLike
    ? item.target.classList.remove("card__like-icon_active")
    : item.target.classList.add("card__like-icon_active");
}

function handleBtnLikeToggle() {
  const btnLikes = Array.from(document.querySelectorAll(".card__like-icon"));
  btnLikes.forEach((item) => {
    item.addEventListener("click", btnLikeToogle);
  });
  
}

function handleValidFormAdd() {
  if (inputTitle.value === "") {
    errTitle.classList.add("popup__valid_success");
    return false;
  }
  if (!inputUrl.value.includes("https")) {
    if (inputTitle.value !== "") {
      errTitle.classList.remove("popup__valid_success");
    }
    errUrl.classList.add("popup__valid_success");
    return false;
  }
  return true;
}


editBtn.addEventListener("click", () => {
  const editBtnSubmit = popupEdit.querySelector(".popup__submit");
  popupEdit.classList.add("popup_opened");
  handleCloseBtnPopup();

  inputName.value = profilName.textContent;
  inputDescription.value = profilAbout.textContent;
  editBtnSubmit.disabled = true;
  popupEdit.addEventListener("input", () => {
    const nameValue = inputName.value;
    const descriptionValue = inputDescription.value;
    const profileNameText = profilName.textContent;
    const profileAboutText = profilAbout.textContent;
    const isAnyInputEmpty = nameValue === "" || descriptionValue === "";
    const hasChanged =
      nameValue !== profileNameText || descriptionValue !== profileAboutText;
    editBtnSubmit.disabled = !(hasChanged && !isAnyInputEmpty);
  });
});

popupEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profilName.textContent = inputName.value;
  profilAbout.textContent = inputDescription.value;
  popupEdit.classList.remove("popup_opened");
});

addBtn.addEventListener("click", () => {
  popupAdd.classList.add("popup_opened");
  errTitle.classList.remove("popup__valid_success");
  errUrl.classList.remove("popup__valid_success");
  handleCloseBtnPopup();
});

popupAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formValidator = handleValidFormAdd();
  if (!formValidator) return false;

  initialCards.unshift({ name: inputTitle.value, link: inputUrl.value });
  handleCardAdd(inputTitle.value, inputUrl.value);

  inputTitle.value = "";
  inputUrl.value = "";

  popupAdd.classList.remove("popup_opened");
  handleBtnLikeToggle();
  handleDelCardButton();
  handleCardImagePopup();
});

initialCards.forEach((item) => {
  handleCardAdd(item.name, item.link);
});

handleBtnLikeToggle();
handleDelCardButton();
handleCardImagePopup();