const express = require("express");
const { addUser, delUser, getUser, postUser, putUser } = require("../controllers/login-controller");

const router = express.Router();

router.post("/", postUser);
router.post("/add", addUser);
router.get("/:userId", getUser);
router.put("/", putUser);
router.delete("/:id.:password", delUser);
router.use((request, response) => response.status(404).end());

module.exports = router;
