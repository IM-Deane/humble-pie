const express = require("express");
// Create router middleware
const router = express.Router();

// Core path module
const path = require("path");
// Path helper module
const rootDir = require("../util/path");

// When landing on the contact page
router.get("/contact", (req, res) => {
	// Construct absolute file path to contact.html
	console.log(path.join(rootDir, "/", "contact.html"));
	res.sendFile(path.join(rootDir, "/", "contact.html"));
});

// When submiting contact form
router.post("/contact", (req, res) => {
	console.log(req.body);
	// Redirect user to contact page
	res.redirect("back");
});

module.exports = router;
