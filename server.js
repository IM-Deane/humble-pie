const express = require("express");
const app = express();
const { urlencoded } = require("body-parser");

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

// Listen to requests on port 3000
app.listen(3000);
