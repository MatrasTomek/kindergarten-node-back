const express = require("express");
const cors = require("cors");
const postController = require("../controllers/blog-post-controller");

const router = express.Router();
router.use(cors());

router.get("/", cors(), postController.getPosts);
// router.get("/:search.:item", postController.getPost);
router.post("/add", cors(), postController.postPost);
router.post("/upload", cors(), postController.addFile);
router.put("/", cors(), postController.putPost);
router.delete("/:id", cors(), postController.deletePost);

router.use((request, response) => response.status(404).end());

module.exports = router;
