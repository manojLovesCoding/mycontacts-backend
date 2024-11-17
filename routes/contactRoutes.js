const express = require("express");
const { CreateContact, getContacts, getContact, updateContact, deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getContacts).post(CreateContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);;
module.exports = router;

