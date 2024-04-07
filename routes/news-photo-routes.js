const express = require("express");
const cors = require("cors");
const newsPhotoController = require("../controllers/news-photo-controller");

const router = express.Router();
router.use(cors());

router.get("/", cors(), newsPhotoController.getPosts);
// router.get("/:search.:item", newsPhotoController.getPost);
router.post("/add", cors(), newsPhotoController.postPost);
router.post("/upload", cors(), newsPhotoController.addFile);
router.put("/", cors(), newsPhotoController.putPost);
router.delete("/:id", cors(), newsPhotoController.deletePost);

router.use((request, response) => response.status(404).end());

module.exports = router;
