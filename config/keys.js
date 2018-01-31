if (process.env.NODE_ENV === "production") {
  // Return production keys
  module.exports = require("./prod");
} else {
  // Return development keys
  module.exports = require("./dev");
}
