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
	res.sendFile(path.join(rootDir, "/", "contact.html"));
});

// When submiting contact form
router.post("/contact", (req, res) => {
	// Check if checkbox input was true
	if (req.body.noBots) {
		const name = req.body.name;
		const email = req.body.email;
		const msg = req.body.msg;

		// Create template page that renders the users message back to them
		res.status(200).send(
			`<!DOCTYPE html>
	<html lang="en">
	<head>
		<!-- Stylesheets -->
		<link rel="stylesheet" type="text/css" href="/css/reset.css" />
		<link rel="stylesheet" type="text/css" href="/css/styles.css" />
		<!-- Google Fonts -->
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&family=Fjalla+One&display=swap"
			rel="stylesheet"
		/>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Thanks for contacting Humble Pie Co.</title>
	</head>
	<body>
		<main id="thanks">
			<div>
				<h1 style="margin: 20px 0; font-size: 2rem">
					Thanks for contacting us!
				</h1>
				<h2 style="font-size: 1.3rem; margin: 20px 0;">Your message:</h2>
				<p>Name: ${name}</p>
				<p style="padding: 20px">E-mail: ${email}</p>
				<p>Message: ${msg}</p>
				<a href="/" style="font-size: 1.2rem; margin-top: 30px">Go back home</a>
			</div>
		</main>
	</body>
</html>`
		);
	} else {
		// Person not human
		res.sendStatus(403);
	}
});

module.exports = router;
