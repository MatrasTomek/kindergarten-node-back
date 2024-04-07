const express = require("express");
const { priceMail, formMail, reservationMail } = require("../controllers/mail-controller");

const router = express.Router();

router.post("/price", priceMail);
router.post("/form", formMail);
router.post("/reservation", reservationMail);

router.use((request, response) => response.status(404).end());

module.exports = router;
