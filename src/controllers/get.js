const { read, write } = require("../utils/FS");

const GET_FULL_DATA = (req, res) => {
  const pharmacies = read("pharmacy.json");
  const medicines = read("medicine.json");
  const { id, name, address, desc, selectPharmacy, search } = req.query;

  if (search) {
    const foundMed = medicines.filter((med) => med.name.includes(search));
    console.log(foundMed);
  }

  if (id && name && address) {
    const foundPharmacy = pharmacies.find((pharmacy) => pharmacy.id == id);
    foundPharmacy.name = name;
    foundPharmacy.address = address;
    write("pharmacy.json", pharmacies);
    return res.redirect("/");
  }

  if (id && name && desc && selectPharmacy) {
    const foundMed = medicines.find((med) => med.id == id);
    foundMed.name = name;
    foundMed.desc = desc;
    foundMed.pharmacy_id = selectPharmacy * 1;
    write("medicine.json", medicines);
    return res.redirect("/");
  }

  res.render("index", { pharmacies, medicines });
};

const GET_DATA = (req, res) => {
  const { id } = req.params;
  const { name, address, desc, selectPharmacy, search } = req.query;

  if (name && address) {
    const pharmacies = read("pharmacy.json");
    const foundPharmacy = pharmacies.find((pharmacy) => pharmacy.id == id);
    foundPharmacy.name = name;
    foundPharmacy.address = address;
    write("pharmacy.json", pharmacies);
    return res.redirect("/");
  }

  if (id && name && desc && selectPharmacy) {
    const medicines = read("medicine.json");
    const foundMed = medicines.find((med) => med.id == id);
    foundMed.name = name;
    foundMed.desc = desc;
    foundMed.pharmacy_id = selectPharmacy * 1;
    write("medicine.json", medicines);
    return res.redirect("/");
  }

  const pharmacies = read("pharmacy.json");
  const medicines = read("medicine.json").filter(
    (medicine) => medicine.pharmacy_id == id
  );

  // if (search) {
  //   let foundMed = read("medicine.json").filter((med) =>
  //     med.name.includes(search)
  //   );
  //   console.log(foundMed);

  //   foundMed.forEach((medi) => {
  //     medi.address = pharmacies?.find((pharm) => pharm.id == medi.id)?.address;
  //   });

  //   return res.render("index", { pharmacies, medicines, foundMed });
  // }

  // <% if (foundMed) { foundMed?.map((med) => { %>
  //   <div class="card" style="width: 18rem">
  //     <div class="card-body">
  //       <h3 class="card-title"><%= med?.name %></h2>
  //       <p class="card-text"><%= med?.address %></p>
  //     </div>
  //   </div>
  //   <% })} %>

  res.render("index", { pharmacies, medicines });
};

module.exports = {
  GET_FULL_DATA,
  GET_DATA,
};
