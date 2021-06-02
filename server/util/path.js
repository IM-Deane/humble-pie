const path = require("path");
const main = require.main;

// Get the absolute path of server.js
module.exports = path.dirname(main.filename);
