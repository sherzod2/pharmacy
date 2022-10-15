const { read, write } = require("../utils/FS");

const DELETE_PHARMACY = (req, res) => {
  const { id } = req.params;

  console.log("delete");

  const pharmacies = read("pharmacy.json").filter(
    (pharmacy) => pharmacy.id != id
  );

  write("pharmacy.json", pharmacies);

  res.send("OK");
};

const DELETE_MEDICINE = (req, res) => {
  const { id } = req.params;

  const medicines = read("medicine.json").filter(
    (medicine) => medicine.id != id
  );

  write("medicine.json", medicines);

  res.send("OK");
};

module.exports = {
  DELETE_PHARMACY,
  DELETE_MEDICINE,
};
