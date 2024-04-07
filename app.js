const express = require("express");
const app = express();
const helmet = require("helmet");
const config = require("./_config");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUploader = require("express-fileupload");
const serveIndex = require("serve-index");
const morgan = require("morgan");
const _ = require("lodash");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/login-routes");
const postsRoutes = require("./routes/blog-post-routes");
const mailRoutes = require("./routes/mail-routes");

const DB = config.DB;
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(
	cors({
		origin: ["http://localhost:3000", "http://localhost:3001", "https://mawexback.b4a.app"],
		credentials: true,
	}),
);
app.use(fileUploader());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/mail", mailRoutes);

app.use("/ftp", express.static("controllers/uploads"), serveIndex("controllers/uploads", { icons: true }));
app.use(helmet());
app.listen(8000, () => console.log("Server has started on port: 8000"));
