const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const exphbs = require("express-handlebars");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");

app.use(cors());
app.get("/", (req, res) => res.render("home"));
app.get("/admin/drivers", (req, res) => res.render("drivers"));

app.get("/api/status", (req, res) => {
  res.send({
    status: "OK"
  });
});

app.listen(SERVER_PORT, () =>
  console.log(`edesia server running on ${SERVER_PORT}`)
);
