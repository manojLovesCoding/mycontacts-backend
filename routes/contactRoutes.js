const express = require("express");
const { CreateContact, getContacts, getContact, updateContact, deleteContact } = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getContacts);

router.route("/").post(CreateContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;