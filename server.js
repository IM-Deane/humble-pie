const express = require("express");
const app = express();
const { urlencoded } = require("body-parser");
const port = 3000 || 5500;

// Routes
const homeRoute = require("./server/routes");
const contactRoute = require("./server/routes/contact");
const errorPage = require("./server/routes/error");

// Body parser
app.use(express.json());
app.use(urlencoded({ extended: false }));
// Path to imgs and CSS
app.use(express.static("assets"));
// Path to PDF menu
app.use("/humble-pie-menu.pdf", express.static("humble-pie-menu.pdf"));

// Middleware
app.use(homeRoute);
app.use(contactRoute);
// Handle 404 errors
app.use(errorPage);

app.listen(port, (err) => {
	if (err) console.error("Error encounter when starting server.", err);
	console.log(`Server listening at http://localhost:${port}`);
});
