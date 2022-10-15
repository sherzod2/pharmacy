const express = require("express");
const router = express.Router();

const GET = require("../controllers/get");
const POST = require("../controllers/post");
const DELETE = require("../controllers/delete");
const PUT = require("../controllers/put");

// dataset dan object jo`natishni
router
  .get("/:id", GET.GET_DATA)
  .get("/", GET.GET_FULL_DATA)
  .post("/newPharmacy", POST.POST_NEW_PHARMACY)
  .post("/newMedicine", POST.POST_NEW_MEDICINE)
  .post("/search", POST.POST_SEARCH)
  .delete("/deletePharm/:id", DELETE.DELETE_PHARMACY)
  .delete("/deleteMed/:id", DELETE.DELETE_MEDICINE)
  .post("/what", PUT);

module.exports = router;
