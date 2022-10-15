const { read, write } = require("../utils/FS");

const POST_SEARCH = (req, res) => {
  const { search } = req.body;

  res.redirect("/");
};

const POST_NEW_PHARMACY = (req, res) => {
  const { name, address } = req.body;

  const pharmacies = read("pharmacy.json");

  pharmacies.push({
    id: pharmacies[pharmacies.length - 1].id + 1,
    name,
    address,
  });

  write("pharmacy.json", pharmacies);

  res.redirect("/");
};

const POST_NEW_MEDICINE = (req, res) => {
  const { name, selectPharmacy, desc } = req.body;

  const medicines = read("medicine.json");

  medicines.push({
    id: medicines[medicines.length - 1].id + 1,
    pharmacy_id: selectPharmacy * 1,
    name,
    desc,
  });

  write("medicine.json", medicines);

  res.redirect("/");
};

module.exports = {
  POST_SEARCH,
  POST_NEW_MEDICINE,
  POST_NEW_PHARMACY,
};
