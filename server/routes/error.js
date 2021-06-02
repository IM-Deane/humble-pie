const express = require("express");
const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

// Handle 404 errors
router.use((req, res) => {
	res.status(404).sendFile(path.join(rootDir, "/", "error.html"));
});

module.exports = router;
