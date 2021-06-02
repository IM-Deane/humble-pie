const express = require("express");
const router = express.Router();

// Import path module
const path = require("path");
// Path helper
const rootDir = require("../util/path");

router.get("/", (req, res) => {
	console.log(path.join(rootDir, "/", "index.html"));
	res.sendFile(path.join(rootDir, "/", "index.html"));
});

module.exports = router;
