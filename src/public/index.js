const searchInput = document.querySelector(".header__search-input");
const pharmaciesItems = document.querySelectorAll(".pharmacies__item");
const medicinesItems = document.querySelectorAll(".medicines__item");
const cardTitle = document.querySelector(".card-title");
const cardDesc = document.querySelector(".card-text");
const medicine = document.querySelector(".medicine");
const deletePharmacies = document.querySelectorAll(".pharmacies__delete");
const deleteMeds = document.querySelectorAll(".medicines__delete");

const editPharmacies = document.querySelectorAll(".pharmacies__edit");
const editPharmNameInput = document.querySelector(".edit-pharmacy-name");
const editPharmAddressInput = document.querySelector(".edit-pharmacy-address");
const editPharmIdInput = document.querySelector(".edit-pharmacy-id");

const editMedicines = document.querySelectorAll(".medicines__edit");
const editMedNameInput = document.querySelector(".edit-medicine-name");
const editMedDescInput = document.querySelector(".edit-medicine-desc");
const editMedSelectPharm = document.querySelectorAll(".edit-select-pharm");
const editMedIdInput = document.querySelector(".edit-medicine-id");

searchInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

pharmaciesItems?.forEach((element) => {
  element.addEventListener("click", (e) => {
    window.location.href = `${e.target.dataset.id}`;
    pharmaciesItems?.forEach((item) => {
      if (item == element) {
        element.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

medicinesItems?.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.dataset.name && e.target.dataset.desc) {
      medicine.classList.remove("hidden");
      cardTitle.textContent = e.target.dataset.name;
      cardDesc.textContent = e.target.dataset.desc;
    } else {
      medicine.classList.add("hidden");
    }

    medicinesItems?.forEach((item) => {
      if (item == element) {
        element.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

deletePharmacies?.forEach((element) => {
  element.addEventListener("click", (e) => {
    fetch(`http://localhost:7777/deletePharm/${e.target.dataset.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) window.location.href("/");
      });
  });
});

deleteMeds?.forEach((element) => {
  element.addEventListener("click", (e) => {
    fetch(`http://localhost:7777/deleteMed/${e.target.dataset.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) window.location.href("/");
      });
  });
});

editPharmacies?.forEach((element) => {
  element.addEventListener("click", (e) => {
    const { id, name, address } = e.target.dataset;

    editPharmNameInput.value = name;
    editPharmAddressInput.value = address;
    editPharmIdInput.value = id;
  });
});

editMedicines?.forEach((element) => {
  element.addEventListener("click", (e) => {
    const { id, name, desc, pharmId } = e.target.dataset;

    editMedSelectPharm?.forEach((option) => {
      if (option.value == pharmId) {
        option.setAttribute("selected", "");
      }
    });

    editMedNameInput.value = name;
    editMedDescInput.value = desc;
    editMedIdInput.value = id;
  });
});
