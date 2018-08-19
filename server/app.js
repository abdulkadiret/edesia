const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const exphbs = require("express-handlebars");
const api = require("./api");
const admin = require("./admin");
require("./passport");
const auth = require("./routes/auth");
const user = require("./routes/user");
const bodyParser = require("body-parser");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);

app.set("view engine", "hbs");

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/user", passport.authenticate("jwt", { session: false }), user);

app.use("/api", api);
app.use("/admin", admin);

app.get("/", (req, res) => res.render("home"));

app.listen(SERVER_PORT, () =>
  console.log(`edesia server running on ${SERVER_PORT}`)
);
